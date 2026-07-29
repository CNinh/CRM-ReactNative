import { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import styles from "./FormContactScreen.style";

import IcSave from '../../assets/icons/save_edit.svg';

const ContactFormScreen = ({ navigation, route }) => {
    const { contactData, onSave } = route.params || {};
    const isEditMode = Boolean(contactData);

    const [form, setForm] = useState({
        name: '',
        position: '',
        phone: '',
        mobile: '',
        email: '',
        message: '',
        address: '',
        note: '',
    });

    useEffect(() => {
        if (isEditMode && contactData) {
            setForm(contactData);
        }
    }, [contactData, isEditMode]);

    const handleChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        if (!form.name.trim()) {
            // validate goes here
            return;
        }

        const resultData = {
            id: isEditMode ? contactData.id : Date.now().toString(),
            ...form
        };

        if (onSave) {
            onSave(resultData, isEditMode);
        }
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Form */}
            <ScrollView style={styles.body} contentContainerStyle={styles.scrollContent}>
                <View style={styles.cardForm}>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Họ và tên</Text>
                        <TextInput
                            style={styles.input}
                            value={form.name}
                            onChangeText={text => handleChange('name', text)}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Chức vụ</Text>
                        <TextInput
                            style={styles.input}
                            value={form.position}
                            onChangeText={text => handleChange('position', text)}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Điện thoại</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            value={form.phone}
                            onChangeText={text => handleChange('phone', text)}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Di động</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            value={form.mobile}
                            onChangeText={text => handleChange('mobile', text)}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={form.email}
                            onChangeText={text => handleChange('email', text)}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Zalo</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            value={form.message}
                            onChangeText={text => handleChange('message', text)}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Địa chỉ</Text>
                        <TextInput
                            style={styles.input}
                            value={form.address}
                            onChangeText={text => handleChange('address', text)}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Ghi chú</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            multiline
                            numberOfLines={4}
                            textAlignVertical="top"
                            value={form.note}
                            onChangeText={text => handleChange('note', text)}
                        />
                    </View>
                </View>
            </ScrollView>

            {/* Footer Action Button */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
                    <View style={styles.btnSubmitGroup}>
                        <IcSave width={16} height={16} color="#ffffff" />
                        <Text style={styles.btnSubmitText}>
                            {isEditMode ? 'Cập nhật' : 'Thêm liên hệ'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ContactFormScreen;