import { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

import IcCelebrate from "../../assets/icons/celebrate.svg";
import IcOpportunity from "../../assets/icons/opportunity.svg";
import IcEdit from "../../assets/icons/edit.svg";
import IcDelete from "../../assets/icons/delete.svg";
import IcPhone from "../../assets/icons/phone.svg";
import IcMail from "../../assets/icons/mail.svg";

const CustomerCard = ({ item, onEdit, onDelete, onOpenOpportunity, onOpenAnniversary }) => {
    const swipeableRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const getStateStyle = (state) => {
        if (!state) return { bg: colors.primarySubtle, text: colors.primary };
        const lower = state.toLowerCase();
        if (lower.includes('tiềm năng')) {
            return { bg: '#EFF6FF', text: '#2563EB' };
        }
        if (lower.includes('hợp tác') || lower.includes('thành công') || lower.includes('ký')) {
            return { bg: '#ECFDF5', text: '#059669' };
        }
        if (lower.includes('tạm ngưng') || lower.includes('hủy')) {
            return { bg: '#FEF2F2', text: '#DC2626' };
        }
        return { bg: colors.gray100, text: colors.gray700 };
    };

    const stateStyle = getStateStyle(item?.state);

    const renderRightActions = () => {
        return (
            <View style={styles.swipeActionContainer}>
                {/* 1. Kỷ niệm */}
                <TouchableOpacity
                    style={[styles.actionBtn, { backgroundColor: colors.warning }]}
                    onPress={onOpenAnniversary}
                    activeOpacity={0.8}
                >
                    <IcCelebrate width={18} height={18} color={colors.white} />
                    <Text style={styles.actionText}>Kỷ niệm</Text>
                </TouchableOpacity>

                {/* 2. Cơ hội */}
                <TouchableOpacity
                    style={[styles.actionBtn, { backgroundColor: colors.success }]}
                    onPress={onOpenOpportunity}
                    activeOpacity={0.8}
                >
                    <IcOpportunity width={18} height={18} color={colors.white} />
                    <Text style={styles.actionText}>Cơ hội</Text>
                </TouchableOpacity>

                {/* 3. Sửa */}
                <TouchableOpacity
                    style={[styles.actionBtn, { backgroundColor: colors.primary }]}
                    onPress={onEdit}
                    activeOpacity={0.8}
                >
                    <IcEdit width={18} height={18} color={colors.white} />
                    <Text style={styles.actionText}>Sửa</Text>
                </TouchableOpacity>

                {/* 4. Xóa */}
                <TouchableOpacity
                    style={[styles.actionBtn, styles.lastActionBtn, { backgroundColor: colors.danger }]}
                    onPress={onDelete}
                    activeOpacity={0.8}
                >
                    <IcDelete width={18} height={18} color={colors.white} />
                    <Text style={styles.actionText}>Xóa</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.swipeWrapper}>
            <Swipeable
                ref={swipeableRef}
                renderRightActions={renderRightActions}
                overshootRight={false}
                containerStyle={styles.swipeableContainer}
                onSwipeableWillOpen={() => setIsOpen(true)}
                onSwipeableOpen={() => setIsOpen(true)}
                onSwipeableWillClose={() => setIsOpen(false)}
                onSwipeableClose={() => setIsOpen(false)}
            >
                <View style={[
                    styles.cardContainer,
                    isOpen && styles.cardOpen
                ]}>
                    {/* Header: Code & State Tag */}
                    <View style={styles.topRow}>
                        <View style={styles.codeBadge}>
                            <Text style={styles.codeText}>{item?.code || 'KH'}</Text>
                        </View>
                        <View style={styles.tagGroup}>
                            <View style={[styles.stateTag, { backgroundColor: stateStyle.bg }]}>
                                <Text style={[styles.stateText, { color: stateStyle.text }]}>
                                    {item?.state || 'Tiềm năng'}
                                </Text>
                            </View>
                            {item?.toc && (
                                <View style={styles.tocBadge}>
                                    <Text style={styles.tocText}>{item.toc}</Text>
                                </View>
                            )}
                        </View>
                    </View>

                    {/* Customer Name */}
                    <Text style={styles.titleText} numberOfLines={2}>
                        {item?.name}
                    </Text>

                    {/* Contact Row */}
                    {(item?.contact || item?.mail) && (
                        <View style={styles.contactRow}>
                            {/* Phone */}
                            {item?.contact && (
                                <TouchableOpacity
                                    style={styles.contactButton}
                                    onPress={() => Linking.openURL(`tel:${item.contact}`)}
                                    activeOpacity={0.7}
                                >
                                    <IcPhone width={12} height={12} color={colors.primary} />
                                    <Text style={styles.contactText}>{item.contact}</Text>
                                </TouchableOpacity>
                            )}

                            {/* Mail */}
                            {item?.mail && (
                                <TouchableOpacity
                                    style={styles.mailButton}
                                    onPress={() => Linking.openURL(`mailto:${item.mail}`)}
                                    activeOpacity={0.7}
                                >
                                    <IcMail width={12} height={12} color={colors.gray600} />
                                    <Text style={styles.mailText} numberOfLines={1}>{item.mail}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                </View>
            </Swipeable>
        </View>
    );
};

const styles = StyleSheet.create({
    swipeWrapper: {
        marginHorizontal: 16,
        marginBottom: 10,
    },

    swipeableContainer: {
        borderRadius: theme.radius.md,
        overflow: 'hidden',
    },

    cardContainer: {
        backgroundColor: colors.white,
        borderRadius: theme.radius.md,
        padding: 14,
        borderWidth: 1,
        borderColor: colors.gray200,
        ...theme.shadows.xs,
    },

    cardOpen: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRightWidth: 0,
    },

    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    codeBadge: {
        backgroundColor: colors.primarySubtle,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: theme.radius.xs,
    },

    codeText: {
        fontSize: 11,
        fontWeight: '700',
        color: colors.primary,
    },

    tagGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },

    stateTag: {
        paddingHorizontal: 8,
        paddingVertical: 2.5,
        borderRadius: theme.radius.full,
    },

    stateText: {
        fontSize: 11,
        fontWeight: '700',
    },

    tocBadge: {
        backgroundColor: colors.gray100,
        paddingHorizontal: 8,
        paddingVertical: 2.5,
        borderRadius: theme.radius.full,
    },

    tocText: {
        fontSize: 11,
        color: colors.gray600,
        fontWeight: '500',
    },

    titleText: {
        fontSize: 15,
        fontWeight: '700',
        color: colors.gray900,
        lineHeight: 20,
        marginBottom: 10,
    },

    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap',
    },

    contactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primarySubtle,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: theme.radius.sm,
        gap: 5,
        borderWidth: 1,
        borderColor: colors.primaryBorder,
    },

    contactText: {
        color: colors.primary,
        fontSize: 12,
        fontWeight: '600',
    },

    mailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.gray100,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: theme.radius.sm,
        gap: 5,
        maxWidth: 180,
    },

    mailText: {
        color: colors.gray700,
        fontSize: 12,
        fontWeight: '500',
    },

    /* Action Container */
    swipeActionContainer: {
        flexDirection: 'row',
        height: '100%',
    },

    actionBtn: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: 4,
    },

    actionText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '600',
    },

    lastActionBtn: {
        borderTopRightRadius: theme.radius.md,
        borderBottomRightRadius: theme.radius.md,
    },
});

export default CustomerCard;