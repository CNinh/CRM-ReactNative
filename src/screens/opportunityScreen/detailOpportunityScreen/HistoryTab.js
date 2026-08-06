import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, FlatList } from 'react-native';
import styles from './HistoryTab.style';

import IcClock from '../../../assets/icons/clock.svg';
import IcEdit from '../../../assets/icons/save_edit.svg';
import IcPhone from '../../../assets/icons/phone.svg';
import IcArrowR from '../../../assets/icons/arrow_right.svg';
import IcArrowD from '../../../assets/icons/arrow_down.svg';
import IcFile from '../../../assets/icons/paperclip.svg'
import IcExcel from '../../../assets/icons/file-excel.svg';
import IcWord from '../../../assets/icons/file-word.svg';
import IcPdf from '../../../assets/icons/file-pdf.svg';
import IcImage from '../../../assets/icons/file-image.svg';
import IcDocument from '../../../assets/icons/document.svg';
import IcView from '../../../assets/icons/tab-eye.svg';
import IcDownload from '../../../assets/icons/download.svg';

import { optHistories } from '../../../data/mockData';

const HistoryCardItem = ({ item, isLast }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const renderFileIcon = (type) => {
        switch (type) {
            case 'excel':
                return <IcExcel width={20} height={22} color="#3B6D11" />;
            case 'word':
                return <IcWord width={21} height={23} color="#4AA0DF" />;
            case 'pdf':
                return <IcPdf width={24} height={22} color="#E24B4A" />;
            case 'image':
                return <IcImage width={20} height={18} color="#854F0B" />;
            default:
                return <IcDocument width={20} height={20} color="#7E8387" />;
        }
    };

    return (
        <View style={styles.historyItemRow}>
            <View style={styles.leftTimeline}>
                <View style={[styles.avatar, item.userAvatarBg && { backgroundColor: item.userAvatarBg }]}>
                    <Text style={styles.avatarText}>{item.userInitial || 'Avatar'}</Text>
                </View>
                {!isLast && <View style={styles.timelineLine} />}
            </View>

            <View style={styles.rightCard}>
                <View style={styles.cardHeader}>
                    <View style={styles.statusTag}>
                        <Text style={styles.statusTagText}>{item.stage || 'Giai đoạn'}</Text>
                    </View>

                    <View style={styles.timeGroup}>
                        <IcClock width={16} height={16} color="#000000" />
                        <Text style={styles.timeText}>
                            {item.date} <Text style={{ fontWeight: '800' }}>·</Text> {item.time}
                        </Text>
                        {item.canEdit && (
                            <TouchableOpacity style={styles.btnEdit} activeOpacity={0.7}>
                                <IcEdit width={20} height={20} color="#000000" />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                <View style={styles.sectionMember}>
                    {item.participants && item.participants.length > 0 && (
                        <>
                            <Text style={styles.sectionLabel}>Thành viên tham gia:</Text>
                            {item.participants.map((mem, index) => (
                                <Text key={index} style={styles.memberText}>- {mem}</Text>
                            ))}
                        </>
                    )}

                    {item.contactPerson && (
                        <>
                            <Text style={styles.sectionLabel}>Người liên hệ:</Text>
                            <Text style={styles.contactName}>
                                {item.contactPerson.name} {item.contactPerson.dept ? `- ${item.contactPerson.dept}` : ''}
                            </Text>

                            {item.contactPerson.phone && (
                                <TouchableOpacity
                                    style={styles.phonePillBtn}
                                    onPress={() => Linking.openURL(`tel:${item.contactPerson.phone}`)}
                                >
                                    <IcPhone width={14} height={14} color="#FFFFFF" />
                                    <Text style={styles.phonePillText}>{item.contactPerson.phone}</Text>
                                </TouchableOpacity>
                            )}
                        </>
                    )}
                </View>

                {item.content ? (
                    <View style={styles.sectionContent}>
                        <Text style={styles.sectionLabel}>Nội dung:</Text>
                        <Text style={styles.contentText} numberOfLines={isExpanded ? undefined : 4}>
                            {item.content}
                        </Text>

                        <TouchableOpacity
                            style={styles.toggleMoreBtn}
                            onPress={() => setIsExpanded(!isExpanded)}
                            activeOpacity={0.7}
                        >
                            {isExpanded ? (
                                <IcArrowD width={10} height={10} color="#1A7FC1" />
                            ) : (
                                <IcArrowR width={10} height={10} color="#1A7FC1" />
                            )}
                            <Text style={styles.toggleMoreText}>
                                {isExpanded ? 'Thu gọn nội dung' : 'Xem đầy đủ nội dung'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : 'Không có nội dung'}

                {item.attachments && item.attachments.length > 0 && (
                    <View style={styles.sectionFiles}>
                        <View style={styles.fileHeader}>
                            <IcFile width={18} height={18} color="#1A7FC1" />
                            <Text style={styles.fileHeaderTitle}>Tập tin đính kèm</Text>
                        </View>

                        <View style={styles.fileList}>
                            {item.attachments.map((file, idx) => (
                                <View key={file.id || idx} style={styles.fileCard}>
                                    <View style={styles.fileInfo}>
                                        {renderFileIcon(file.type)}
                                        <Text style={styles.fileName} numberOfLines={1}>{file.name}</Text>
                                    </View>
                                    <View style={styles.fileActions}>
                                        <TouchableOpacity activeOpacity={0.7}>
                                            <IcView width={20} height={20} color="#7E8387" />
                                        </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={0.7}>
                                            <IcDownload width={20} height={20} color="#7E8387" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
};

const HistoryTab = ({ item, data }) => {
    const dataToRender = data || [];

    return (
        <View style={styles.container}>
            {dataToRender.map((hist, index) => (
                <HistoryCardItem
                    key={hist.id || index}
                    item={hist}
                    isLast={index === dataToRender.length - 1}
                />
            ))}
        </View>
    );
};

export default HistoryTab;