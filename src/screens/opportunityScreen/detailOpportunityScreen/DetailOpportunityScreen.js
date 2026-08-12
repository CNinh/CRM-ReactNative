import { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, DeviceEventEmitter } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './DetailOpportunityScreen.style';
import InfoTab from './InfoTab';
import HistoryTab from './HistoryTab';
import MemberTab from './MemberTab';
import PlanTab from './PlanTab';
import LogTab from './LogTab';

import IcBuilding from '../../../assets/icons/building.svg';
import IcPercent from '../../../assets/icons/percent.svg'
import IcValue from '../../../assets/icons/coins.svg';
import IcChat from '../../../assets/icons/chats.svg';
import IcMember from '../../../assets/icons/members.svg';
import IcAdd from '../../../assets/icons/plus.svg';
import IcEdit from '../../../assets/icons/save_edit.svg';
import IcEditState from '../../../assets/icons/clipboard.svg'
import IcInfo from '../../../assets/icons/info.svg';
import IcHistory from '../../../assets/icons/history.svg';
import IcPerson from '../../../assets/icons/person.svg';
import IcPlan from '../../../assets/icons/calendar_day.svg';
import IcLog from '../../../assets/icons/code-pull-request.svg';

import { optHistories, optMembers, optPlans, optLogs } from '../../../data/mockData';

const DetailOpportunityScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { item, initialTab = 'info' } = route.params || {};

    const [historyList, setHistoryList] = useState(() =>
        optHistories.filter(h => h.opportunityId === item?.id)
    );
    const [memberList, setMemberList] = useState(() =>
        optMembers.filter(m => m.opportunityId === item?.id)
    );
    const [planList, setPlanList] = useState(() =>
        optPlans.filter(p => p.opportunityId === item?.id)
    );
    const [logList, setLogList] = useState(() =>
        optLogs.filter(l => l.opportunityId === item?.id)
    );

    const TABS = [
        { id: 'info', title: 'Thông tin', icon: IcInfo },
        { id: 'history', title: 'Lịch sử', icon: IcHistory, count: historyList.length },
        { id: 'member', title: 'Thành viên', icon: IcPerson, count: memberList.length },
        { id: 'plan', title: 'Kế hoạch', icon: IcPlan, count: planList.length },
        { id: 'log', title: 'Nhật ký rà soát', icon: IcLog, count: logList.length },
    ];

    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        if (route.params?.initialTab) {
            setActiveTab(route.params.initialTab);
        }
    }, [route.params?.initialTab]);

    const formatCurrency = (value) => {
        if (!value) return "0";
        if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}`;
        if (value >= 1000000) return `${(value / 1000000).toFixed(0)}`;
        return `${value.toLocaleString('vi-VN')} đ`;
    };

    const title = item?.name || '';
    const dept = item?.dept || '';
    const stage = item?.stage || '';
    const winRate = item?.probability + '%' || '0%';
    const expectedValue = formatCurrency(item?.expectedValue || '0');
    const totalExchange = historyList.length || 0;
    const totalMembers = memberList.length || 0;

    useEffect(() => {
        const memberSub = DeviceEventEmitter.addListener('ADD_MEMBER_SUCCESS', (newPayload) => {
            if (!newPayload || !Array.isArray(newPayload.members)) return;

            const roleArray = (newPayload.roles || []).map(r => r.name);
            const newRoles = roleArray.length > 0 ? roleArray : ['Lập trình'];

            const newMembers = newPayload.members.map((m, index) => ({
                id: m.id,
                name: m.name,
                username: m.username,
                dept: m.team || null,
                roles: newRoles,
                opportunityId: item?.id
            }));
            setMemberList(prevList => [...prevList, ...newMembers]);
        });

        return () => memberSub.remove();
    }, [item?.id]);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'info':
                return <InfoTab item={item} />;
            case 'history':
                return <HistoryTab data={historyList} item={historyList} />;
            case 'member':
                return <MemberTab data={memberList} item={memberList} />;
            case 'plan':
                return <PlanTab data={planList} item={planList} />;
            case 'log':
                return <LogTab data={logList} item={logList} />;
            default:
                return null;
        }
    };

    const renderFooterButton = () => {
        let IconComponent = IcEdit;
        let buttonText = 'Cập nhật';
        let iconSize = 18;
        let iconStyle = {};
        let handlePress = () => console.log();

        switch (activeTab) {
            case 'info':
                IconComponent = IcEdit;
                buttonText = 'Cập nhật';
                handlePress = () => {
                    navigation.navigate('CreateOpportunityScreen', {
                        item: item,
                        department: item?.dept
                    });
                };
                break;

            case 'plan':
                IconComponent = IcEdit;
                buttonText = 'Đăng ký kế hoạch';
                break;

            case 'history':
                IconComponent = IcEditState;
                buttonText = 'Cập nhật trạng thái';
                break;

            case 'member':
                IconComponent = IcAdd;
                iconStyle = { transform: [{ translateY: 2 }] }
                iconSize = 24
                buttonText = 'Thêm / quản lý thành viên';
                handlePress = () => {
                    navigation.navigate('AddMemberScreen', {
                        opportunityId: item?.id
                    });
                };
                break;
         
            case 'log':
                IconComponent = IcEdit;
                buttonText = 'Cập nhật';
                break;

            default:
                IconComponent = IcEdit;
                buttonText = 'Cập nhật';
                break;
        }

        return (
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.btnPrimary}
                    activeOpacity={0.8}
                    onPress={handlePress}
                >
                    <IconComponent
                        width={iconSize}
                        height={iconSize}
                        color="#FFFFFF"
                        style={iconStyle}
                    />
                    <Text style={styles.btnPrimaryText}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.subheaderContainer}>
                    {stage ? (
                        <View style={styles.stageBadge}>
                            <Text style={styles.stageBadgeText}>{stage}</Text>
                        </View>
                    ) : null}
                    <Text style={styles.opportunityTitle}>{title}</Text>
                    <View style={styles.deptRow}>
                        <IcBuilding width={26} height={26} color="#000000" />
                        <Text style={styles.deptName}>{dept}</Text>
                    </View>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[1]}
                >
                    <View style={styles.overviewContainer}>
                        <View style={styles.overviewCard}>
                            <View style={[styles.iconBox, { backgroundColor: '#E8F0FB' }]}>
                                <IcPercent width={16} height={16} color="#1A6DB5" />
                            </View>
                            <View>
                                <Text style={styles.overviewLabel}>Xác suất chốt</Text>
                                <Text style={styles.overviewValue}>{winRate}</Text>
                            </View>
                        </View>

                        <View style={styles.overviewCard}>
                            <View style={[styles.iconBox, { backgroundColor: '#E8F5E9' }]}>
                                <IcValue width={16} height={16} color="#2E7D32" />
                            </View>
                            <View>
                                <Text style={styles.overviewLabel}>Giá trị dự kiến(triệu)</Text>
                                <Text style={styles.overviewValue}>{expectedValue}</Text>
                            </View>
                        </View>

                        <View style={styles.overviewCard}>
                            <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
                                <IcChat width={16} height={16} color="#E65100" />
                            </View>
                            <View>
                                <Text style={styles.overviewLabel}>Số lượng trao đổi</Text>
                                <Text style={styles.overviewValue}>{totalExchange}</Text>
                            </View>
                        </View>

                        <View style={styles.overviewCard}>
                            <View style={[styles.iconBox, { backgroundColor: '#EDE7F6' }]}>
                                <IcMember width={16} height={16} color="#4527A0" />
                            </View>
                            <View>
                                <Text style={styles.overviewLabel}>Thành viên tham gia</Text>
                                <Text style={styles.overviewValue}>{totalMembers}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.stickyTabWrapper}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.tabBarScroll}
                        >
                            {TABS.map((tab) => {
                                const isActive = activeTab === tab.id;
                                const TabIcon = tab.icon;
                                return (
                                    <TouchableOpacity
                                        key={tab.id}
                                        style={[styles.tabItem, isActive && styles.tabItemActive]}
                                        onPress={() => setActiveTab(tab.id)}
                                        activeOpacity={0.7}
                                    >
                                        <TabIcon
                                            width={18} height={18}
                                            color={isActive ? '#185FA5' : '#7E8387'}
                                        />
                                        <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
                                            {tab.title}
                                        </Text>

                                        {tab.count !== undefined && (
                                            <View style={styles.badgeCount}>
                                                <Text style={styles.badgeCountText}>{tab.count}</Text>
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>

                    <View style={styles.tabContentContainer}>
                        {renderTabContent()}
                    </View>
                </ScrollView>

                {renderFooterButton()}
            </View>
        </SafeAreaView>
    );
};

export default DetailOpportunityScreen;