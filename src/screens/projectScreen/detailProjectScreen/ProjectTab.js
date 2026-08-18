import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ProjectTab.style';

import IcInfo from '../../../assets/icons/info.svg';
import IcArrowD from '../../../assets/icons/arrow_up.svg';
import IcArrowR from '../../../assets/icons/arrow_right.svg';

import { optServices, optDescription, optAttachments } from '../../../data/mockData';

const ProjectTab = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getRateColor = (rateValue) => {
        if (rateValue >= 70) return '#56A856';
        if (rateValue < 50) return '#C62828';
        return '#E19E2E';
    };

    const rateNum = item?.successRate ?? 100;

    return (
        <View style={styles.container}>
            <View style={styles.cardSection}>
                <View style={styles.sectionHeader}>
                    <IcInfo width={18} height={18} color="#185FA5" />
                    <Text style={styles.sectionTitle}>Thông tin chung</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Mã dự án</Text>
                    <Text style={[styles.value, styles.boldText]}>#{item.code}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Ngày bắt đầu</Text>
                    <Text style={styles.value}>{item.date}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Khách hàng</Text>
                    <Text style={[styles.value, styles.blueText, { textTransform: 'uppercase' }]} numberOfLines={2}>
                        {item.dept}. {item.location}
                    </Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Người tạo</Text>
                    <Text style={styles.value}>{item.creator}</Text>
                </View>

                <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
                    <Text style={styles.label}>Tỉ lệ thành công (%):</Text>
                    <Text style={[styles.value, { color: getRateColor(rateNum) }]}>{item?.successRate}%</Text>
                </View>
            </View>

            <View style={styles.cardSection}>
                <View style={styles.sectionHeader}>
                    <IcInfo width={18} height={18} color="#185FA5" />
                    <Text style={styles.sectionTitle}>Ghi chú</Text>
                </View>

                <Text
                    style={styles.descriptionText}
                    numberOfLines={isExpanded ? undefined : 11}
                >
                    {optDescription || 'Không có nội dung'}
                </Text>

                <TouchableOpacity
                    style={styles.toggleMoreBtn}
                    onPress={() => setIsExpanded(!isExpanded)}
                    activeOpacity={0.7}
                >
                    {isExpanded ? (
                        <IcArrowD width={10} height={10} color='#1A7FC1' />
                    ): (
                        <IcArrowR width={10} height={10} color='#1A7FC1' />
                    )}                    
                    <Text style={styles.toggleMoreText}>
                        {isExpanded ? 'Thu gọn nội dung' : 'Xem đầy đủ nội dung'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default React.memo(ProjectTab);