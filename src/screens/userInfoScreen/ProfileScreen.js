import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import styles from './ProfileScreen.style';

import IcUser from '../../assets/icons/user.svg';
import IcCamera from '../../assets/icons/camera.svg';
import IcInfo from '../../assets/icons/info-circle.svg';
import IcEdit from '../../assets/icons/save_edit.svg';
import IcAtSign from '../../assets/icons/at_sign.svg';
import IcPerson from '../../assets/icons/person-user.svg';
import IcMail from '../../assets/icons/mail-user.svg';
import IcPhone from '../../assets/icons/mobile.svg';
import IcShield from '../../assets/icons/shield-lock.svg';
import IcLock from '../../assets/icons/lock.svg';
import IcArrowR from '../../assets/icons/arrow_right.svg';

import { user } from '../../data/mockData';

const ProfileScreen = ({ navigation }) => {

  const handleEdit = () => {
    navigation.navigate('UpdateProfile', { user });
  };

  const handleChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.headerContainer}>
        <View style={styles.userContainer}>
          <TouchableOpacity style={styles.avatarWrapper}>
            <View style={styles.avatarContainer}>
              {user.avatar ? (
                <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
              ) : (
                <IcUser width={46} height={49} color="#FFFFFF" />
              )}
            </View>

            <View style={styles.cameraBadge}>
              <IcCamera width={12} height={12} color="#000000" />
            </View>
          </TouchableOpacity>

          <View style={styles.userText}>
            <Text style={styles.userName}>{user.fullName}</Text>
            <Text style={styles.userDepartment}>{user.dept.name}</Text>
          </View>
        </View>
      </View>

      {/* Info section */}
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          {/* Thông tin tài khoản */}
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderTitleRow}>
              <View style={styles.iconCircleHeader}>
                <IcInfo width={22} height={22} color="#1A7FC1" />
              </View>
              <Text style={styles.cardHeaderTitle}>Thông tin tài khoản</Text>
            </View>

            <TouchableOpacity
              style={styles.btnEdit}
              onPress={handleEdit}
              activeOpacity={0.7}
            >
              <IcEdit width={16} height={16} color="#1A7FC1" />
              <Text style={styles.txtEdit}>Chỉnh sửa</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <IcAtSign width={18} height={18} color="#1A7FC1" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Tài khoản</Text>
              <Text style={styles.infoValue}>{user.username}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <IcPerson width={18} height={18} color="#1A7FC1" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Họ và tên</Text>
              <Text style={styles.infoValue}>{user.fullName}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <IcMail width={18} height={18} color="#1A7FC1" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{user.email}</Text>
            </View>
          </View>

          <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
            <View style={styles.iconContainer}>
              <IcPhone width={22} height={22} color="#1A7FC1" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Số điện thoại</Text>
              <Text style={styles.infoValue}>{user.phone}</Text>
            </View>
          </View>
        </View>

        {/* Bảo mật */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderTitleRow}>
              <IcShield width={22} height={22} color="#1A7FC1" />
              <Text style={styles.cardHeaderTitle}>Bảo mật</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.securityRow}
            onPress={handleChangePassword}
            activeOpacity={0.7}
          >
            <View style={styles.securityLeft}>
              <View style={styles.iconContainer}>
                <IcLock width={21} height={21} color="#1A7FC1" />
              </View>
              <Text style={styles.infoValue}>Đổi mật khẩu</Text>
            </View>
            <IcArrowR width={16} height={16} color="#000000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;