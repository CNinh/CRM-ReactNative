import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './InfoTab.style';

import IcServices from '../../../assets/icons/toolbox.svg';
import IcBox from '../../../assets/icons/tab-box.svg';
import IcDescription from '../../../assets/icons/align-left.svg'
import IcFile from '../../../assets/icons/paperclip.svg'
import IcExcel from '../../../assets/icons/file-excel.svg';
import IcWord from '../../../assets/icons/file-word.svg';
import IcPdf from '../../../assets/icons/file-pdf.svg';
import IcImage from '../../../assets/icons/file-image.svg';
import IcDocument from '../../../assets/icons/document.svg';
import IcView from '../../../assets/icons/tab-eye.svg';
import IcDownload from '../../../assets/icons/download.svg';

import { optServices, optDescription, optAttachments } from '../../../data/mockData';

const InfoTab = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const serviceList = item?.services || []; // thay optServices khi lấy api

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
        <View style={styles.container}>
            <View style={styles.cardSection}>
                <View style={styles.sectionHeader}>
                    <IcServices width={18} height={18} color="#185FA5" />
                    <Text style={styles.sectionTitle}>Dịch vụ liên quan</Text>
                </View>

                <View style={styles.serviceList}>
                    {optServices.map((service, index) => {
                        const isLast = index === optServices.length - 1;
                        return (
                            <View
                                key={service.id || index}
                                style={[styles.serviceItem, isLast && styles.serviceItemLast]}
                            >
                                <IcBox width={36} height={36} color="#1A7FC1" />
                                <View style={styles.serviceTextGroup}>
                                    <Text style={styles.serviceName}>{service.name}</Text>
                                    <Text style={styles.serviceDesc}>{service.desc}</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>

            <View style={styles.cardSection}>
                <View style={styles.sectionHeader}>
                    <IcDescription width={18} height={18} color="#185FA5" />
                    <Text style={styles.sectionTitle}>Mô tả / Nội dung</Text>
                </View>

                <Text
                    style={styles.descriptionText}
                    numberOfLines={isExpanded ? undefined : 6}
                >
                    {optDescription || 'Không có nội dung'}
                </Text>

                <TouchableOpacity
                    style={styles.toggleMoreBtn}
                    onPress={() => setIsExpanded(!isExpanded)}
                    activeOpacity={0.7}
                >
                    <Text style={styles.toggleMoreText}>
                        {isExpanded ? 'Rút gọn' : 'Xem thêm'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardSection}>
                <View style={styles.sectionHeader}>
                    <IcFile width={18} height={18} color="#2971BF" />
                    <Text style={styles.sectionTitle}>Tập tin đính kèm</Text>
                </View>

                <View style={styles.fileList}>
                    {optAttachments.map((file, index) => (
                        <View key={file.id || index} style={styles.fileCard}>
                            <View style={styles.fileInfo}>
                                {renderFileIcon(file.type)}
                                <Text style={styles.fileName} numberOfLines={1}>
                                    {file.name}
                                </Text>
                            </View>

                            <View style={styles.fileActions}>
                                <TouchableOpacity style={styles.actionIconBtn} activeOpacity={0.7}>
                                    <IcView width={22} height={22} color="#7E8387" />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.actionIconBtn} activeOpacity={0.7}>
                                    <IcDownload width={22} height={22} color="#7E8387" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default React.memo(InfoTab);