import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

import IcBuilding from '../../assets/icons/building.svg';
import IcLocation from '../../assets/icons/location.svg';
import IcClock from '../../assets/icons/clock.svg';

const PlanCard = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const fullDescription = item.description && item.description.trim() !== ""
        ? item.description
        : "Không có ghi chú thêm cho kế hoạch này.";

    return (
        <View style={styles.cardWrapper}>
            {/* Timeline Left Column */}
            <View style={styles.timeColumn}>
                <View style={styles.timeBadge}>
                    <IcClock width={12} height={12} color={colors.primary} />
                    <Text style={styles.timeText}>{item.time || '08:00'}</Text>
                </View>
                <View style={styles.timelineLine} />
            </View>

            {/* Right Card Content */}
            <View style={styles.contentCard}>
                {/* Director / Staff Badge */}
                <View style={styles.directorBadge}>
                    <Text style={styles.directText} numberOfLines={1}>
                        {item.name || 'Cán bộ phụ trách'}
                    </Text>
                </View>

                {/* Plan Title / Stage */}
                <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                </Text>

                {/* Project Name */}
                {item.project && (
                    <Text style={styles.project} numberOfLines={1}>
                        {item.project}
                    </Text>
                )}

                {/* Department / Company */}
                {item.company && (
                    <View style={styles.infoRow}>
                        <IcBuilding width={14} height={14} color={colors.danger} />
                        <Text style={styles.compText} numberOfLines={1}>{item.company}</Text>
                    </View>
                )}

                {/* Location / Address */}
                {item.address && (
                    <View style={styles.infoRow}>
                        <IcLocation width={14} height={14} color={colors.gray500} />
                        <Text style={styles.locateText} numberOfLines={1}>{item.address}</Text>
                    </View>
                )}

                {/* Description */}
                <Text
                    style={styles.description}
                    numberOfLines={isExpanded ? undefined : 2}
                >
                    <Text style={styles.descLabel}>Nội dung: </Text>
                    {fullDescription}
                </Text>

                {/* Toggle Button */}
                {item.description && item.description.length > 60 && (
                    <TouchableOpacity
                        onPress={() => setIsExpanded(!isExpanded)}
                        activeOpacity={0.7}
                        style={styles.toggleBtn}
                    >
                        <Text style={styles.toggleText}>
                            {isExpanded ? "Thu gọn ▲" : "Xem thêm ▼"}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginBottom: 10,
    },

    timeColumn: {
        alignItems: 'center',
        marginRight: 10,
        width: 60,
    },

    timeBadge: {
        backgroundColor: colors.primarySubtle,
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: theme.radius.xs,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        borderWidth: 1,
        borderColor: colors.primaryBorder,
    },

    timeText: {
        fontSize: 11,
        fontWeight: '700',
        color: colors.primary,
    },

    timelineLine: {
        width: 1.5,
        flex: 1,
        backgroundColor: colors.gray200,
        marginVertical: 4,
    },

    contentCard: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: theme.radius.md,
        padding: 12,
        borderWidth: 1,
        borderColor: colors.gray200,
        ...theme.shadows.xs,
    },

    directorBadge: {
        alignSelf: 'flex-start',
        backgroundColor: colors.primarySubtle,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: theme.radius.xs,
        marginBottom: 6,
    },

    directText: {
        fontSize: 11,
        fontWeight: '700',
        color: colors.primary,
    },

    title: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.gray900,
        marginBottom: 4,
    },

    project: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.primaryDark,
        marginBottom: 6,
    },

    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 4,
    },

    compText: {
        fontSize: 12,
        color: colors.gray700,
        fontWeight: '500',
        flex: 1,
    },

    locateText: {
        fontSize: 11,
        color: colors.gray500,
        flex: 1,
    },

    description: {
        fontSize: 12,
        color: colors.gray600,
        lineHeight: 17,
        marginTop: 4,
        backgroundColor: colors.gray50,
        padding: 8,
        borderRadius: theme.radius.xs,
    },

    descLabel: {
        fontWeight: '700',
        color: colors.gray700,
    },

    toggleBtn: {
        alignSelf: 'flex-end',
        paddingTop: 4,
    },

    toggleText: {
        fontSize: 11,
        fontWeight: '600',
        color: colors.primary,
    },
});

export default PlanCard;