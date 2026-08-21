import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert
} from 'react-native';
import styles from './ChangePasswordScreen.style';
import { PhoneInput } from '../../utils/PhoneInput';

import IcInfo from '../../assets/icons/info-circle.svg';
import IcSave from '../../assets/icons/save-border.svg';

import { user } from '../../data/mockData';

const USERNAME_REGEX = /^[a-zA-Z0-9._-]+$/;
const PHONE_REGEX = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/;

const UpdateProfile = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [errors, setErrors] = useState({
        username: '',
        fullName: '',
        email: '',
        phone: ''
    });

    const handleGoBack = () => {
        if (navigation?.canGoBack()) navigation.goBack();
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { username: '', fullName: '', email: '', phone: '' };

        const trimmedUsername = username.trim();
        if (trimmedUsername.length < 3 || trimmedUsername.length > 30) {
            newErrors.username = 'Tài khoản phải có độ dài từ 3 đến 30 ký tự';
            isValid = false;
        } else if (!USERNAME_REGEX.test(trimmedUsername)) {
            newErrors.username = 'Tài khoản chỉ bao gồm chữ không dấu, số, dấu ., _ hoặc -';
            isValid = false;
        }

        const trimmedName = fullName.trim();
        if (!trimmedName) {
            newErrors.fullName = 'Họ và tên không được để trống';
            isValid = false;
        } else if (trimmedName.length < 2 || trimmedName.length > 50) {
            newErrors.fullName = 'Họ và tên phải có độ dài từ 2 đến 50 ký tự';
            isValid = false;
        } else if (!NAME_REGEX.test(trimmedName)) {
            newErrors.fullName = 'Họ và tên không được chứa số hoặc ký tự đặc biệt';
            isValid = false;
        }

        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            newErrors.email = 'Email không được để trống';
            isValid = false;
        } else if (!EMAIL_REGEX.test(trimmedEmail)) {
            newErrors.email = 'Email không hợp lệ';
            isValid = false;
        }

        const cleanPhone = phone.replace(/\s+/, '') // Xoá khoảng trắng nếu có
        if (!cleanPhone) {
            newErrors.phone = 'Số điện thoại không được để trống';
            isValid = false;
        } else if (!PHONE_REGEX.test(cleanPhone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid
    };

    const handleSave = () => {
        if (validateForm()) {
            Alert.alert('Thành công', 'Cập nhật thông tin tài khoản thành công!', [
                { text: 'OK', onPress: () => navigation.goBack() }
            ]);
        }
    };

    // Xoá error khi gõ đúng
    const clearError = (field) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    return (
        <View style={styles.container}>
            {/* Card form */}
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardHeaderLeft}>
                            <IcInfo width={20} height={22} color="#1A7FC1" />
                            <Text style={styles.cardHeaderTitle}>Thông tin tài khoản</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.btnSave}
                            onPress={handleSave}
                            activeOpacity={0.7}
                        >
                            <IcSave width={18} height={18} color="#1A7FC1" />
                            <Text style={styles.txtSave}>Lưu</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Form input */}
                    <View style={styles.formContainer}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Tài khoản</Text>
                            {!!errors.username && (
                                <Text style={styles.errorText}>{errors.username}</Text>
                            )}
                            <TextInput
                                style={[styles.input, !!errors.username && styles.inputError]}
                                value={username}
                                onChangeText={(text) => {
                                    setUsername(text);
                                    clearError('username');
                                }}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>
                                Họ và tên <Text style={styles.required}>*</Text>
                            </Text>
                            {!!errors.fullName && (
                                <Text style={styles.errorText}>{errors.fullName}</Text>
                            )}
                            <TextInput
                                style={[styles.input, !!errors.fullName && styles.inputError]}
                                value={fullName}
                                onChangeText={(text) => {
                                    setFullName(text);
                                    clearError('fullName');
                                }}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>
                                Email <Text style={styles.required}>*</Text>
                            </Text>
                            {!!errors.email && (
                                <Text style={styles.errorText}>{errors.email}</Text>
                            )}
                            <TextInput
                                style={[styles.input, !!errors.email && styles.inputError]}
                                value={email}
                                onChangeText={(text) => {
                                    setEmail(text);
                                    clearError('email');
                                }}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>
                                Số điện thoại <Text style={styles.required}>*</Text>
                            </Text>
                            {!!errors.phone && (
                                <Text style={styles.errorText}>{errors.phone}</Text>
                            )}
                            <PhoneInput
                                value={phone}
                                onChange={(text) => {
                                    setPhone(text);
                                    clearError('phone');
                                }}
                                customInputStyle={[styles.input, !! errors.phone && styles.inputError]}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default UpdateProfile;