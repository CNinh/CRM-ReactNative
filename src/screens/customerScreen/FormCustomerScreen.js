import { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    Modal,
    FlatList
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './FormCustomerScreen.style';
import ContactCard from '../../components/cards/ContactCard';
import IcSave from '../../assets/icons/save.svg';
import IcArrowD from '../../assets/icons/arrow_down.svg';
import IcPlus from '../../assets/icons/plus.svg';

import { category, state, mockContact, addContact } from '../../data/mockData';

const FormCustomerScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { customerData, onSave } = route.params || {};
    const isEdit = !!customerData;

    const [activeTab, setActiveTab] = useState(0);

    const [formData, setFormData] = useState({
        type: customerData?.category || customerData?.type || '',
        code: customerData?.code || '',
        tax: customerData?.tax || '',
        name: customerData?.title || customerData?.name || '',
        toc: customerData?.toc || '',
        foundingDate: customerData?.foundingDate || '',
        fund: customerData?.fund || '',
        phone: customerData?.contact || customerData?.phone || '',
        email: customerData?.mail || customerData?.email || '',
        fax: customerData?.fax || '',
        website: customerData?.website || '',
        address: customerData?.address || '',
        state: customerData?.state || ''
    });

    const [error, setError] = useState({});

    const [contact, setContact] = useState(mockContact);

    const [dropdownTarget, setDropdownTarget] = useState(null);

    const handleOpenDropdown = (event, field, data, customMaxHeight = 180) => {
        event.currentTarget.measureInWindow((x, y, width, height) => {
            setDropdownTarget({
                field,
                data,
                maxHeight: customMaxHeight,
                layout: { x, y, width, height }
            });
        });
    };

    const handleSelectOption = (field, item) => {
        const selectedValue = item.title || item.name || item.label || item;
        handleChange(field, selectedValue);
        setDropdownTarget(null);
    };

    const handleAddContact = () => {
        navigation.navigate('SelectContactScreen', {
            contactList: addContact,
            selectedId: contact.map(c => c.id),
            onSelectContact: (selectedContact) => {
                setContact(prev => [...prev, selectedContact]);
            }
        });
    };

    const handleEditContact = (item) => {
        navigation.navigate('FormContactScreen', {
            contactData: item,
            onSave: (updatedContact) => {
                setContact(prev => prev.map(c => c.id === updatedContact.id ? updatedContact : c));
            }
        });
    };

    const handleDeleteContact = (id) => {
        Alert.alert('Xác nhận xóa', 'Bạn có chắc chắn muốn xóa người liên hệ này?', [
            { text: 'Hủy', style: 'cancel' },
            {
                text: 'Xóa',
                style: 'destructive',
                onPress: () => setContact(prev => prev.filter(c => c.id !== id))
            }
        ]);
    };

    const handleChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));

        if (error[key]) {
            setError(prev => ({ ...prev, [key]: '' }));
        }
    };

    const handleSave = () => {
        const requiredError = {};

        if (!formData.type?.trim()) requiredError.type = 'Loại khách hàng không được để trống';
        if (!formData.code?.trim()) requiredError.code = 'Mã khách hàng không được để trống';
        if (!formData.tax?.trim()) requiredError.tax = 'Mã số thuế không được để trống';
        if (!formData.name?.trim()) requiredError.name = 'Tên khách hàng không được để trống';
        if (!formData.address?.trim()) requiredError.address = 'Địa chỉ không được để trống';

        if (Object.keys(requiredError).length > 0) {
            setError(requiredError);
            return;
        }

        const saveData = {
            id: customerData?.id || Date.now().toString(),
            code: formData.code,
            name: formData.name,
            title: formData.name,
            category: formData.type,
            state: formData.state || 'Tiềm năng',
            toc: formData.toc,
            contact: formData.phone,
            mail: formData.email,
            address: formData.address,
            tax: formData.tax,
            fax: formData.fax,
            website: formData.website,
            fund: formData.fund,
            foundingDate: formData.foundingDate,
            contacts: contact
        };

        if (onSave) {
            onSave(saveData);
        }

        Alert.alert(
            'Thành công',
            isEdit ? 'Cập nhật thông tin thành công!' : 'Thêm mới khách hàng thành công!',
            [{ text: 'OK', onPress: () => navigation.goBack() }]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Navigation Tab */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 0 && styles.activeTabButton]}
                    onPress={() => setActiveTab(0)}
                >
                    <Text style={[styles.tabText, activeTab === 0 && styles.activeTabText]}>
                        Thông tin khách hàng
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 1 && styles.activeTabButton]}
                    onPress={() => setActiveTab(1)}
                >
                    <Text style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>
                        Thông tin liên hệ
                    </Text>
                </TouchableOpacity>
            </View>

            {activeTab === 1 && (
                <View style={styles.contactHeader}>
                    <Text style={styles.contactCountText}>
                        <Text style={{ fontWeight: 'bold' }}>{contact.length}</Text> người liên hệ
                    </Text>
                    <TouchableOpacity style={styles.btnAddContact} onPress={handleAddContact}>
                        <IcPlus width={20} height={20} color="#1A7FC1" style={{ translateY: 1 }} />
                        <Text style={styles.btnAddContactText}>thêm mới</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Form điền thông tin */}
            {activeTab === 0 ? (
                <>
                    <ScrollView
                        style={styles.scrollBody}
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.cardForm}>
                            {/* Loại khách hàng * */}
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>
                                    Loại khách hàng <Text style={styles.required}>*</Text>
                                </Text>
                                {error.type && <Text style={styles.errorText}>{error.type}</Text>}
                                <TouchableOpacity
                                    style={[styles.dropdownInput, error.type && styles.inputError]}
                                    onPress={(e) => handleOpenDropdown(e, 'type', category)}
                                    activeOpacity={0.7}
                                >
                                    <Text style={formData.type ? styles.inputText : styles.placeholderText}>
                                        {formData.type || 'Chọn loại khách hàng'}
                                    </Text>
                                    <IcArrowD width={20} height={20} color="#7E8387" />
                                </TouchableOpacity>
                            </View>

                            {/* Mã khách hàng * & Mã số thuế * */}
                            <View style={styles.row}>
                                <View style={[styles.formGroup, styles.flex1]}>
                                    <Text style={styles.label}>
                                        Mã khách hàng <Text style={styles.required}>*</Text>
                                    </Text>
                                    {error.code && <Text style={styles.errorText}>{error.code}</Text>}
                                    <TextInput
                                        style={styles.input}
                                        value={formData.code}
                                        onChangeText={text => handleChange('code', text)}
                                    />
                                </View>

                                <View style={[styles.formGroup, styles.flex1]}>
                                    <Text style={styles.label}>
                                        Mã số thuế <Text style={styles.required}>*</Text>
                                    </Text>
                                    {error.tax && <Text style={styles.errorText}>{error.tax}</Text>}
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="numeric"
                                        value={formData.tax}
                                        onChangeText={text => handleChange('tax', text)}
                                    />
                                </View>
                            </View>

                            {/* Tên khách hàng * */}
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>
                                    Tên khách hàng <Text style={styles.required}>*</Text>
                                </Text>
                                {error.name && <Text style={styles.errorText}>{error.name}</Text>}
                                <TextInput
                                    style={styles.input}
                                    value={formData.name}
                                    onChangeText={text => handleChange('name', text)}
                                />
                            </View>

                            {/* Loại công ty */}
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>Loại công ty</Text>
                                <TextInput
                                    style={styles.input}
                                    value={formData.toc}
                                    onChangeText={text => handleChange('toc', text)}
                                />
                            </View>

                            {/* Ngày thành lập & Vốn điều lệ */}
                            <View style={styles.row}>
                                <View style={[styles.formGroup, styles.flex1]}>
                                    <Text style={styles.label}>Ngày thành lập</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="dd/mm/yyyy"
                                        placeholderTextColor="#D3D5D7"
                                        value={formData.foundingDate}
                                        onChangeText={text => handleChange('foundingDate', text)}
                                    />
                                </View>

                                <View style={[styles.formGroup, styles.flex1]}>
                                    <Text style={styles.label}>Vốn điều lệ (triệu)</Text>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="numeric"
                                        value={formData.fund}
                                        onChangeText={text => handleChange('fund', text)}
                                    />
                                </View>
                            </View>

                            {/* Số điện thoại & Email */}
                            <View style={styles.row}>
                                <View style={[styles.formGroup, styles.flex3]}>
                                    <Text style={styles.label}>Số điện thoại</Text>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="phone-pad"
                                        value={formData.phone}
                                        onChangeText={text => handleChange('phone', text)}
                                    />
                                </View>

                                <View style={[styles.formGroup, styles.flex7]}>
                                    <Text style={styles.label}>Email</Text>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        value={formData.email}
                                        onChangeText={text => handleChange('email', text)}
                                    />
                                </View>
                            </View>

                            {/* Fax & Website */}
                            <View style={styles.row}>
                                <View style={[styles.formGroup, styles.flex3]}>
                                    <Text style={styles.label}>Fax</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={formData.fax}
                                        onChangeText={text => handleChange('fax', text)}
                                    />
                                </View>

                                <View style={[styles.formGroup, styles.flex7]}>
                                    <Text style={styles.label}>Website</Text>
                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="none"
                                        value={formData.website}
                                        onChangeText={text => handleChange('website', text)}
                                    />
                                </View>
                            </View>

                            {/* Địa chỉ * */}
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>
                                    Địa chỉ <Text style={styles.required}>*</Text>
                                </Text>
                                {error.address && <Text style={styles.errorText}>{error.address}</Text>}
                                <TextInput
                                    style={styles.input}
                                    value={formData.address}
                                    onChangeText={text => handleChange('address', text)}
                                />
                            </View>

                            {/* Trạng thái */}
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>Trạng thái</Text>
                                <TouchableOpacity
                                    style={styles.dropdownInput}
                                    onPress={(e) => handleOpenDropdown(e, 'state', state, 90)}
                                    activeOpacity={0.7}
                                >
                                    <Text style={formData.state ? styles.inputText : styles.placeholderText}>
                                        {formData.state || 'Chọn trạng thái khách hàng'}
                                    </Text>
                                    <IcArrowD width={20} height={20} color="#7E8387" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>

                    {/* Save button */}
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.btnSave} onPress={handleSave}>
                            <IcSave width={18} height={18} color="#FFFFFF" />
                            <Text style={styles.btnSaveText}>Lưu</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                /* Tab Thông tin liên hệ */
                <ScrollView
                    style={styles.scrollBody}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.contactListContainer}>
                        {contact.map((item) => (
                            <ContactCard
                                key={item.id}
                                item={item}
                                onEdit={handleEditContact}
                                onDelete={handleDeleteContact}
                            />
                        ))}
                    </View>
                </ScrollView>
            )}

            {dropdownTarget && (
                <Modal visible transparent animationType="none" onRequestClose={() => setDropdownTarget(null)}>
                    <TouchableOpacity
                        style={styles.modalOverlay}
                        activeOpacity={1}
                        onPress={() => setDropdownTarget(null)}
                    />

                    <View
                        style={[
                            styles.dropdownListModal,
                            {
                                top: dropdownTarget.layout.y + dropdownTarget.layout.height + 4,
                                left: dropdownTarget.layout.x,
                                width: dropdownTarget.layout.width,
                                maxHeight: dropdownTarget.maxHeight
                            }
                        ]}
                    >
                        <FlatList
                            data={dropdownTarget.data}
                            keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                            keyboardShouldPersistTaps="handled"
                            nestedScrollEnabled={true}
                            renderItem={({ item }) => {
                                const label = item.title || item.name || item.label || item;
                                return (
                                    <TouchableOpacity
                                        style={styles.dropdownListItem}
                                        onPress={() => handleSelectOption(dropdownTarget.field, item)}
                                    >
                                        <Text style={styles.dropdownItemText}>{label}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    );
}

export default FormCustomerScreen;