import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import styles from './TaskTab.style';
import DeleteModal from '../../../components/modals/DeleteModal';

import IcSearch from '../../../assets/icons/search.svg';
import IcPlus from '../../../assets/icons/plus.svg';
import IcGridPlus from '../../../assets/icons/grid-plus.svg';
import IcEye from '../../../assets/icons/eye.svg';
import IcEdit from '../../../assets/icons/edit.svg';
import IcTrash from '../../../assets/icons/delete.svg';

const TaskCard = ({ item, onDelete }) => {
   const navigation = useNavigation();

   const handleOpenDetail = () => {
      navigation.navigate('TaskInfoScreen', { taskData: item });
   };

   const handleOpenEdit = () => {
      navigation.navigate('FormTaskScreen');
   }

   const renderRightActions = () => {
      return (
         <View style={styles.actionGroup}>
            <TouchableOpacity
               style={[styles.actionBtn, styles.btnView]}
               onPress={handleOpenDetail}
            >
               <IcEye width={18} height={18} color="#FFFFFF" />
               <Text style={styles.actionText}>Xem</Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={[styles.actionBtn, styles.btnEdit]}
               onPress={handleOpenEdit}
            >
               <IcEdit width={18} height={16} color="#FFFFFF" />
               <Text style={styles.actionText}>Sửa</Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={[styles.actionBtn, styles.btnDelete]}
               onPress={() => onDelete(item)}
            >
               <IcTrash width={18} height={16} color="#FFFFFF" />
               <Text style={styles.actionText}>Xóa</Text>
            </TouchableOpacity>
         </View>
      );
   };

   return (
      <View style={styles.cardWrapper}>
         <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
            <View style={styles.taskCard}>
               <View style={styles.taskTitleHeader}>
                  <Text style={styles.taskCode}>{item.code} </Text>
                  <Text style={styles.taskName}>{item.title}</Text>
               </View>

               <View style={styles.infoGroup}>
                  <View style={styles.leftColumn}>
                     <View style={styles.infoRow}>
                        <Text style={styles.label}>Loại: </Text>
                        <Text style={styles.value}>{item.type}</Text>
                     </View>

                     <View style={styles.infoRow}>
                        <Text style={styles.label}>Bắt đầu: </Text>
                        <Text style={styles.value}>{item.startDate}</Text>
                     </View>
                  </View>

                  <View style={styles.rightColumn}>
                     <View style={styles.statusGroup}>
                        <Text style={styles.label}>Loại: </Text>
                        <View style={styles.statusBadge}>
                           <Text style={styles.statusBadgeText}>{item.status}</Text>
                        </View>
                     </View>

                     <View style={styles.infoRow}>
                        <Text style={styles.label}>Kết thúc: </Text>
                        <Text style={styles.value}>{item.endDate}</Text>
                     </View>
                  </View>
               </View>

               <View style={styles.assigneeBadge}>
                  <Text style={styles.assigneeBadgeText} numberOfLines={1}>
                     {item.assignee}
                  </Text>
               </View>
            </View>
         </Swipeable>
      </View>
   );
};

const TaskTab = ({ data }) => {
   const [searchQuery, setSearchQuery] = useState('');
   const [tasks, setTasks] = useState(Array.isArray(data) ? data : []);

   const [deleteModal, setDeleteModal] = useState({
      visible: false,
      item: null
   });

   useEffect(() => {
      if (Array.isArray(data)) {
         setTasks(data);
      }
   }, [data]);

   const handleOpenDelete = (item) => {
      setDeleteModal({
         visible: true,
         item
      });
   };

   const handleConfirmDelete = () => {
      if (deleteModal.item) {
         setTasks((prev) => prev.filter((t) => t.id !== deleteModal.item.id));
      }
      setDeleteModal({ visible: false, item: null });
   };

   const filteredTasks = tasks.filter((item) => {
      const query = searchQuery.toLowerCase();
      return (
         item.title?.toLowerCase().includes(query) ||
         item.code?.toLowerCase().includes(query)
      );
   });

   return (
      <View style={styles.container}>
         <View style={styles.searchContainer}>
            <IcSearch width={18} height={18} color="#D3D5D7" style={styles.searchIcon} />
            <TextInput
               style={styles.searchInput}
               placeholder="Tìm theo tên, mã dự án"
               placeholderTextColor="#434343"
               value={searchQuery}
               onChangeText={setSearchQuery}
            />
         </View>

         {filteredTasks.length === 0 ? (
            <View style={styles.emptyContainer}>
               <Text style={styles.emptyText}>Chưa có công việc nào</Text>
            </View>
         ) : (
            <ScrollView style={styles.listContainer} contentContainerStyle={{ paddingBottom: 80 }}>
               {filteredTasks.map((item, index) => (
                  <TaskCard 
                     key={item.id || index} 
                     item={item} 
                     onDelete={handleOpenDelete} 
                  />
               ))}
            </ScrollView>
         )}

         <DeleteModal
            isVisible={deleteModal.visible}
            onClose={() => setDeleteModal({ visible: false, item: null })}
            onConfirm={handleConfirmDelete}
            type="công việc"
            title={deleteModal.item ? deleteModal.item.title : ''}
         />
      </View>
   );
};

export default TaskTab;