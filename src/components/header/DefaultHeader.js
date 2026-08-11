import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import DefaultButton from "../buttons/DefaultButton";
import ImageButton from "../buttons/ImageButton";
import colors from "../../constants/colors";
import SideMenu from "../../navigation/SideMenu";
import { useNavigation } from "@react-navigation/native";

import IcMenu from "../../assets/icons/menu.svg";
import IcNotification from "../../assets/icons/notification.svg";
import IcReload from "../../assets/icons/reload.svg";
import IcBack from "../../assets/icons/back.svg";
import IcDotMenu from "../../assets/icons/ellipsis-vertical.svg";
import IcEdit from "../../assets/icons/save_edit.svg";
import IcEditState from '../../assets/icons/clipboard.svg';
import IcCalendar from '../../assets/icons/calendar_blank.svg';
import IcLink from '../../assets/icons/link.svg';

const DefaultHeader = ({ navigation, options, route }) => {
    const [isOptionMenuOpen, setIsOptionMenuOpen] = useState(false);

    const title = options.headerTitle !== undefined ? options.headerTitle : route.name;

    const MAIN_SCREENS = ['Home', 'Customer', 'Opportunity', 'Project'];

    const isChildScreen = !MAIN_SCREENS.includes(route.name);

    const isDetailOpportunity = route.name === 'DetailOpportunityScreen' || route.name === 'DetailOpportunity';

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
            <View style={styles.headerContainer}>
                {/* Left header */}
                <View style={styles.leftGroup}>
                    {isChildScreen ? (
                        <>
                            <TouchableOpacity onPress={() => handleGoBack()} style={styles.leftButton}>
                                <IcBack width={20} height={20} color="#ffffff" />
                            </TouchableOpacity>
                            <Text style={[styles.titleText, styles.titleTextDetail]} numberOfLines={1}>
                                {title}
                            </Text>
                        </>
                    ) : (
                        <>
                            <TouchableOpacity onPress={handleOpenDrawer} style={styles.leftButton}>
                                <IcMenu width={30} height={30} color="#ffffff" />
                            </TouchableOpacity>
                            <Text style={[styles.titleText]} numberOfLines={1}>
                                {title}
                            </Text>
                        </>
                    )}
                </View>

                {/* Right header */}
                {isChildScreen ? (
                    isDetailOpportunity ? (
                        <TouchableOpacity
                            style={styles.moreButton}
                            onPress={() => setIsOptionMenuOpen(true)}
                        >
                            <IcDotMenu width={22} height={22} color="#ffffff" />
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.rightContainerEmpty} />
                    )
                ) : (
                    <View style={styles.rightContainer}>
                        <TouchableOpacity style={{ marginRight: 18 }} onPress={() => console.log('Open Notification')}>
                            <IcNotification width={24} height={24} color="#ffffff" />
                            {options.unreadNotification > 0 && (
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{options.unreadNotification}</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        {options.handleReload && (
                            <TouchableOpacity onPress={options.handleReload}>
                                <IcReload width={30} height={30} color="#ffffff" />
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </View>

            <Modal
                visible={isOptionMenuOpen}
                transparent
                animationType="fade"
                onRequestClose={() => setIsOptionMenuOpen(false)}
            >
                <TouchableWithoutFeedback onPress={() => setIsOptionMenuOpen(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.dropdownMenu}>
                            <TouchableOpacity
                                style={styles.optionItem}
                                onPress={() => handleOptionSelect('UPDATE')}
                            >
                                <IcEdit width={20} height={20} color="#000000" />
                                <Text style={styles.optionText}>Cập nhật</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.optionItem}
                                onPress={() => handleOptionSelect('UPDATE_STATUS')}
                            >
                                <IcEditState width={20} height={20} color="#000000" />
                                <Text style={styles.optionText}>Cập nhật trạng thái</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.optionItem}
                                onPress={() => handleOptionSelect('REGISTER_PLAN')}
                            >
                                <IcCalendar width={20} height={20} color="#000000" />
                                <Text style={styles.optionText}>Đăng ký kế hoạch</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.optionItem, { borderBottomWidth: 0 }]}
                                onPress={() => handleOptionSelect('CONVERT_PROJECT')}
                            >
                                <IcLink width={20} height={20} color="#000000" />
                                <Text
                                    style={[styles.optionText, style = { marginLeft: -2 }]}>
                                    Chuyển thành dự án
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#4AA0DF',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        // elevation: 3,                         // Bỏ comment nếu cần shadow 
        // shadowColor: '#000000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 3
    },

    leftGroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },

    leftButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    titleText: {
        fontSize: 18,
        fontWeight: 600,
        color: '#ffffff',
        flex: 1
    },

    titleTextDetail: {
        fontWeight: 700
    },

    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: '10'
    },

    rightContainerEmpty: {
        width: 0
    },

    badge: {
        position: 'absolute',
        right: -8,
        bottom: -6,
        backgroundColor: '#C62828',
        borderRadius: 9,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },

    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: '500'
    },

    modalOverlay: {
        flex: 1
    },

    dropdownMenu: {
        position: 'absolute',
        top: 60,
        right: 24,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D3D5D7',
        width: 180,
        height: 168
    },

    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7',
        gap: 10
    },

    optionText: {
        fontSize: 14,
        color: '#000000',
        fontWeight: '500'
    }
});

export default DefaultHeader;