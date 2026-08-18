import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './ServiceTab.style';

import IcBox from '../../../assets/icons/box.svg';
import IcEye from '../../../assets/icons/eye.svg';
import IcEdit from '../../../assets/icons/edit.svg';
import IcDelete from '../../../assets/icons/delete.svg';
import IcShare from '../../../assets/icons/share.svg';

import { prjServices } from '../../../data/mockData';

const ServiceTab = ({
    projectId,
    services = prjServices,
    onDetail,
    onEdit,
    onDelete,
    onAllocate
}) => {

    const filteredServices = projectId
        ? services.filter(item => item.projectId === projectId)
        : services;

    const formatCurrency = (amount) => {
        if (!amount) return '0 triệu VNĐ';
        return `${amount / 1000000} triệu VNĐ`;
    };

    return (
        <View style={styles.container}>
            {filteredServices.map((item) => {
                const expectedRevenue = formatCurrency(item.expectedValue);
                const actualRevenue = formatCurrency(item.earned);
                const totalCost = formatCurrency(item.cost);
                const memberCount = item.members?.length || 0;

                return (
                    <View key={item.id} style={styles.card}>
                        <View style={styles.cardHeader}>
                            <IcBox width={24} height={24} color="#1A7FC1" />
                            <Text style={styles.serviceName}>{item.name}</Text>
                        </View>

                        <View style={styles.cardBody}>
                            <View style={styles.infoRow}>
                                <Text style={styles.label}>Thời gian:</Text>
                                <Text style={styles.value}>
                                    {item.startDate} <Text style={[styles.value, styles.bold]}>–</Text> {item.endDate}
                                </Text>
                            </View>

                            <View style={styles.infoRow}>
                                <Text style={styles.label}>Doanh thu dự kiến:</Text>
                                <Text style={[styles.value, styles.blueText]}>{expectedRevenue}</Text>
                            </View>

                            <View style={styles.infoRow}>
                                <Text style={styles.label}>Doanh thu đã nhận:</Text>
                                <Text style={[styles.value, styles.greenText]}>{actualRevenue}</Text>
                            </View>

                            <View style={styles.infoRow}>
                                <Text style={styles.label}>Tổng chi phí:</Text>
                                <Text style={[styles.value, styles.redText]}>{totalCost}</Text>
                            </View>

                            <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
                                <Text style={styles.label}>Thành viên:</Text>
                                <Text style={styles.value}>
                                    <Text style={[styles.value, styles.bold]}>{memberCount}</Text> người
                                </Text>
                            </View>
                        </View>

                        <View style={styles.cardFooter}>
                            <TouchableOpacity
                                style={[styles.btnAction, styles.btnDetail]}
                                activeOpacity={0.8}
                                onPress={() => onDetail && onDetail(item)}
                            >
                                <IcEye width={16} height={16} color="#FFFFFF" />
                                <Text style={styles.btnText}>Chi tiết</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.btnAction, styles.btnEdit]}
                                activeOpacity={0.8}
                                onPress={() => onEdit && onEdit(item)}
                            >
                                <IcEdit width={14} height={14} color="#FFFFFF" />
                                <Text style={styles.btnText}>Sửa</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.btnAction, styles.btnDelete]}
                                activeOpacity={0.8}
                                onPress={() => onDelete && onDelete(item)}
                            >
                                <IcDelete width={14} height={14} color="#FFFFFF" />
                                <Text style={styles.btnText}>Xóa</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.btnAction, styles.btnAllocate]}
                                activeOpacity={0.8}
                                onPress={() => onAllocate && onAllocate(item)}
                            >
                                <IcShare width={16} height={16} color="#FFFFFF" />
                                <Text style={styles.btnText}>Phân bổ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

export default ServiceTab;