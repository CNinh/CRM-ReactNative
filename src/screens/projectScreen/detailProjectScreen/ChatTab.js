import { View, Text } from 'react-native';
import styles from './ChatTab.style';

import IcCalendar from '../../../assets/icons/tab-calendar.svg';
import IcImage from '../../../assets/icons/file-image.svg';

const ChatItem = ({ item, isLast }) => {
   return (
      <View style={styles.chatContainer}>
         <View style={styles.timelineTitle}>
            <View style={styles.iconCircle}>
               <IcCalendar width={20} height={20} color="#FFFFFF" />
            </View>

            <View style={styles.headerGroup}>
               <View style={styles.dateBadge}>
                  <Text style={styles.dateBadgeText}>{item.date}</Text>
               </View>

               <Text style={styles.taskTitle}>
                  <Text style={styles.taskId}>{item.taskCode} · </Text>
                  <Text style={styles.taskName}>{item.taskName}</Text>
                  <Text style={styles.splitter}> | </Text>
                  <Text style={styles.taskLevel}>{item.priority}</Text>
               </Text>
            </View>
         </View>

         <View style={styles.timelineContainer}>
            {!isLast && <View style={styles.timelineLine} />}

            {(item.logs || [item]).map((log, idx) => (
               <View key={log.id || idx} style={styles.chatCard}>
                  <Text style={styles.chatHeader}>
                     <Text style={styles.timeText}>{log.time} · </Text>
                     <Text style={styles.userName}>
                        {log.sender}
                     </Text>
                     <Text style={styles.actionText}> {log.action}</Text>
                  </Text>

                  <View style={styles.chatContent}>
                  {log.content ? (
                     <Text style={styles.chatTitle}>{log.content}</Text>
                  ) : null}

                  {log.attachment && (
                     <View style={styles.attachmentBox}>
                        <IcImage width={16} height={16} color="#854F0B" />
                        <Text style={styles.attachmentName} numberOfLines={1}>
                           {typeof log.attachment === 'object' ? log.attachment.name : log.attachment}
                        </Text>
                     </View>
                  )}
                  </View>
               </View>
            ))}
         </View>
      </View>
   );
};

const ChatTab = ({ data }) => {
   const chatList = Array.isArray(data) ? data : [];

   if (chatList.length === 0) {
      return (
         <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Chưa có trao đổi nào</Text>
         </View>
      );
   }

   return (
      <View style={styles.container}>
         {chatList.map((item, index) => (
            <ChatItem
               key={item.id || index}
               item={item}
               isLast={index === chatList.length - 1}
            />
         ))}
      </View>
   );
};

export default ChatTab;