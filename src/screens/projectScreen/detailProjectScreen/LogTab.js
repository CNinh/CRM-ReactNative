import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './LogTab.style';

import IcCalendar from '../../../assets/icons/tab-calendar.svg';
import IcEdit from '../../../assets/icons/edit.svg';
import IcCheck from '../../../assets/icons/check.svg';
import IcImage from '../../../assets/icons/file-image.svg';

import { prjLogs } from '../../../data/mockData';

const LogItemCard = ({ log, onEdit }) => {
    const isConfirmed = log.status === 'confirmed' || log.statusType === 'confirmed';

    const logComment = log.comment || log.content;
    const reviewerName = log.reviewerName || log.userName;

    return (
        <View style={styles.logCard}>
            <View style={styles.cardTopRow}>
                <View style={styles.userInfoGroup}>
                    <Text style={styles.timeText}>
                        {log.date} {log.time}
                    </Text>

                    {log.level && (
                        <View style={styles.levelBadge}>
                            <Text style={styles.levelText}>{log.level}</Text>
                        </View>
                    )}

                    <Text style={styles.userName} numberOfLines={1}>
                        {reviewerName}
                    </Text>
                </View>
            </View>

            <View style={styles.statusRow}>
                <View style={[
                    styles.statusPill,
                    isConfirmed ? styles.statusConfirmed : styles.statusCommented
                ]}>
                    {isConfirmed && <IcCheck width={14} height={14} color="#2E7D32" />}
                    <Text style={isConfirmed ? styles.statusTextConfirmed : styles.statusTextCommented}>
                        {log.statusLabel || (isConfirmed ? 'Đã xác nhận rà soát' : 'Đã cho ý kiến')}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.btnEdit}
                    activeOpacity={0.7}
                    onPress={() => onEdit && onEdit(log)}
                >
                    <IcEdit width={14} height={14} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            {logComment ? (
                <Text style={styles.logContent} numberOfLines={7}>
                    {logComment}
                </Text>
            ) : null}

            {log.attachment && (
                <View style={styles.attachmentCard}>
                    <IcImage width={18} height={18} color="#854F0B" />
                    <Text style={styles.attachmentText} numberOfLines={1}>
                        {typeof log.attachment === 'object' ? log.attachment.name : log.attachment}
                    </Text>
                </View>
            )}
        </View>
    );
};

const LogTab = ({ item, data, onEditLog }) => {
    const dataToRender = data || [];

    const reviewTitle = dataToRender?.[0]?.reviewTitle || item?.reviewTitle || 'Hiện không có nhật ký rà soát';

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerIconCircle}>
                    <IcCalendar
                        width={20}
                        height={20}
                        style={{ translateX: -0.4, translateY: -1.2 }}
                        color="#FFFFFF"
                    />
                </View>
                <View style={styles.headerPill}>
                    <Text style={styles.headerTitle} numberOfLines={1}>
                        {reviewTitle}
                    </Text>
                </View>
            </View>

            {dataToRender && dataToRender.length > 0 ? (
                dataToRender.map((logItem, index) => (
                    <LogItemCard
                        key={logItem.id || index}
                        log={logItem}
                        onEdit={onEditLog}
                    />
                ))
            ) : null}
        </View>
    );
};

export default LogTab;