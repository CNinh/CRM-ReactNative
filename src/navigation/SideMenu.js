import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    InteractionManager,
    Platform,
} from "react-native";

import colors from '../constants/colors';
import theme from '../constants/theme';

import IcUser from '../assets/icons/user.svg';
import IcDashboard from '../assets/icons/summary.svg';
import IcArrowR from '../assets/icons/arrow_right.svg';
import IcArrowD from '../assets/icons/arrow_down.svg';
import IcContact from '../assets/icons/contact.svg';
import IcBox from '../assets/icons/menu_box.svg';
import IcCustomer from '../assets/icons/customer.svg';
import IcOpportunity from '../assets/icons/opportunity.svg';
import IcProject from '../assets/icons/project.svg';
import IcContract from '../assets/icons/contract.svg';
import IcPlan from '../assets/icons/plan.svg';
import IcSession from '../assets/icons/session_calendar.svg';
import IcDocument from '../assets/icons/document.svg';
import IcLogout from '../assets/icons/logout.svg';

import { user } from '../data/mockData';

const SideMenu = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const [expandedSection, setExpandedSection] = useState({
        category: true,
        business: true,
        statistic: false,
    });

    const toggleSection = (section) => {
        setExpandedSection((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleNavigate = (screenName) => {
        if (screenName && navigation) {
            navigation.closeDrawer();

            InteractionManager.runAfterInteractions(() => {
                navigation.navigate(screenName);
            });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header: User Profile Box */}
            <TouchableOpacity
                style={styles.headerContainer}
                onPress={() => handleNavigate('Profile')}
                activeOpacity={0.85}
            >
                <View style={styles.avatarContainer}>
                    <IcUser width={36} height={36} color={colors.white} />
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.userName} numberOfLines={1}>
                        {user.fullName}
                    </Text>
                    <View style={styles.deptBadge}>
                        <Text style={styles.deptText} numberOfLines={1}>
                            {user.dept?.name || 'VNPT CRM'}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

            {/* Menu Navigation Items */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.menuScroll}
                contentContainerStyle={styles.scrollContent}
            >
                {/* 1. Dashboard (Active Top Item) */}
                <TouchableOpacity
                    style={[
                        styles.menuItem,
                        activeTab === 'Dashboard' && styles.activeMenuItem,
                    ]}
                    onPress={() => {
                        setActiveTab('Dashboard');
                        handleNavigate('MainTabs');
                    }}
                    activeOpacity={0.7}
                >
                    <View style={[
                        styles.menuIconBox,
                        activeTab === 'Dashboard' && styles.activeMenuIconBox
                    ]}>
                        <IcDashboard
                            width={20}
                            height={20}
                            color={activeTab === 'Dashboard' ? colors.primary : colors.gray500}
                        />
                    </View>
                    <Text
                        style={[
                            styles.menuText,
                            activeTab === 'Dashboard' && styles.activeMenuText,
                        ]}
                    >
                        Tổng quan Dashboard
                    </Text>
                </TouchableOpacity>

                {/* 2. Danh mục */}
                <TouchableOpacity
                    style={styles.sectionHeader}
                    onPress={() => toggleSection('category')}
                    activeOpacity={0.7}
                >
                    <Text style={styles.sectionTitle}>DANH MỤC</Text>
                    {expandedSection.category ? (
                        <IcArrowD width={14} height={14} color={colors.gray500} />
                    ) : (
                        <IcArrowR width={14} height={14} color={colors.gray500} />
                    )}
                </TouchableOpacity>

                {expandedSection.category && (
                    <View style={styles.subGroup}>
                        <TouchableOpacity
                            style={styles.subMenuItem}
                            onPress={() => handleNavigate('Contact')}
                            activeOpacity={0.7}
                        >
                            <IcContact width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Người liên hệ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.subMenuItem}
                            onPress={() => handleNavigate('ProductService')}
                            activeOpacity={0.7}
                        >
                            <IcBox width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Sản phẩm dịch vụ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.subMenuItem}
                            onPress={() => handleNavigate('Customer')}
                            activeOpacity={0.7}
                        >
                            <IcCustomer width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Khách hàng</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* 3. Nghiệp vụ */}
                <TouchableOpacity
                    style={styles.sectionHeader}
                    onPress={() => toggleSection('business')}
                    activeOpacity={0.7}
                >
                    <Text style={styles.sectionTitle}>NGHIỆP VỤ</Text>
                    {expandedSection.business ? (
                        <IcArrowD width={14} height={14} color={colors.gray500} />
                    ) : (
                        <IcArrowR width={14} height={14} color={colors.gray500} />
                    )}
                </TouchableOpacity>

                {expandedSection.business && (
                    <View style={styles.subGroup}>
                        <TouchableOpacity
                            style={styles.subMenuItem}
                            onPress={() => handleNavigate('Opportunity')}
                            activeOpacity={0.7}
                        >
                            <IcOpportunity width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Cơ hội kinh doanh</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.subMenuItem}
                            onPress={() => handleNavigate('Project')}
                            activeOpacity={0.7}
                        >
                            <IcProject width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Dự án</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.subMenuItem}
                            onPress={() => handleNavigate('Contract')}
                            activeOpacity={0.7}
                        >
                            <IcContract width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Hợp đồng</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.subMenuItem}
                            onPress={() => handleNavigate('BusinessPlan')}
                            activeOpacity={0.7}
                        >
                            <IcPlan width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Kế hoạch kinh doanh</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.subMenuItem}
                            onPress={() => handleNavigate('ReviewPeriod')}
                            activeOpacity={0.7}
                        >
                            <IcSession width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Rà soát định kỳ</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* 4. Thống kê & Báo cáo */}
                <TouchableOpacity
                    style={styles.sectionHeader}
                    onPress={() => toggleSection('statistic')}
                    activeOpacity={0.7}
                >
                    <Text style={styles.sectionTitle}>THỐNG KÊ & BÁO CÁO</Text>
                    {expandedSection.statistic ? (
                        <IcArrowD width={14} height={14} color={colors.gray500} />
                    ) : (
                        <IcArrowR width={14} height={14} color={colors.gray500} />
                    )}
                </TouchableOpacity>

                {expandedSection.statistic && (
                    <View style={styles.subGroup}>
                        <TouchableOpacity style={styles.subMenuItem} activeOpacity={0.7}>
                            <IcDocument width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Cơ hội theo tuần</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.subMenuItem} activeOpacity={0.7}>
                            <IcDocument width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Tổng hợp doanh thu dự án</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.subMenuItem} activeOpacity={0.7}>
                            <IcDocument width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Tổng hợp thông tin cơ hội / DA</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.subMenuItem} activeOpacity={0.7}>
                            <IcDocument width={19} height={19} color={colors.gray600} />
                            <Text style={styles.subMenuText}>Báo cáo công việc theo tuần</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* 5. LOGOUT BUTTON */}
                <View style={styles.logoutWrapper}>
                    <TouchableOpacity
                        style={styles.logoutBtn}
                        onPress={() => console.log('Đăng xuất')}
                        activeOpacity={0.7}
                    >
                        <View style={styles.logoutIconBox}>
                            <IcLogout width={18} height={18} color={colors.danger} />
                        </View>
                        <Text style={styles.logoutText}>Đăng xuất tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },

    headerContainer: {
        backgroundColor: colors.primary,
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'ios' ? 16 : 24,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.15)',
        ...theme.shadows.sm,
    },

    avatarContainer: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: 'rgba(255, 255, 255, 0.22)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.white,
    },

    userInfo: {
        marginLeft: 14,
        flex: 1,
    },

    userName: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.white,
        letterSpacing: 0.2,
    },

    deptBadge: {
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
        borderRadius: theme.radius.xs,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginTop: 4,
        alignSelf: 'flex-start',
    },

    deptText: {
        fontSize: 12,
        color: colors.white,
        fontWeight: '500',
    },

    menuScroll: {
        flex: 1,
    },

    scrollContent: {
        paddingTop: 12,
        paddingBottom: 32,
        paddingHorizontal: 12,
    },

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: theme.radius.md,
        marginBottom: 6,
    },

    activeMenuItem: {
        backgroundColor: colors.primarySubtle,
        borderLeftWidth: 4,
        borderLeftColor: colors.primary,
    },

    menuIconBox: {
        width: 32,
        height: 32,
        borderRadius: theme.radius.sm,
        justifyContent: 'center',
        alignItems: 'center',
    },

    activeMenuIconBox: {
        backgroundColor: colors.white,
    },

    menuText: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.gray700,
        marginLeft: 10,
    },

    activeMenuText: {
        color: colors.primary,
        fontWeight: '700',
    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 4,
        borderTopWidth: 1,
        borderTopColor: colors.gray200,
    },

    sectionTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.gray400,
        letterSpacing: 0.8,
    },

    subGroup: {
        paddingLeft: 4,
        marginBottom: 6,
    },

    subMenuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 9,
        paddingHorizontal: 12,
        borderRadius: theme.radius.sm,
    },

    subMenuText: {
        fontSize: 14,
        color: colors.gray700,
        fontWeight: '500',
        marginLeft: 12,
        flex: 1,
    },

    logoutWrapper: {
        marginTop: 20,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: colors.gray200,
    },

    logoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: colors.dangerLight,
        borderRadius: theme.radius.md,
    },

    logoutIconBox: {
        width: 30,
        height: 30,
        borderRadius: theme.radius.xs,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoutText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.danger,
        marginLeft: 12,
    },
});

export default SideMenu;