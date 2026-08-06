import { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    DeviceEventEmitter
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './CreateOpportunityScreen.style';
import DropDownList from '../../components/lists/DropDownList';

import IcBuilding from '../../assets/icons/building.svg';
import IcBox from '../../assets/icons/box.svg';
import IcPlus from '../../assets/icons/plus.svg';
import IcAlignR from '../../assets/icons/align-right.svg';
import IcAlignL from '../../assets/icons/align-left.svg';
import IcAlignJ from '../../assets/icons/align-justify.svg';
import IcAlignC from '../../assets/icons/align-center.svg';
import IcListN from '../../assets/icons/list-ol.svg';
import IcExcel from '../../assets/icons/file-excel.svg';
import IcEye from '../../assets/icons/tab-eye.svg';
import IcDelete from '../../assets/icons/delete.svg';
import IcSave from '../../assets/icons/save.svg';

import { mockContact, service as mockServiceList } from '../../data/mockData';

const CreateOpportunityScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { item, department = item?.dept } = route.params || {};

    const [name, setName] = useState('');
    const [contact, setContact] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [contactDate, setContactDate] = useState('');

    const [selectedServices, setSelectedServices] = useState(item?.services || []);

    const [winRate, setWinRate] = useState(item?.probability ? String(item.probability) : '');
    const [expectedValue, setExpectedValue] = useState(item?.expectedValue ? String(item.expectedValue) : '');
    const [content, setContent] = useState(item?.description || '');
    const [files, setFiles] = useState([
        { id: '1', name: 'danhsachbophan14042026.xlsx' }
    ]);

    const [errors, setErrors] = useState({})

    const displayServices = selectedServices.slice(0, 2);
    const otherServices = selectedServices.length - 2;

    const handleSelectService = (selected) => {
        setSelectedService(selected);
        if (selected && selected.name && !selectedServices.includes(selected.name)) {
            setSelectedServices(prev => [...prev, selected.name]);
        }
    };

    const handleSave = () => {
        const requiredError = {};

        if (!name.trim()) requiredError.name = 'Tên cơ hội không được để trống';
        if (!contactDate.trim()) requiredError.contactDate = 'Ngày trao đổi không được để trống';

        if (Object.keys(requiredError).length > 0) {
            setErrors(requiredError);
            return;
        }
        setErrors({});

        const payload = {
            id: Date.now(),
            name,
            dept: department,
            contact,
            contactDate,
            services: selectedServices,
            probability: winRate,
            expectedValue,
            content,
            files
        };

        DeviceEventEmitter.emit('ADD_OPPORTUNITY_SUCCESS', payload);
        navigation.goBack();
    };

    const handleRemoveFile = (fileId) => {
        setFiles(prev => prev.filter(f => f.id !== fileId));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.deptCard}>
                    <IcBuilding width={40} height={40} color="#000000" />
                    <Text style={styles.deptTitle}>{department}</Text>
                </View>

                <View style={styles.formCard}>
                    <View style={styles.fieldGroup}>
                        <Text style={styles.label}>
                            Tên cơ hội <Text style={styles.required}>*</Text>
                        </Text>

                        {errors.name && (
                            <Text style={styles.errorText}>{errors.name}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder=""
                            value={name}
                            onChangeText={(text) => {
                                setName(text);
                                if (errors.name) setErrors(prev => ({ ...prev, name: null }));
                            }}
                        />
                    </View>

                    <View style={styles.fieldGroup}>
                        <Text style={styles.label}>Người liên hệ</Text>
                        <DropDownList
                            placeholder="Chọn Người liên hệ"
                            dropDownHeight={40}
                            data={mockContact}
                            selectedItem={contact}
                            onSelect={(item) => setContact(item)}
                        />
                    </View>

                    <View style={styles.fieldGroup}>
                        <Text style={styles.label}>
                            Ngày trao đổi <Text style={styles.required}>*</Text>
                        </Text>

                        {errors.contactDate && (
                            <Text style={styles.errorText}>{errors.contactDate}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="dd/mm/yyyy  hh:mm"
                            placeholderTextColor="#C4C4C4"
                            keyboardType='numeric'
                            value={contactDate}
                            onChangeText={(text) => {
                                setContactDate(text);
                                if (errors.contactDate) setErrors(prev => ({ ...prev, contactDate: null }));
                            }}
                        />
                    </View>

                    <View style={styles.fieldGroup}>
                        <Text style={styles.label}>Sản phẩm dịch vụ</Text>
                        <DropDownList
                            placeholder="Chọn dịch vụ"
                            dropDownHeight={40}
                            data={mockServiceList}
                            selectedItem={selectedService}
                            onSelect={handleSelectService}
                        />

                        <View style={styles.tagGroup}>
                            {displayServices.map((srv, idx) => (
                                <View key={idx} style={styles.serviceTag}>
                                    <IcBox width={12} height={12} color="#000000" />
                                    <Text style={styles.serviceText}>{srv}</Text>
                                </View>
                            ))}
                            {otherServices > 0 && (
                                <View style={[styles.serviceTag, { backgroundColor: '#E6F1FB', borderColor: '#B5D4F4' }]}>
                                    <IcPlus width={14} height={14} color="#185FA5" />
                                    <Text style={[styles.serviceText, { color: '#185FA5' }]}>
                                        {otherServices} dịch vụ khác
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>

                    <View style={styles.rowTwoFields}>
                        <View style={[styles.fieldGroup, { flex: 1, marginRight: 8 }]}>
                            <Text style={styles.label}>Xác suất chốt (%)</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                onChangeText={setWinRate}
                            />
                        </View>
                        <View style={[styles.fieldGroup, { flex: 1, marginLeft: 8 }]}>
                            <Text style={styles.label}>Giá trị dự kiến (triệu)</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                onChangeText={setExpectedValue}
                            />
                        </View>
                    </View>

                    <View style={styles.fieldGroup}>
                        <Text style={styles.label}>Nội dung</Text>
                        <View style={styles.editorContainer}>
                            <View style={styles.editorToolbar}>
                                <View style={styles.textEditor}>
                                    <TouchableOpacity style={styles.toolBtn}><Text style={styles.toolText}>B</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtn}><Text style={[styles.toolText, { fontStyle: 'italic', fontFamily: 'serif' }]}>I</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtn}><Text style={[styles.toolText, { textDecorationLine: 'underline' }]}>U</Text></TouchableOpacity>
                                </View>
                                <View style={styles.lineEditor}>
                                    <TouchableOpacity style={styles.toolBtnIc}><IcAlignR width={16} height={16} color="#000000" /></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtnIc}><IcAlignL width={16} height={16} color="#000000" /></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtnIc}><IcAlignJ width={16} height={16} color="#000000" /></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtnIc}><IcAlignC width={16} height={16} color="#000000" /></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtnIc}><IcListN width={16} height={16} color="#000000" /></TouchableOpacity>
                                </View>
                            </View>
                            <TextInput
                                style={styles.editorInput}
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                                onChangeText={setContent}
                            />
                        </View>
                    </View>

                    <View style={styles.fieldGroup}>
                        <Text style={styles.label}>Files</Text>
                        <TouchableOpacity style={styles.filePicker} activeOpacity={0.7}>
                            <Text style={styles.placeholderText}>Chọn File</Text>
                        </TouchableOpacity>

                        {files.map((file) => (
                            <View key={file.id} style={styles.fileItemRow}>
                                <View style={styles.fileMainInfo}>
                                    <IcExcel width={22} height={22} color="#3B6D11" />
                                    <Text style={styles.fileName} numberOfLines={1}>{file.name}</Text>
                                </View>
                                <View style={styles.fileActions}>
                                    <TouchableOpacity style={{ marginRight: 12 }}>
                                        <IcEye width={20} height={20} color="#7E8387" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleRemoveFile(file.id)}>
                                        <IcDelete width={16} height={16} color="#C62828" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={{ height: 30 }} />
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnSave} activeOpacity={0.8} onPress={handleSave}>
                    <IcSave width={20} height={20} color="#FFFFFF" />
                    <Text style={styles.btnSaveText}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CreateOpportunityScreen;