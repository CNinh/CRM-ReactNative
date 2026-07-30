import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    FlatList,
    LayoutAnimation,
    Platform,
    UIManager,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from "./HomeGeneralView.style";
import colors from "../../constants/colors";
import DefaultHeader from "../../components/header/DefaultHeader";
import IcCalendar from "../../assets/icons/calendar.svg";
import IcFolder from "../../assets/icons/folder.svg";
import IcFolderCheck from "../../assets/icons/folder-check.svg";
import IcHandshake from "../../assets/icons/handshake.svg";
import IcTarget from "../../assets/icons/target.svg";
import OpportunityCard from "../../components/cards/OpportunityCard";
import ProjectCard from "../../components/cards/ProjectCard";
import IcSearch from "../../assets/icons/search.svg";
import IcList from "../../assets/icons/list.svg";
import IcPlus from "../../assets/icons/plus.svg";

import { mockOpportunity, mockProject } from "../../data/mockData";

// Android layout animation
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const HomeGeneralView = () => {
    const navigation = useNavigation();

    const getCurrentDateString = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const [currentTab, setCurrentTab] = useState('summary');
    const [fromDate, setFromDate] = useState(getCurrentDateString());
    const [toDate, setToDate] = useState(getCurrentDateString());
    const [searchOpportunity, setSearchOpportunity] = useState('');
    const [searchProject, setSearchProject] = useState('');

    const [visibleOpportunity, setVisibleOpportunity] = useState(3);
    const [visibleProject, setVisibleProject] = useState(3);

    // Bỏ dấu dùng cho search
    const removeAccents = (str) => {
        if (!str) return '';
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
    };

    const getDisplayOpt = () => {
        const cleanSearch = removeAccents(searchOpportunity).toLowerCase().trim();

        const filtered = (mockOpportunity || []).filter(item => {
            if (!cleanSearch) return true;

            const cleanName = removeAccents(item.name || item.title || '').toLowerCase();
            const cleanCode = removeAccents(item.code || '').toLowerCase();

            return cleanName.includes(cleanSearch) || cleanCode.includes(cleanSearch);
        });

        return filtered.slice(0, visibleOpportunity);
    };

    const getDisplayPrj = () => {
        const cleanSearch = removeAccents(searchProject).toLowerCase().trim();

        const filtered = (mockProject || []).filter(item => {
            if (!cleanSearch) return true;

            const cleanName = removeAccents(item.name || item.title || '').toLowerCase();
            const cleanCode = removeAccents(item.code || '').toLowerCase();

            return cleanName.includes(cleanSearch) || cleanCode.includes(cleanSearch);
        });

        return filtered.slice(0, visibleProject);
    };

    const handleLoadMoreOpt = () => {
        setVisibleOpportunity(prev => prev + 10);
    }

    const handleLoadMorePrj = () => {
        setVisibleProject(prev => prev + 10);
    }

    useEffect(() => {
        navigation.setOptions({
            handleReload: () => {
                setVisibleOpportunity(3);
                setVisibleProject(3);
            }
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                {/* Date picker | Report grid */}
                <View style={{ backgroundColor: '#E4E6E9' }}>
                    {/* Date picker */}
                    <View style={styles.dateFilterContainer}>
                        <Text style={styles.dateLabel}>Từ ngày</Text>
                        <TouchableOpacity style={styles.dateBox}>
                            <Text style={styles.dateText}>07/05/2026</Text>
                            <IcCalendar width={20} height={20} color="#000000" />
                        </TouchableOpacity>

                        <Text style={styles.dateLabel}>Đến ngày</Text>
                        <TouchableOpacity style={styles.dateBox}>
                            <Text style={styles.dateText}>07/05/2026</Text>
                            <IcCalendar width={20} height={20} color="#000000" />
                        </TouchableOpacity>
                    </View>

                    {/* Report Grid */}
                    <View style={styles.gridContainer}>
                        <View style={styles.reportCard}>
                            <View style={styles.headerRow}>
                                <View style={[styles.iconBox, { backgroundColor: '#E24B4A' }]}>
                                    <IcFolder width={20} height={20} color="#ffffff" />
                                </View>
                                <Text style={styles.reportTitle}>Dự án</Text>
                            </View>
                            <Text style={styles.reportValue}>20</Text>
                            <View style={styles.bottomContent}>
                                <Text style={styles.reportSub}>DT dự kiến: <Text style={styles.boldText}>10,116 tr</Text></Text>
                                <Text style={styles.reportSub}>DT thực hiện: <Text style={styles.boldText}>833 tr</Text></Text>
                            </View>
                        </View>

                        <View style={styles.reportCard}>
                            <View style={styles.headerRow}>
                                <View style={[styles.iconBox, { backgroundColor: '#56A856' }]}>
                                    <IcFolderCheck width={20} height={20} color="#ffffff" />
                                </View>
                                <Text style={styles.reportTitle}>Dự án ≥ 80%</Text>
                            </View>
                            <Text style={styles.reportValue}>2</Text>
                            <View style={styles.bottomContent}>
                                <Text style={styles.reportSub}>DT dự kiến: <Text style={styles.boldText}>10,116 tr</Text></Text>
                            </View>
                        </View>

                        <View style={styles.reportCard}>
                            <View style={styles.headerRow}>
                                <View style={[styles.iconBox, { backgroundColor: '#E19E2E' }]}>
                                    <IcHandshake width={20} height={20} color="#ffffff" />
                                </View>
                                <Text style={styles.reportTitle}>Cơ hội{"\n"}kinh doanh</Text>
                            </View>
                            <Text style={styles.reportValue}>37</Text>
                            <View style={styles.bottomContent}>
                                <Text style={styles.reportSub}>DT dự kiến: <Text style={styles.boldText}>10,116 tr</Text></Text>
                            </View>
                        </View>

                        <View style={styles.reportCard}>
                            <View style={styles.headerRow}>
                                <View style={[styles.iconBox, { backgroundColor: '#3B82D9' }]}>
                                    <IcTarget width={20} height={20} color="#ffffff" />
                                </View>
                                <Text style={styles.reportTitle}>Cơ hội KD ≥ 80%</Text>
                            </View>
                            <Text style={styles.reportValue}>29</Text>
                            <View style={styles.bottomContent}>
                                <Text style={styles.reportSub}>DT dự kiến: <Text style={styles.boldText}>10,116 tr</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Opportunity | Project list */}
                <View style={styles.overviewBody}>
                    {/* Opportunity list */}
                    <View style={styles.halfSection}>
                        <View style={styles.sectionHeader}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                                <IcList width={24} height={24} color="#1A7FC1" />
                                <Text style={styles.sectionTitle}>Danh sách cơ hội</Text>
                            </View>
                        </View>
                        <View style={styles.searchBox}>
                            <IcSearch width={18} height={18} color="#D3D5D7" />
                            <TextInput
                                style={[styles.searchInput, { flex: 1 }]}
                                placeholder="Nhập tên cơ hội kinh doanh"
                                value={searchOpportunity}
                                onChangeText={setSearchOpportunity}
                            />
                        </View>

                        {getDisplayOpt().map((item, index) => (
                            <OpportunityCard
                                key={item.id}
                                item={item}
                                type="home"
                                onButtonPress={() => {
                                    console.log('Hiển thị nhật ký cơ hội')
                                }}
                            />
                        ))}

                        {visibleOpportunity < (mockOpportunity?.length || 0) && (
                            <TouchableOpacity style={styles.btnLoadMore} onPress={handleLoadMoreOpt}>
                                <IcPlus width={26} height={26} color="#ffffff" style={{ translateY: 1.2 }} />
                                <Text style={styles.loadMoreText}>Tải thêm 10 cơ hội</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    {/* Project list */}
                    <View style={styles.halfSection}>
                        <View style={styles.sectionHeader}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                                <IcList width={24} height={24} color="#1A7FC1" />
                                <Text style={styles.sectionTitle}>Danh sách dự án</Text>
                            </View>
                        </View>
                        <View style={styles.searchBox}>
                            <IcSearch width={18} height={18} color="#D3D5D7" />
                            <TextInput
                                style={[styles.searchInput, { flex: 1 }]}
                                placeholder="Nhập tên dự án"
                                value={searchProject}
                                onChangeText={setSearchProject}
                            />
                        </View>

                        {getDisplayPrj().map((item, index) => (
                            <ProjectCard
                                key={item.id}
                                item={item}
                                type="home"
                                onButtonPress={() => {
                                    console.log('Hiển thị nhật ký dự án')
                                }}
                            />
                        ))}

                        {visibleProject < (mockProject?.length || 0) && (
                            <TouchableOpacity style={styles.btnLoadMore} onPress={handleLoadMorePrj}>
                                <IcPlus width={26} height={26} color="#ffffff" style={{ translateY: 1.2 }} />
                                <Text style={styles.loadMoreText}>Tải thêm 10 dự án</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeGeneralView;