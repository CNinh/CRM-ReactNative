import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import styles from './MemberTab.style';
import Avatar from '../../../components/avatars/Avatar';

import IcEdit from '../../../assets/icons/edit.svg';
import IcDelete from '../../../assets/icons/delete.svg';

import { optMembers } from '../../../data/mockData';

const renderRoleBadge = (roleName, index) => {
   let bgColor = '';
   let textColor = '';

   switch (roleName) {
      case 'AM':
         bgColor = '#E6F1FB';
         textColor = '#185FA5';
      break;
      case 'BA':
         bgColor = '#FAEEDA';
         textColor = '#854F0B';
      break;
      case 'Kiểm thử':
      case 'Tester':
         bgColor = '#E1F5EE';
         textColor = '#0F6E56';
      break;
      case 'PM':
         bgColor = '#EEEDFE';
         textColor = '#3C3489';
      break;
      case 'Quản lý':
         bgColor = '#F09595';
         textColor = '#A32D2D';
      break;
      default:
         bgColor = '#E6F1FB';
         textColor = '#185FA5';
      break;
   }

   return (
      <View key={index} style={[styles.roleBadge, { backgroundColor: bgColor }]}>
         <Text style={[styles.roleText, { color: textColor }]}>{roleName}</Text>
      </View>
   );
};

const MemberItem = ({ member, onEdit, onDelete }) => {
   const swipeableRef = useRef(null);

   const renderRightActions = () => {
      return (
         <View style={styles.swipeActionContainer}>
            <TouchableOpacity
               style={[styles.actionBtn, styles.btnEdit]}
               onPress={() => {
                  swipeableRef.current?.close();
                  onEdit && onEdit(member);
               }}
               activeOpacity={0.8}
            >
               <IcEdit width={16} height={16} color="#FFFFFF" />
               <Text style={styles.actionText}>Sửa</Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={[styles.actionBtn, styles.btnDelete]}
               onPress={() => {
                  swipeableRef.current?.close();
                  onDelete && onDelete(member);
               }}
               activeOpacity={0.8}
            >
               <IcDelete width={16} height={16} color="#FFFFFF" />
               <Text style={styles.actionText}>Xóa</Text>
            </TouchableOpacity>
         </View>
      );
   };

   return (
      <View style={styles.swipeWrapper}>
         <Swipeable
            ref={swipeableRef}
            renderRightActions={renderRightActions}
            overshootRight={false}
         >
            <View style={styles.memberItem}>
               <Avatar
                  name={member.name}
                  uri={member.avatar}
                  size={50}
                  style={{ marginRight: 16 }}
               />

               <View style={styles.infoContainer}>
                  <Text style={styles.memberName}>{member.name}</Text>

                  <Text style={styles.subInfoText} numberOfLines={1}>
                     {member.username}
                     {member.dept ? ` — ${member.dept}` : ''}
                  </Text>

                  {member.roles && member.roles.length > 0 && (
                     <View style={styles.roleRow}>
                        {member.roles.map((r, idx) => renderRoleBadge(r, idx))}
                     </View>
                  )}
               </View>
            </View>
         </Swipeable>
      </View>
   );
};

const MemberTab = ({ item, data, onEditMember, onDeleteMember }) => {
   const dataToRender = data !== undefined 
      ? data 
      : optMembers.filter(m => m.opportunityId === (item?.id || 1));

   const handleDelete = (member) => {
      Alert.alert(
         'Xác nhận xóa',
         `Bạn có chắc chắn muốn xóa thành viên "${member.name}" khỏi cơ hội này?`,
         [
            { text: 'Hủy', style: 'cancel' },
            {
               text: 'Xóa',
               style: 'destructive',
               onPress: () => onDeleteMember && onDeleteMember(member)
            }
         ]
      );
   };

   if (!dataToRender || dataToRender.length === 0) {
      return null; 
   }

   return (
      <View style={styles.container}>
         {dataToRender.map((member) => (
            <MemberItem
               key={member.id}
               member={member}
               onEdit={onEditMember}
               onDelete={handleDelete}
            />
         ))}
      </View>
   );
};

export default MemberTab;