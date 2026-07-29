import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    SafeAreaView,
    Image,
    Modal,
    StyleSheet
} from "react-native";
import { useState } from "react";
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


const SideMenu = ({ visible, onClose, navigation }) => {
    if (!visible) return null;

    const [activeTab, setActiveTab] = useState('Dashboard')

    const [expandedSection, setExpandedSection] = useState({
        category: true,
        business: true,
        statistic: true,
    });

    const toggleSection = (section) => {
        setExpandedSection((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleNavigate = (screenName) => {
        onClose();
        if (screenName && navigation) {
            navigation.navigate(screenName);
        }
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay} >
                <SafeAreaView style={styles.container}>
                    <View style={styles.userContainer}>
                        <View style={styles.avatarContainer}>
                            <IcUser width={40} height={40} color="#000000" />
                        </View>
                        <Text style={styles.userName}>Phan Lương Bằng</Text>
                        <Text style={styles.userRole}>Tổ Nghiên cứu phát triển</Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={styles.menuList}>
                        {/* Dashboard (Active State) */}
                        <TouchableOpacity
                            style={[
                                styles.menuItem,
                                activeTab === 'Dashboard' && styles.activeMenuItem
                            ]}
                        >
                            <IcDashboard
                                width={22} height={22}
                                color={activeTab === 'Dashboard' ? "#0C447C" : "#7E8387"}
                            />
                            <Text style={[styles.menuText, styles.activeMenuText]}>Dashboard</Text>
                        </TouchableOpacity>

                        {/* Danh mục */}
                        <TouchableOpacity
                            style={styles.sectionHeader}
                            onPress={() => toggleSection('category')}
                        >
                            <Text style={styles.sectionTitle}>Danh mục</Text>
                            {expandedSection.category ? (
                                <IcArrowD width={16} height={16} color="#000000" />
                            ) : (
                                <IcArrowR width={16} height={16} color="#000000" />
                            )}
                        </TouchableOpacity>

                        {expandedSection.category && (
                            <View style={styles.subGroup}>
                                <TouchableOpacity style={styles.subMenuItem} onPress={() => handleNavigate('Contact')}>
                                    <IcContact width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Người liên hệ</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem} onPress={() => handleNavigate('ProductService')}>
                                    <IcBox width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Sản phẩm dịch vụ</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem} onPress={() => handleNavigate('Customer')}>
                                    <IcCustomer width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Khách hàng</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        {/* Nghiệp vụ */}
                        <TouchableOpacity
                            style={styles.sectionHeader}
                            onPress={() => toggleSection('business')}
                        >
                            <Text style={styles.sectionTitle}>Nghiệp vụ</Text>
                            {expandedSection.business ? (
                                <IcArrowD width={16} height={16} color="#000000" />
                            ) : (
                                <IcArrowR width={16} height={16} color="#000000" />
                            )}
                        </TouchableOpacity>

                        {expandedSection.business && (
                            <View style={styles.subGroup}>
                                <TouchableOpacity style={styles.subMenuItem} onPress={() => handleNavigate('Opportunity')}>
                                    <IcOpportunity width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Cơ hội kinh doanh</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem} onPress={() => handleNavigate('Project')}>
                                    <IcProject width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Dự án</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem} onPress={() => handleNavigate('Contract')}>
                                    <IcContract width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Hợp đồng</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem} onPress={() => handleNavigate('BusinessPlan')}>
                                    <IcPlan width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Kế hoạch kinh doanh</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem} onPress={() => handleNavigate('ReviewPeriod')}>
                                    <IcSession width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Rà soát định kỳ</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        {/* Thống kê */}
                        <TouchableOpacity
                            style={styles.sectionHeader}
                            onPress={() => toggleSection('statistic')}
                        >
                            <Text style={styles.sectionTitle}>Thống kê</Text>
                            {expandedSection.statistic ? (
                                <IcArrowD width={16} height={16} color="#000000" />
                            ) : (
                                <IcArrowR width={16} height={16} color="#000000" />
                            )}
                        </TouchableOpacity>

                        {expandedSection.statistic && (
                            <View style={styles.subGroup}>
                                <TouchableOpacity style={styles.subMenuItem}>
                                    <IcDocument width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Cơ hội kinh doanh theo tuần</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem}>
                                    <IcDocument width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Tổng hợp doanh thu dự án</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem}>
                                    <IcDocument width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Thống kê tổng hợp thông tin cơ hội/dự án</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem}>
                                    <IcDocument width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Thống kê cơ hội/dự án không có nhân sự phòng GP</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem}>
                                    <IcDocument width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Rà soát định kỳ</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem}>
                                    <IcDocument width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Rà soát rà soát</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subMenuItem}>
                                    <IcDocument width={22} height={22} color="#7E8387" />
                                    <Text style={styles.subMenuText}>Báo cáo công việc dự án theo tuần</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        {/* 3. LOGOUT BUTTON */}
                        <TouchableOpacity style={styles.logoutBtn} onPress={() => console.log('Đăng xuất')}>
                            <IcLogout width={22} height={22} color="#C62828" />
                            <Text style={styles.logoutText}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>

                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.backdrop} />
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    container: {
        width: '70%',
        height: '100%',
        backgroundColor: '#FFFFFF',
    },

    backdrop: {
        flex: 1,
        height: '100%'
    },

    userContainer: {
        backgroundColor: '#2B82C9',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 12
    },

    avatarContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ffffff'
    },

    userName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
        marginTop: 6,
        marginBottom: 2,
    },

    userRole: {
        fontSize: 13,
        color: '#E6F2FA',
    },

    scrollContent: {
        paddingTop: 8,
        paddingBottom: 24,
    },

    // Active Item (Dashboard)
    menuList: {
        flex: 1,
        paddingHorizontal: 10
    },

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        marginVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6
    },

    activeMenuItem: {
        backgroundColor: '#E6F2FA',
        borderLeftWidth: 3,
        borderLeftColor: '#0066B3',
    },

    menuText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000000',
        marginLeft: 12,
    },

    activeMenuText: {
        color: '#0C447C',
        fontWeight: 'bold',
    },

    // Section Accordion Header
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderTopWidth: 1,
        borderColor: '#D3D5D7'
    },

    sectionTitle: {
        fontSize: 16,
        color: '#000000'
    },

    // Sub Menu Items

    subMenuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
    },

    subMenuText: {
        fontSize: 16,
        color: '#000000',
        marginLeft: 12,
        flex: 1
    },

    // Logout
    logoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderColor: '#D3D5D7'
    },

    logoutText: {
        fontSize: 16,
        color: '#000000',
        marginLeft: 12
    }
});

export default SideMenu;