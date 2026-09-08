import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AvatarGroup from "../avatars/AvatarGroup";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

import IcCalendar from "../../assets/icons/calendar_blank.svg";
import IcBuilding from "../../assets/icons/building.svg";
import IcHistory from "../../assets/icons/history.svg";

const ProjectCard = ({ item, type = 'project', onButtonPress }) => {
    const navigation = useNavigation();

    const getRateColor = (rateValue) => {
        if (rateValue >= 70) return colors.success;
        if (rateValue < 50) return colors.danger;
        return colors.warning;
    };

    const rateNum = item?.successRate ?? 100;

    const formatRate = (val) => {
        if (val === undefined || val === null || val === '') return '0,00';
        const num = Number(val);
        if (isNaN(num)) return '0,00';
        return num.toFixed(2).replace('.', ',');
    };

    const formatCurrency = (value) => {
        if (!value) return "0 triệu";
        if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)} tỷ`;
        if (value >= 1000000) return `${(value / 1000000).toFixed(0)} triệu`;
        return `${value} đ`;
    };

    const handlePressCard = () => {
        navigation.navigate('DetailProjectScreen', { item });
    };

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={handlePressCard}
            style={styles.touchable}
        >
            <View style={styles.cardContainer}>
                {/* Header: Stage Badge + Date */}
                <View style={styles.cardHeader}>
                    <View style={styles.statusTag}>
                        <Text style={styles.statusText}>
                            {item?.stage || "Đang thực hiện"}
                        </Text>
                    </View>

                    {type === 'project' && item?.date && (
                        <View style={styles.headerDate}>
                            <IcCalendar width={13} height={13} color={colors.gray400} />
                            <Text style={styles.dateText}>{item.date}</Text>
                        </View>
                    )}
                </View>

                {/* Title */}
                <Text style={styles.titleText} numberOfLines={2}>
                    {item?.name}
                </Text>

                {/* Department & Location */}
                {(item?.dept || item?.location) && (
                    <View style={styles.infoRow}>
                        <IcBuilding width={16} height={16} color={colors.danger} />
                        <Text style={styles.deptText} numberOfLines={1}>
                            {item?.dept} {item?.location ? `· ${item.location}` : ''}
                        </Text>
                    </View>
                )}

                {/* Finance Metrics or Success Rate */}
                {type === 'home' ? (
                    <View style={styles.metricsBox}>
                        <View style={styles.metricItem}>
                            <Text style={styles.metricLabel}>Chi phí</Text>
                            <Text style={styles.costValue}>{formatCurrency(item?.cost)}</Text>
                        </View>
                        <View style={styles.metricDivider} />
                        <View style={styles.metricItem}>
                            <Text style={styles.metricLabel}>Doanh thu</Text>
                            <Text style={styles.revenueValue}>{formatCurrency(item?.revenue)}</Text>
                        </View>
                    </View>
                ) : (
                    <View style={styles.rateBox}>
                        <View style={styles.rateHeader}>
                            <Text style={styles.rateLabel}>Tỉ lệ thành công</Text>
                            <Text style={[styles.rateValue, { color: getRateColor(rateNum) }]}>
                                {formatRate(rateNum)} %
                            </Text>
                        </View>
                        {/* Mini progress bar */}
                        <View style={styles.progressBarBg}>
                            <View
                                style={[
                                    styles.progressBarFill,
                                    {
                                        width: `${Math.min(Math.max(rateNum, 0), 100)}%`,
                                        backgroundColor: getRateColor(rateNum)
                                    }
                                ]}
                            />
                        </View>
                    </View>
                )}

                {/* Footer: Staff Avatars + Action Button */}
                {type === 'home' && (
                    <View style={styles.cardFooter}>
                        <AvatarGroup members={item?.staff || []} maxDisplay={3} />

                        <TouchableOpacity
                            style={styles.btnHistory}
                            onPress={onButtonPress}
                            activeOpacity={0.7}
                        >
                            <IcHistory width={14} height={14} color={colors.primary} />
                            <Text style={styles.btnText}>Nhật ký</Text>
                        </TouchableOpacity>
                    </View>
                )}
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
        backgroundColor: colors.white,
        borderRadius: theme.radius.md,
        padding: 14,
        borderWidth: 1,
        borderColor: colors.gray200,
        borderLeftWidth: 4,
        borderLeftColor: colors.primary,
        ...theme.shadows.xs,
    },

    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    statusTag: {
        backgroundColor: colors.warningLight,
        paddingHorizontal: 10,
        paddingVertical: 3.5,
        borderRadius: theme.radius.full,
    },

    statusText: {
        fontSize: 11,
        fontWeight: '700',
        color: colors.warningDark,
    },

    headerDate: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },

    dateText: {
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

    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 10,
    },

    deptText: {
        fontSize: 12,
        color: colors.gray600,
        fontWeight: '500',
        flex: 1,
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

    costValue: {
        fontSize: 13,
        fontWeight: '700',
        color: colors.gray800,
    },

    revenueValue: {
        fontSize: 13,
        fontWeight: '700',
        color: colors.success,
    },

    rateBox: {
        backgroundColor: colors.gray50,
        borderRadius: theme.radius.sm,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: colors.gray100,
    },

    rateHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },

    rateLabel: {
        fontSize: 11,
        color: colors.gray600,
        fontWeight: '500',
    },

    rateValue: {
        fontSize: 12,
        fontWeight: '700',
    },

    progressBarBg: {
        height: 6,
        backgroundColor: colors.gray200,
        borderRadius: 3,
        overflow: 'hidden',
    },

    progressBarFill: {
        height: '100%',
        borderRadius: 3,
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.gray100,
        paddingTop: 10,
    },

    btnHistory: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primarySubtle,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: theme.radius.sm,
        gap: 4,
    },

    btnText: {
        color: colors.primary,
        fontSize: 12,
        fontWeight: '600',
    },
});

export default ProjectCard;