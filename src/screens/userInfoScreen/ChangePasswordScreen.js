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

import IcShield from '../../assets/icons/shield-lock.svg';
import IcSave from '../../assets/icons/save-border.svg';

import { user } from '../../data/mockData';

const ChangePasswordScreen = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleGoBack = () => {
    if (navigation?.canGoBack()) navigation.goBack();
  };

  const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!%\-_+=\[\]{}:,.?<>()\;]).{8,}$/;

  const validateForm = () => {
    let isValid = true;
    const newErrors = { currentPassword: '', newPassword: '', confirmPassword: '' };

    // validate currentPassword
    if (!currentPassword.trim()) {
      newErrors.currentPassword = 'Mật khẩu hiện tại không được để trống';
      isValid = false;
    } else if (currentPassword !== user.password) {
      newErrors.currentPassword = 'Mật khẩu hiện tại không đúng';
      isValid = true;
    }

    // validate newPassword
    const removeTones = (str = '') => {
      return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
    };

    // lowercase password
    const lowerNewPassword = removeTones(newPassword.toLocaleLowerCase());

    // lowercaseUsername
    const lowerUsername = user.username ? user.username.trim().toLowerCase() : '';

    // Tách fullName + bỏ dấu
    const nameWords = user.fullName
      ? removeTones(user.fullName)
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0)
      : [];

    // Check password có chứa tên user hay không
    const hasNameWord = nameWords.some(word => lowerNewPassword.includes(word));

    if (!newPassword.trim()) {
      newErrors.newPassword = 'Mật khẩu mới không được để trống';
      isValid = false;
    } else if (newPassword.length < 8 || newPassword.length > 16) {
      newErrors.newPassword = 'Mật khẩu phải dài từ 8 đến 16 ký tự';
      isValid = false;
    } else if (!regEx.test(newPassword)) {
      newErrors.newPassword = 'Mật khẩu phải Chứa ít nhất 1 chữ hoa, chữ thường, số và các ký tự sau\n! % - _ + = [ ] { } : , . ? < > ( ) ;';
      isValid = false;
    } else if (lowerUsername && lowerNewPassword.includes(lowerUsername)) {
      newErrors.newPassword = 'Mật khẩu không được chứa tên tài khoản (username)';
      isValid = false;
    } else if (hasNameWord) {
      newErrors.newPassword = 'Mật khẩu không được chứa bất kỳ từ nào trong Họ và tên';
      isValid = false;
    } else if (newPassword === currentPassword) {
      newErrors.newPassword = 'Mật khẩu mới không được trùng với mật khẩu hiện tại';
      isValid = false;
    }

    // validate confirmPassword
    if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = 'Mật khẩu không khớp';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;    
  };

  const handleSave = () => {
    if (validateForm()) {
      Alert.alert('Thành công', 'Đổi mật khẩu thành công!', [
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
              <IcShield width={20} height={22} color="#1A7FC1" />
              <Text style={styles.cardHeaderTitle}>Bảo mật</Text>
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
              <Text style={styles.label}>
                Mật khẩu hiện tại <Text style={styles.required}>*</Text>
              </Text>
              {!!errors.currentPassword && (
                <Text style={styles.errorText}>{errors.currentPassword}</Text>
              )}
              <TextInput
                style={[styles.input, !!errors.currentPassword && styles.inputError]}
                secureTextEntry
                value={currentPassword}
                onChangeText={(text) => {
                  setCurrentPassword(text);
                  if (text === user.password) {
                    clearError('currentPassword');
                  }
                }}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Mật khẩu mới <Text style={styles.required}>*</Text>
              </Text>
              {!!errors.newPassword && (
                <Text style={styles.errorText}>{errors.newPassword}</Text>
              )}
              <TextInput
                style={[styles.input, !!errors.newPassword && styles.inputError]}
                secureTextEntry
                value={newPassword}
                onChangeText={(text) => {
                  setNewPassword(text);
                  clearError('newPassword');
                }}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Nhập lại mật khẩu <Text style={styles.required}>*</Text>
              </Text>
              {!!errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
              <TextInput
                style={[styles.input, !!errors.confirmPassword && styles.inputError]}
                secureTextEntry
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  if (text === newPassword) {
                    clearError('confirmPassword');
                  }
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePasswordScreen;