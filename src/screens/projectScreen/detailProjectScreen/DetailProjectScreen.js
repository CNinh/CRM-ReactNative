import { useState, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, DeviceEventEmitter } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './DetailProjectScreen.style';
import DeleteModal from '../../../components/modals/DeleteModal';
import ProjectTab from './ProjectTab';
import ServiceTab from './ServiceTab';
import ChatTab from './ChatTab';
import TaskTab from './TaskTab';
import LogTab from './LogTab';

import IcBuilding from '../../../assets/icons/building.svg';
import IcLink from '../../../assets/icons/paperclip-link.svg';
import IcPercent from '../../../assets/icons/percent.svg'
import IcValue from '../../../assets/icons/coins.svg';
import IcChat from '../../../assets/icons/chats.svg';
import IcMember from '../../../assets/icons/members.svg';
import IcAdd from '../../../assets/icons/plus.svg';
import IcEdit from '../../../assets/icons/save_edit.svg';
import IcGrid from '../../../assets/icons/grid-plus.svg';
import IcProject from '../../../assets/icons/info.svg';
import IcService from '../../../assets/icons/history.svg';
import IcTask from '../../../assets/icons/calendar_day.svg';
import IcLog from '../../../assets/icons/code-pull-request.svg';

import { prjServices, prjChats, prjTasks, prjLogs } from '../../../data/mockData';

const DetailProjectScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const { item, initialTab = 'project' } = route.params || {};

    useLayoutEffect(() => {
        navigation.setOptions({
            onOptionPress: (actionType) => {
                if (actionType === 'EDIT_PROJECT') {
                    console.log('Open edit screen');
                    // navigation.navigate('FormProjectScreen', { projectData: item });
                } else if (actionType === 'DELETE_PROJECT') {
                    setIsDeleteModalVisible(true);
                }
            },
        });
    }, [navigation, item]);

    const handleConfirmDelete = async () => {
        setIsDeleting(true);
        try {
            setIsDeleteModalVisible(false);
            navigation.goBack();
        } catch (error) {
            console.error('Xoá dự án thất bại:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    const [serviceList, setServiceList] = useState(() =>
        prjServices.filter(h => h.projectId === item?.id)
    );
    const [chatList, setChatList] = useState(() =>
        prjChats.filter(m => m.projectId === item?.id)
    );
    const [taskList, setTaskList] = useState(() =>
        prjTasks.filter(p => p.projectId === item?.id)
    );
    const [logList, setLogList] = useState(() =>
        prjLogs.filter(l => l.projectId === item?.id)
    );

    const TABS = [
        { id: 'project', title: 'Dự án', icon: IcProject },
        { id: 'service', title: 'Dịch vụ', icon: IcService, count: serviceList.length },
        { id: 'chat', title: 'Trao đổi', icon: IcChat, count: chatList.length },
        { id: 'task', title: 'Công việc', icon: IcTask, count: taskList.length },
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
        if (value >= 1000000) return `${(value / 1000000).toFixed(0)}`;
        return `${value.toLocaleString('vi-VN')} đ`;
    };

    const rateNum = item?.successRate ?? 100;

    const formatRate = (val) => {
        if (val === undefined || val === null || val === '') return '0,00';
        const num = Number(val);
        if (isNaN(num)) return '0,00';
        return num.toFixed(2).replace('.', ',');
    };

    const uniqueMembers = Array.from(
        new Map(
            serviceList
                .flatMap(service => service.members || [])
                .map(member => [member.id || member.username, member])
        ).values()
    );

    const title = item?.name || '';
    const dept = item?.dept || '';
    const opportunity = item?.opportunity.name || '';
    const stage = item?.stage || '';
    const winRate = item?.successRate + '%' || '0%';
    const expectedValue = formatCurrency(item?.revenue || '0');
    const totalExchange = chatList.length || 0;
    const totalMembers = uniqueMembers.length || 0;

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
                projectId: item?.id
            }));
            setChatList(prevList => [...prevList, ...newMembers]);
        });

        return () => memberSub.remove();
    }, [item?.id]);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'project':
                return <ProjectTab item={item} />;
            case 'service':
                return <ServiceTab data={serviceList} item={serviceList} projectId={item?.id} />;
            case 'chat':
                return <ChatTab data={chatList} item={chatList} projectId={item?.id} />;
            case 'task':
                return <TaskTab data={taskList} item={taskList} projectId={item?.id} />;
            case 'log':
                return <LogTab data={logList} item={logList} />;
            default:
                return null;
        }
    };

    const renderFooterButton = () => {
        // ChatTab
        if (activeTab === 'chat') {
            return null;
        }

        // TaskTab - LogTab
        if (activeTab === 'task' || activeTab === 'log') {
            return (
                <View style={styles.footerRow}>
                    <TouchableOpacity
                        style={styles.btnFooterHalf}
                        activeOpacity={0.8}
                        onPress={() => console.log('Thêm công việc')}
                    >
                        <IcAdd width={24} height={24} color="#FFFFFF" style={{ translateY: 1.2 }} />
                        <Text style={[styles.btnHalfText, { marginLeft: -8 }]}>Thêm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnFooterHalf}
                        activeOpacity={0.8}
                        onPress={() => console.log('Thêm từ bộ công việc')}
                    >
                        <IcGrid width={20} height={20} color="#FFFFFF" />
                        <Text style={styles.btnHalfText}>Thêm từ bộ công việc</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        // ProjectTab - ServiceTab
        let IconComponent = IcEdit;
        let buttonText = 'Cập nhật';
        let iconSize = 18;
        let iconStyle = {};
        let handlePress = () => console.log('Press button');

        if (activeTab === 'service') {
            IconComponent = IcAdd;
            iconStyle = { transform: [{ translateY: 2 }] };
            iconSize = 24;
            buttonText = 'Thêm dịch vụ';
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
                    <TouchableOpacity
                        style={styles.linkRow}
                        onPress={() => {
                            if (item?.opportunity) {
                                navigation.navigate('DetailOpportunityScreen', {
                                    item: item?.opportunity
                                });
                            }
                        }}
                    >
                        <IcLink width={18} height={18} color="#1A7FC1" />
                        <Text
                            style={styles.linkName}
                            numberOfLines={1}
                            ellipsizeMode='clip'
                        >
                            Từ cơ hội: {opportunity}
                        </Text>
                    </TouchableOpacity>
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
                                <Text style={styles.overviewValue}>{formatRate(rateNum)}%</Text>
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

            <DeleteModal
                isVisible={isDeleteModalVisible}
                onClose={() => setIsDeleteModalVisible(false)}
                onConfirm={handleConfirmDelete}
                type="dự án"
                title={title}
                isLoading={isDeleting}
            />
        </SafeAreaView>
    );
};

export default DetailProjectScreen;