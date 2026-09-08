import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
    StatusBar,
} from 'react-native';
import colors from "../../constants/colors";
import theme from "../../constants/theme";

import IcMenu from "../../assets/icons/menu.svg";
import IcNotification from "../../assets/icons/notification.svg";
import IcReload from "../../assets/icons/reload.svg";
import IcBack from "../../assets/icons/back.svg";
import IcDotMenu from "../../assets/icons/ellipsis-vertical.svg";
import IcEdit from "../../assets/icons/save_edit.svg";
import IcEditState from '../../assets/icons/clipboard.svg';
import IcCalendar from '../../assets/icons/calendar_blank.svg';
import IcLink from '../../assets/icons/link.svg';
import IcDelete from '../../assets/icons/delete.svg';

const DefaultHeader = ({ navigation, options = {}, route = {} }) => {
    const [isOptionMenuOpen, setIsOptionMenuOpen] = useState(false);

    const title = options.headerTitle !== undefined ? options.headerTitle : (route.name || '');

    const MAIN_SCREENS = ['Home', 'Customer', 'Opportunity', 'Project'];
    const isChildScreen = !MAIN_SCREENS.includes(route.name);

    const isDetailOpportunity = route.name === 'DetailOpportunityScreen' || route.name === 'DetailOpportunity';
    const isDetailProject = route.name === 'DetailProjectScreen' || route.name === 'DetailProject';
    const hasOptionMenu = isDetailOpportunity || isDetailProject;

    const handleGoBack = () => {
        if (navigation && navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    const handleOpenDrawer = () => {
        if (navigation.openDrawer) {
            navigation.openDrawer();
        } else {
            const parent = navigation.getParent();
            if (parent && parent.openDrawer) {
                parent.openDrawer();
            }
        }
    };

    const handleOptionSelect = (actionType) => {
        setIsOptionMenuOpen(false);
        if (options.onOptionPress) {
            options.onOptionPress(actionType);
        } else {
            console.log('Action selected:', actionType);
        }
    };

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.primaryDark}
                translucent={false}
            />
            <View style={styles.headerContainer}>
                {/* Left group: Back button / Menu + Title */}
                <View style={styles.leftGroup}>
                    {isChildScreen ? (
                        <TouchableOpacity
                            onPress={handleGoBack}
                            style={styles.iconButton}
                            activeOpacity={0.7}
                            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                        >
                            <IcBack width={18} height={18} color={colors.white} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={handleOpenDrawer}
                            style={styles.iconButton}
                            activeOpacity={0.7}
                            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                        >
                            <IcMenu width={22} height={22} color={colors.white} />
                        </TouchableOpacity>
                    )}

                    <Text
                        style={[
                            styles.titleText,
                            isChildScreen && styles.titleTextDetail
                        ]}
                        numberOfLines={1}
                    >
                        {title}
                    </Text>
                </View>

                {/* Right group: Notification, Reload, Options */}
                <View style={styles.rightContainer}>
                    {isChildScreen ? (
                        hasOptionMenu ? (
                            <TouchableOpacity
                                style={styles.iconButton}
                                onPress={() => setIsOptionMenuOpen(true)}
                                activeOpacity={0.7}
                            >
                                <IcDotMenu width={20} height={20} color={colors.white} />
                            </TouchableOpacity>
                        ) : (
                            <View style={styles.rightContainerEmpty} />
                        )
                    ) : (
                        <View style={styles.actionRow}>
                            <TouchableOpacity
                                style={styles.iconButton}
                                onPress={() => console.log('Open Notification')}
                                activeOpacity={0.7}
                            >
                                <IcNotification width={22} height={22} color={colors.white} />
                                {options.unreadNotification > 0 && (
                                    <View style={styles.badge}>
                                        <Text style={styles.badgeText}>
                                            {options.unreadNotification > 99 ? '99+' : options.unreadNotification}
                                        </Text>
                                    </View>
                                )}
                            </TouchableOpacity>

                            {options.handleReload && (
                                <TouchableOpacity
                                    style={[styles.iconButton, { marginLeft: 8 }]}
                                    onPress={options.handleReload}
                                    activeOpacity={0.7}
                                >
                                    <IcReload width={22} height={22} color={colors.white} />
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                </View>
            </View>

            {/* Dropdown Action Menu Modal */}
            <Modal
                visible={isOptionMenuOpen}
                transparent
                animationType="fade"
                onRequestClose={() => setIsOptionMenuOpen(false)}
            >
                <TouchableWithoutFeedback onPress={() => setIsOptionMenuOpen(false)}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.dropdownCard}>
                                {/* Detail Opportunity Actions */}
                                {isDetailOpportunity && (
                                    <>
                                        <TouchableOpacity
                                            style={styles.optionItem}
                                            onPress={() => handleOptionSelect('UPDATE')}
                                            activeOpacity={0.7}
                                        >
                                            <View style={[styles.optionIconBox, { backgroundColor: colors.infoLight }]}>
                                                <IcEdit width={18} height={18} color={colors.primary} />
                                            </View>
                                            <Text style={styles.optionText}>Cập nhật</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.optionItem}
                                            onPress={() => handleOptionSelect('UPDATE_STATUS')}
                                            activeOpacity={0.7}
                                        >
                                            <View style={[styles.optionIconBox, { backgroundColor: colors.warningLight }]}>
                                                <IcEditState width={18} height={18} color={colors.warning} />
                                            </View>
                                            <Text style={styles.optionText}>Cập nhật trạng thái</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.optionItem}
                                            onPress={() => handleOptionSelect('REGISTER_PLAN')}
                                            activeOpacity={0.7}
                                        >
                                            <View style={[styles.optionIconBox, { backgroundColor: colors.successLight }]}>
                                                <IcCalendar width={18} height={18} color={colors.success} />
                                            </View>
                                            <Text style={styles.optionText}>Đăng ký kế hoạch</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={[styles.optionItem, { borderBottomWidth: 0 }]}
                                            onPress={() => handleOptionSelect('CONVERT_PROJECT')}
                                            activeOpacity={0.7}
                                        >
                                            <View style={[styles.optionIconBox, { backgroundColor: '#EDE9FE' }]}>
                                                <IcLink width={18} height={18} color="#8B5CF6" />
                                            </View>
                                            <Text style={styles.optionText}>Chuyển thành dự án</Text>
                                        </TouchableOpacity>
                                    </>
                                )}

                                {/* Detail Project Actions */}
                                {isDetailProject && (
                                    <>
                                        <TouchableOpacity
                                            style={styles.optionItem}
                                            onPress={() => handleOptionSelect('EDIT_PROJECT')}
                                            activeOpacity={0.7}
                                        >
                                            <View style={[styles.optionIconBox, { backgroundColor: colors.infoLight }]}>
                                                <IcEdit width={18} height={18} color={colors.primary} />
                                            </View>
                                            <Text style={styles.optionText}>Chỉnh sửa</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={[styles.optionItem, { borderBottomWidth: 0 }]}
                                            onPress={() => handleOptionSelect('DELETE_PROJECT')}
                                            activeOpacity={0.7}
                                        >
                                            <View style={[styles.optionIconBox, { backgroundColor: colors.dangerLight }]}>
                                                <IcDelete width={18} height={18} color={colors.danger} />
                                            </View>
                                            <Text style={[styles.optionText, { color: colors.danger }]}>Xoá dự án</Text>
                                        </TouchableOpacity>
                                    </>
                                )}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 56 : 58,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
        ...theme.shadows.sm,
    },

    leftGroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginRight: 8,
    },

    iconButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleText: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.white,
        letterSpacing: 0.3,
        flex: 1,
    },

    titleTextDetail: {
        fontSize: 17,
        fontWeight: '700',
    },

    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rightContainerEmpty: {
        width: 36,
    },

    badge: {
        position: 'absolute',
        top: -3,
        right: -3,
        backgroundColor: colors.danger,
        borderRadius: 10,
        minWidth: 18,
        height: 18,
        paddingHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: colors.white,
        ...theme.shadows.xs,
    },

    badgeText: {
        color: colors.white,
        fontSize: 10,
        fontWeight: '700',
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: colors.backdrop,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },

    dropdownCard: {
        marginTop: Platform.OS === 'ios' ? 64 : 58,
        marginRight: 16,
        backgroundColor: colors.surface,
        borderRadius: theme.radius.lg,
        borderWidth: 1,
        borderColor: colors.border,
        minWidth: 200,
        paddingVertical: 6,
        ...theme.shadows.lg,
    },

    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 11,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray100,
        gap: 12,
    },

    optionIconBox: {
        width: 30,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    optionText: {
        fontSize: 14,
        color: colors.gray800,
        fontWeight: '600',
        flex: 1,
    },
});

export default DefaultHeader;