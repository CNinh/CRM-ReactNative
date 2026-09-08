import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AvatarGroup from "../avatars/AvatarGroup";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

import IcBuilding from '../../assets/icons/building.svg';
import IcHistory from '../../assets/icons/history.svg';
import IcClock from '../../assets/icons/clock.svg';
import IcPlus from '../../assets/icons/plus.svg';
import IcBox from '../../assets/icons/box.svg';
import IcAdd from '../../assets/icons/add.svg';

const OpportunityCard = ({ item, type = 'opportunity', onButtonPress }) => {
    const navigation = useNavigation();
    const service = item?.services || [];
    const displayServices = service.slice(0, 2);
    const otherServices = service.length - 2;

    const getStageColor = (stageName) => {
        if (!stageName) return { bg: colors.primarySubtle, text: colors.primary, border: colors.primary };
        const lower = stageName.toLowerCase();
        if (lower.includes('tìm hiểu') || lower.includes('tiềm năng')) {
            return { bg: '#EFF6FF', text: '#2563EB', border: '#3B82F6' };
        }
        if (lower.includes('đánh giá') || lower.includes('khảo sát')) {
            return { bg: '#ECFEFF', text: '#0891B2', border: '#06B6D4' };
        }
        if (lower.includes('báo giá') || lower.includes('đề xuất')) {
            return { bg: '#FFFBEB', text: '#D97706', border: '#F59E0B' };
        }
        if (lower.includes('đàm phán')) {
            return { bg: '#F5F3FF', text: '#7C3AED', border: '#8B5CF6' };
        }
        if (lower.includes('thành công') || lower.includes('chốt') || lower.includes('ký')) {
            return { bg: '#ECFDF5', text: '#059669', border: '#10B981' };
        }
        if (lower.includes('thất bại') || lower.includes('hủy')) {
            return { bg: '#FEF2F2', text: '#DC2626', border: '#EF4444' };
        }
        return { bg: colors.primarySubtle, text: colors.primary, border: colors.primary };
    };

    const stageStyle = getStageColor(item?.stage);

    const formatCurrency = (value) => {
        if (!value) return "0 đ";
        if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)} tỷ`;
        if (value >= 1000000) return `${(value / 1000000).toFixed(0)} triệu`;
        return `${value.toLocaleString('vi-VN')} đ`;
    };

    const handlePressCard = () => {
        navigation.navigate('DetailOpportunityScreen', { item });
    };

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={handlePressCard}
            style={styles.touchable}
        >
            <View style={[styles.cardContainer, { borderLeftColor: stageStyle.border }]}>
                {/* Header: Stage Badge + Date/Time */}
                <View style={styles.cardHeader}>
                    <View style={[styles.statusTag, { backgroundColor: stageStyle.bg }]}>
                        <Text style={[styles.statusText, { color: stageStyle.text }]}>
                            {item?.stage || 'Cơ hội mới'}
                        </Text>
                    </View>
                    <View style={styles.cardTime}>
                        <IcClock width={13} height={13} color={colors.gray400} />
                        <Text style={styles.timeText}>{item?.date} · {item?.time}</Text>
                    </View>
                </View>

                {/* Title */}
                <Text style={styles.titleText} numberOfLines={2}>
                    <Text style={styles.codeText}>{item?.code ? `${item.code} - ` : ''}</Text>
                    {item?.name}
                </Text>

                {/* Department */}
                {item?.dept && (
                    <View style={styles.infoRow}>
                        <IcBuilding width={16} height={16} color={colors.danger} />
                        <Text style={styles.deptText} numberOfLines={1}>{item.dept}</Text>
                    </View>
                )}

                {/* Service Tags */}
                {service.length > 0 && (
                    <View style={styles.tagGroup}>
                        {displayServices.map((srv, idx) => (
                            <View key={idx} style={styles.serviceTag}>
                                <IcBox width={12} height={12} color={colors.gray500} />
                                <Text style={styles.serviceText} numberOfLines={1}>{srv}</Text>
                            </View>
                        ))}
                        {otherServices > 0 && (
                            <View style={[styles.serviceTag, styles.moreServiceTag]}>
                                <IcPlus width={12} height={12} color={colors.primary} style={{ translate: 1.2 }} />
                                <Text style={styles.moreServiceText}>
                                    {otherServices} dịch vụ
                                </Text>
                            </View>
                        )}
                    </View>
                )}

                {/* Value & Probability Row */}
                <View style={styles.metricsBox}>
                    <View style={styles.metricItem}>
                        <Text style={styles.metricLabel}>Giá trị dự kiến</Text>
                        <Text style={styles.boldGreen}>{formatCurrency(item?.expectedValue)}</Text>
                    </View>
                    <View style={styles.metricDivider} />
                    <View style={styles.metricItem}>
                        <Text style={styles.metricLabel}>Xác suất chốt</Text>
                        <Text style={styles.boldOrange}>{item?.probability ?? 0}%</Text>
                    </View>
                </View>

                {/* Footer: Staff Avatars + Action Button */}
                <View style={styles.cardFooter}>
                    <AvatarGroup members={item?.staff || []} maxDisplay={3} />

                    <TouchableOpacity
                        style={[
                            styles.btnAction,
                            type === 'home' ? styles.btnActionHome : styles.btnActionOpportunity
                        ]}
                        onPress={onButtonPress}
                        activeOpacity={0.7}
                    >
                        {type === 'home' ? (
                            <>
                                <IcHistory width={14} height={14} color={colors.primary} />
                                <Text style={styles.btnTextHome}>Nhật ký</Text>
                            </>
                        ) : (
                            <>
                                <IcAdd width={16} height={16} color={colors.white} />
                                <Text style={styles.btnText}>Thêm thành viên</Text>
                            </>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        marginHorizontal: 16,
        marginBottom: 12,
    },

    cardContainer: {
        backgroundColor: '#f5f7fa',
        borderRadius: theme.radius.md,
        padding: 14,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderLeftWidth: 4,
        ...theme.shadows.xs,
    },

    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    statusTag: {
        paddingHorizontal: 10,
        paddingVertical: 3.5,
        borderRadius: theme.radius.full,
    },

    statusText: {
        fontSize: 11,
        fontWeight: '700',
    },

    cardTime: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },

    timeText: {
        fontSize: 11,
        color: colors.gray500,
        fontWeight: '500',
    },

    titleText: {
        fontSize: 15,
        fontWeight: '700',
        color: colors.gray900,
        lineHeight: 21,
        marginBottom: 6,
    },

    codeText: {
        color: colors.primary,
        fontWeight: '700',
    },

    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 8,
    },

    deptText: {
        fontSize: 12,
        color: colors.gray600,
        fontWeight: '500',
        flex: 1,
    },

    tagGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 10,
    },

    serviceTag: {
        backgroundColor: colors.gray100,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: theme.radius.full,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    serviceText: {
        fontSize: 11,
        color: colors.gray700,
        fontWeight: '500',
    },

    moreServiceTag: {
        backgroundColor: colors.primarySubtle,
    },

    moreServiceText: {
        fontSize: 11,
        color: colors.primary,
        fontWeight: '600',
    },

    metricsBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.gray50,
        borderRadius: theme.radius.sm,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: colors.gray100,
    },

    metricItem: {
        flex: 1,
    },

    metricDivider: {
        width: 1,
        height: 24,
        backgroundColor: colors.gray200,
        marginHorizontal: 10,
    },

    metricLabel: {
        fontSize: 10,
        color: colors.gray500,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 0.3,
        marginBottom: 2,
    },

    boldGreen: {
        fontSize: 13,
        fontWeight: '700',
        color: colors.success,
    },

    boldOrange: {
        fontSize: 13,
        fontWeight: '700',
        color: colors.warning,
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.gray100,
        paddingTop: 10,
    },

    btnAction: {
        borderRadius: theme.radius.sm,
        flexDirection: 'row',
        alignItems: 'center',
    },

    btnActionHome: {
        backgroundColor: colors.primarySubtle,
        paddingVertical: 5,
        paddingHorizontal: 10,
        gap: 4,
    },

    btnActionOpportunity: {
        backgroundColor: colors.primary,
        paddingVertical: 6,
        paddingHorizontal: 12,
        gap: 6,
        ...theme.shadows.xs,
    },

    btnText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '600',
    },

    btnTextHome: {
        color: colors.primary,
        fontSize: 12,
        fontWeight: '600',
    },
});

export default OpportunityCard;