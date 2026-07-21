import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    Platform,
    ActivityIndicator,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import styles from './LoginScreen.style';
import logoImg from '../../assets/images/loginScreen/logo.png'
import backgroundImg from '../../assets/images/loginScreen/background.png'
import { loginService } from '../../services/requestDefaultAPI';
import { err } from 'react-native-svg/lib/typescript/xml';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);
    const [rememberPassword, setRememberPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [serverError, setServerError] = useState('');
    const [failCount, setFailCount] = useState(0);

    const handleLogin = async () => {
      const newFailCount = failCount + 1;
      setFailCount(newFailCount);

      setUsernameError('');
      setPasswordError('');
      setServerError('');

      let hasError = false;

      if (!username.trim()) {
        setUsernameError('Dữ liệu [Tên đăng nhập] bắt buộc nhập');
        hasError = true;
      }

      if (!password.trim()) {
        setPasswordError('Dữ liệu [Mật khẩu] bắt buộc nhập');
        hasError = true;
      }

      if (hasError) return;

      setIsLoading(true);
      try {
        const data = await loginService(username, password);

        if (data && data.token) {
          setFailCount(0);
          // Thêm lưu token sau khi hoàn thiện màn hình signup
          console.log('Đăng nhập thành công, token:', data.token);
        }
      } catch (error) {
        console.log('Lỗi đăng nhập hệ thống: ', error);

        let msg = error.response?.data?.message || 'Thông tin tài khoản hoặc mật khẩu chưa chính xác';
        setServerError(msg);
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                
        <View style={styles.headerContainer}>
          <Image 
            source={backgroundImg}
            style={styles.bgHeader} 
          />
          <View style={styles.logoOverlay}>
            <Image 
              source={logoImg}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={[styles.input, usernameError ? { borderColor: 'red', borderWidth: 1 } :null]}
            placeholder="Tên tài khoản"
            placeholderTextColor="#999999"
            value={username}
            onChangeText={(text) => {
                setUsername(text);
                if (text.trim()) setUsernameError('');
            }}
            autoCapitalize="none"
            editable={!isLoading}
          />
          {usernameError ? <Text style={{ color: 'red', fontSize: 13, marginTop: -10, marginBottom: 20, paddingLeft: 5 }}>{usernameError}</Text> : null}

          <TextInput
            style={[styles.input, passwordError ? { borderColor: 'red', borderWidth: 1 } : null]}
            placeholder="Mật khẩu"
            placeholderTextColor="#999999"
            value={password}
            onChangeText={(text) => {
                setPassword(text);
                if (text.trim()) setPasswordError('');
            }}
            secureTextEntry={secureText}
            autoCapitalize="none"
            editable={!isLoading}
          />
          {passwordError ? <Text style={{ color: 'red', fontSize: 13, marginTop: -10, marginBottom: 10, paddingLeft: 5 }}>{passwordError}</Text> : null}

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={!secureText ? 'checked' : 'unchecked'}
              onPress={() => setSecureText(!secureText)}
              color="#0077b6"
            />
            <Text style={styles.checkboxLabel}>Hiển thị mật khẩu</Text>
          </View>

          <TouchableOpacity
            style={[styles.loginButton, isLoading && { backgroundColor: '#a8dadc' }]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
                <ActivityIndicator color="#ffffff" />
            ) : (
                <Text style={styles.loginButtonText}>Đăng nhập</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.supportContainer}>
          <Text style={styles.supportText}>
            - Số điện thoại Hỗ trợ/ Email là: <Text style={styles.boldRed}>1800 1555 Nhánh 3</Text>
          </Text>
          <Text style={styles.supportText}>
            - Địa chỉ Email hỗ trợ: <Text style={styles.boldRed}>hotro.email@vnpt.vn</Text>
          </Text>
          <Text style={styles.supportText}>
            - Đối với quên mật khẩu, hết hạn mật khẩu soạn tin nhắn:
          </Text>
          <Text style={[styles.supportText, { paddingLeft: 10 }]}>
            <Text style={styles.boldText}>MK&lt;khoảng cách&gt;&lt;Tên truy cập&gt;</Text> gửi <Text style={styles.boldText}>293</Text>
          </Text>
          <Text style={styles.supportText}>
            - Ví dụ: <Text style={styles.boldText}>MK nguyenvana.lcu</Text> gửi <Text style={styles.boldText}>293</Text>
          </Text>
          <Text style={styles.supportText}>
            - Để đổi mật khẩu, truy cập vào <Text style={styles.linkText}>đường dẫn này</Text>
          </Text>

          {failCount > 0 ? (
            <View style={{ marginTop: 10}}>
                <Text style={{ color: '#d90429', fontWeight: 'bold', marginBottom: 2 }}>
                  Bạn đã đăng nhập sai [{failCount}] lần
                </Text>
                <Text style={{ color: '#d90429', fontWeight: 'bold', fontSize: 13, lineHeight: 18 }}>
                  Lưu ý: Tài khoản và IP của bạn sẽ bị khoá nếu bạn đăng nhập sai quá [5] lần.
              </Text>
            </View>
          ) : null}
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Số điện thoại Hỗ trợ/ Email/ Xác thực tập trung là:
        </Text>
        <Text style={[styles.footerText, { color: '#d90429', fontWeight: 'bold' }]}>
          18001555 Nhánh 3
        </Text>
      </View>
    </SafeAreaView>
    );
};

export default LoginScreen;