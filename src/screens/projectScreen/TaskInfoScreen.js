import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './TaskInfoScreen.style';

import IcPlus from '../../assets/icons/plus.svg';
import ICalendar from '../../assets/icons/tab-calendar.svg';
import IcSave from '../../assets/icons/save_edit.svg'
import IcEdit from '../../assets/icons/edit.svg';
import IcDelete from '../../assets/icons/delete.svg';
import IcImage from '../../assets/icons/file-image.svg';
import IcExcel from '../../assets/icons/file-excel.svg';
import IcClose from '../../assets/icons/close.svg';
import IcAddFile from '../../assets/icons/paperclip.svg';
import IcSend from '../../assets/icons/send.svg';

import { prjTasks } from '../../data/mockData';

export const TaskInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const initialTask = route.params?.taskData || prjTasks[0];
  const [task, setTask] = useState(initialTask);
  const [activeTab, setActiveTab] = useState('info'); // 'info' | 'logs'
  const [commentText, setCommentText] = useState('');
  const [pendingFile, setPendingFile] = useState({
    name: 'danh_sach_cong_viec.xlsx',
    size: '245 KB',
    type: 'excel'
  });

  const formatFileName = (fileName, maxLen = 4) => {
    if (!fileName) return '';

    const lastDotIndex = fileName.lastIndexOf('.');
    if (lastDotIndex === -1) {
      return fileName.length > maxLen ? `${fileName.slice(0, maxLen)}...` : fileName;
    }

    const name = fileName.slice(0, lastDotIndex);
    const ext = fileName.slice(lastDotIndex);

    if (name.length > maxLen) {
      return `${name.slice(0, maxLen)}...${ext}`;
    }

    return fileName;
  }

  const handleOpenEdit = () => {
    navigation.navigate('FormTaskScreen')
  }

  const handleSendComment = () => {
    if (!commentText.trim() && !pendingFile) return;

    const newLog = {
      id: Date.now(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: 'Hôm nay',
      author: 'Tôi',
      actionType: 'comment',
      actionText: 'Đã bình luận',
      content: commentText,
      attachment: pendingFile
        ? { id: `att_${Date.now()}`, name: pendingFile, type: 'file', url: '' }
        : null,
    };

    setTask((prev) => ({
      ...prev,
      logs: [newLog, ...(prev.logs || [])],
    }));

    setCommentText('');
    setPendingFile(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Subheader tab */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'info' && styles.activeTabButton]}
          onPress={() => setActiveTab('info')}
        >
          <Text style={[styles.tabText, activeTab === 'info' && styles.activeTabText]}>
            Thông tin công việc
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'logs' && styles.activeTabButton]}
          onPress={() => setActiveTab('logs')}
        >
          <Text style={[styles.tabText, activeTab === 'logs' && styles.activeTabText]}>
            Nhật ký công việc
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContent} contentContainerStyle={styles.contentPadding}>
        {/* Info tab */}
        {activeTab === 'info' ? (
          <View>
            <View style={styles.badgeRow}>
              <View style={[styles.badge, styles.badgeStatus]}>
                <Text style={styles.badgeStatusText}>{task.status}</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{task.priority}</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{task.type}</Text>
              </View>
            </View>

            <View style={styles.progressHeader}>
              <Text style={styles.sectionTitle}>Tiến độ</Text>
              <Text style={styles.progressText}>{task.progress || 0}%</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${task.progress || 0}%` }]} />
            </View>

            <View style={styles.gridContainer}>
              <View style={styles.gridCard}>
                <Text style={styles.gridLabel}>Bắt đầu</Text>
                <Text style={styles.gridValue}>{task.startDate}</Text>
              </View>
              <View style={styles.gridCard}>
                <Text style={styles.gridLabel}>Kết thúc</Text>
                <Text style={styles.gridValue}>{task.endDate}</Text>
              </View>
              <View style={styles.gridCard}>
                <Text style={styles.gridLabel}>Dự tính</Text>
                <Text style={styles.gridValue}>
                  {Number(task.estimatedHours || 0).toFixed(2)} giờ
                </Text>
              </View>
              <View style={styles.gridCard}>
                <Text style={styles.gridLabel}>Thực tế</Text>
                <Text style={styles.gridValue}>
                  {Number(task.actualHours || 0).toFixed(2)} giờ
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Người đảm nhận</Text>
            <View style={styles.cardSection}>
              <View style={styles.assigneeRow}>
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarText}>{task.assigneeAvatar}</Text>
                </View>
                <Text style={styles.assigneeName}>{task.assignee}</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Mô tả</Text>
            <Text style={styles.descriptionText}>{task.description}</Text>

            <Text style={styles.sectionTitle}>File</Text>
            {task.attachments && task.attachments.length > 0 ? (
              task.attachments.map((item) => (
                <View key={item.id} style={styles.fileCard}>
                  <IcExcel width={22} height={22} />
                  <Text style={styles.fileNameText} numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={styles.emptyFileText}>Chưa có file đính kèm</Text>
            )}
          </View>
          // History tab
        ) : (
          <View>
            <View style={styles.dateBadgeContainer}>
              <View style={styles.calendarIconBtn}>
                <ICalendar width={20} height={20} color="#FFFFFF" />
              </View>
              <View style={styles.datePill}>
                <Text style={styles.datePillText}>15/06/2026</Text>
              </View>
            </View>

            {(task.logs || []).map((log) => (
              <View key={log.id} style={styles.logCard}>
                <View style={styles.logHeader}>
                  <Text style={styles.logMetaText}>
                    {log.time} | {log.author} - {log.actionText}
                  </Text>
                  {log.actionType === 'comment' && (
                    <View style={styles.logActions}>
                      <TouchableOpacity style={styles.editBtn}>
                        <IcEdit width={16} height={16} color="#FFFFFF" />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.deleteBtn}>
                        <IcDelete width={16} height={16} color="#FFFFFF" />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                <Text style={styles.logContent}>{log.content}</Text>

                {log.attachment && (
                  <View style={styles.logAttachmentTag}>
                    <IcImage width={18} height={18} color="#854F0B" />
                    <Text style={styles.attachmentName} numberOfLines={1}>
                      {log.attachment.name}
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      {activeTab === 'logs' && pendingFile && (
        <View style={styles.pendingFileOuterContainer}>
          <View style={styles.attachmentPreviewCard}>
            <IcExcel width={20} height={20} color="#3B6D11" />
            <Text style={styles.attachmentPreviewName} numberOfLines={1}>
              {formatFileName(typeof pendingFile === 'string' ? pendingFile : pendingFile.name, 4)}
            </Text>
            <TouchableOpacity
              onPress={() => setPendingFile(null)}
            >
              <IcClose width={12} height={12} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Bottom bar */}
      {activeTab === 'info' ? (
        <View style={styles.bottomBarInfo}>
          <TouchableOpacity style={styles.btnActionPrimary}>
            <IcPlus width={22} height={22} style={{ translateY: 1.2 }} color="#FFFFFF" />
            <Text style={styles.btnActionPrimaryText}>Thêm công việc con</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnActionSecondary}
            onPress={handleOpenEdit}
          >
            <IcSave width={16} height={16} color="#FFFFFF" />
            <Text style={styles.btnActionSecondaryText}>Chỉnh sửa</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.bottomBarLogsContainer}>
          {/* Chat row */}
          <View style={styles.chatInputRow}>
            <TouchableOpacity style={styles.attachFileBtn}>
              <IcAddFile width={20} height={20} color="#7E8387" />
            </TouchableOpacity>
            <TextInput
              style={styles.inputBox}
              placeholder="Thêm bình luận..."
              placeholderTextColor="#999999"
              value={commentText}
              onChangeText={setCommentText}
            />
            <TouchableOpacity style={styles.sendBtn} onPress={handleSendComment}>
              <IcSend width={22} height={22} color="#1A7FC1" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default TaskInfoScreen;