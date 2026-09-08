import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Platform,
    UIManager,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from "./HomeGeneralView.style";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

import IcCalendar from "../../assets/icons/calendar.svg";
import IcFolder from "../../assets/icons/folder.svg";
import IcFolderCheck from "../../assets/icons/folder-check.svg";
import IcHandshake from "../../assets/icons/handshake.svg";
import IcTarget from "../../assets/icons/target.svg";
import OpportunityCard from "../../components/cards/OpportunityCard";
import ProjectCard from "../../components/cards/ProjectCard";
import IcSearch from "../../assets/icons/search.svg";
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
    };

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
    };

    const handleLoadMorePrj = () => {
        setVisibleProject(prev => prev + 10);
    };

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
                {/* Top Section: Date Filter & KPI Executive Grid */}
                <View style={styles.topSection}>
                    {/* Date filter bar */}
                    <View style={styles.dateFilterContainer}>
                        <View style={styles.dateItem}>
                            <Text style={styles.dateLabel}>Từ ngày</Text>
                            <TouchableOpacity style={styles.dateBox} activeOpacity={0.7}>
                                <Text style={styles.dateText}>{fromDate}</Text>
                                <IcCalendar width={16} height={16} color={colors.gray500} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dateArrow}>
                            <Text style={styles.dateArrowText}>→</Text>
                        </View>

                        <View style={styles.dateItem}>
                            <Text style={styles.dateLabel}>Đến ngày</Text>
                            <TouchableOpacity style={styles.dateBox} activeOpacity={0.7}>
                                <Text style={styles.dateText}>{toDate}</Text>
                                <IcCalendar width={16} height={16} color={colors.gray500} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* KPI Executive Summary Grid */}
                    <View style={styles.gridContainer}>
                        {/* 1. Dự án */}
                        <TouchableOpacity
                            style={[styles.reportCard, { borderLeftColor: colors.danger }]}
                            onPress={() => navigation.navigate('Dự án')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.headerRow}>
                                <View style={[styles.iconBox, { backgroundColor: colors.dangerLight }]}>
                                    <IcFolder width={18} height={18} color={colors.danger} />
                                </View>
                                <Text style={styles.reportTitle} numberOfLines={2}>Dự án</Text>
                            </View>
                            <Text style={styles.reportValue}>20</Text>
                            <View style={styles.bottomContent}>
                                <Text style={styles.reportSub}>
                                    DT dự kiến: <Text style={styles.boldText}>10,116 tr</Text>
                                </Text>
                                <Text style={styles.reportSub}>
                                    DT thực hiện: <Text style={styles.boldText}>833 tr</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* 2. Dự án >= 80% */}
                        <TouchableOpacity
                            style={[styles.reportCard, { borderLeftColor: colors.success }]}
                            onPress={() => navigation.navigate('Dự án')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.headerRow}>
                                <View style={[styles.iconBox, { backgroundColor: colors.successLight }]}>
                                    <IcFolderCheck width={18} height={18} color={colors.success} />
                                </View>
                                <Text style={styles.reportTitle} numberOfLines={2}>Dự án ≥ 80%</Text>
                            </View>
                            <Text style={styles.reportValue}>2</Text>
                            <View style={styles.bottomContent}>
                                <Text style={styles.reportSub}>
                                    DT dự kiến: <Text style={styles.boldText}>10,116 tr</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* 3. Cơ hội kinh doanh */}
                        <TouchableOpacity
                            style={[styles.reportCard, { borderLeftColor: colors.warning }]}
                            onPress={() => navigation.navigate('Cơ hội')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.headerRow}>
                                <View style={[styles.iconBox, { backgroundColor: colors.warningLight }]}>
                                    <IcHandshake width={18} height={18} color={colors.warning} />
                                </View>
                                <Text style={styles.reportTitle} numberOfLines={2}>Cơ hội{"\n"}kinh doanh</Text>
                            </View>
                            <Text style={styles.reportValue}>37</Text>
                            <View style={styles.bottomContent}>
                                <Text style={styles.reportSub}>
                                    DT dự kiến: <Text style={styles.boldText}>10,116 tr</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* 4. Cơ hội KD >= 80% */}
                        <TouchableOpacity
                            style={[styles.reportCard, { borderLeftColor: colors.primary }]}
                            onPress={() => navigation.navigate('Cơ hội')}
                            activeOpacity={0.8}
                        >
                            <View style={styles.headerRow}>
                                <View style={[styles.iconBox, { backgroundColor: colors.primarySubtle }]}>
                                    <IcTarget width={18} height={18} color={colors.primary} />
                                </View>
                                <Text style={styles.reportTitle} numberOfLines={2}>Cơ hội KD ≥ 80%</Text>
                            </View>
                            <Text style={styles.reportValue}>29</Text>
                            <View style={styles.bottomContent}>
                                <Text style={styles.reportSub}>
                                    DT dự kiến: <Text style={styles.boldText}>10,116 tr</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Main Content: Opportunity & Project Lists */}
                <View style={styles.overviewBody}>
                    {/* Opportunity Section */}
                    <View style={styles.halfSection}>
                        <View style={styles.sectionHeader}>
                            <View style={styles.sectionTitleRow}>
                                <View style={styles.accentBar} />
                                <Text style={styles.sectionTitle}>Danh sách cơ hội</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Cơ hội')}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.viewAllText}>Xem tất cả →</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchBox}>
                            <IcSearch width={16} height={16} color={colors.gray400} />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Nhập tên hoặc mã cơ hội..."
                                placeholderTextColor={colors.gray400}
                                value={searchOpportunity}
                                onChangeText={setSearchOpportunity}
                            />
                            {searchOpportunity.length > 0 && (
                                <TouchableOpacity
                                    onPress={() => setSearchOpportunity('')}
                                    style={styles.clearBtn}
                                >
                                    <Text style={styles.clearBtnText}>✕</Text>
                                </TouchableOpacity>
                            )}
                        </View>

                        {getDisplayOpt().map((item) => (
                            <OpportunityCard
                                key={item.id}
                                item={item}
                                type="home"
                                onPress={() => {
                                    navigation.navigate('DetailOpportunityScreen', {
                                        item: item,
                                        initialTab: 'info'
                                    });
                                }}
                                onButtonPress={() => {
                                    navigation.navigate('DetailOpportunityScreen', {
                                        item: item,
                                        initialTab: 'log'
                                    });
                                }}
                            />
                        ))}

                        {visibleOpportunity < (mockOpportunity?.length || 0) && (
                            <TouchableOpacity
                                style={styles.btnLoadMore}
                                onPress={handleLoadMoreOpt}
                                activeOpacity={0.7}
                            >
                                <IcPlus width={18} height={18} color={colors.primary} style={{ translate: 0.9 }} />
                                <Text style={styles.loadMoreText}>Tải thêm 10 cơ hội</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    {/* Project Section */}
                    <View style={styles.halfSection}>
                        <View style={styles.sectionHeader}>
                            <View style={styles.sectionTitleRow}>
                                <View style={[styles.accentBar, { backgroundColor: colors.success }]} />
                                <Text style={styles.sectionTitle}>Danh sách dự án</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Dự án')}
                                activeOpacity={0.7}
                            >
                                <Text style={[styles.viewAllText, { color: colors.success }]}>Xem tất cả →</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.searchBox}>
                            <IcSearch width={16} height={16} color={colors.gray400} />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Nhập tên hoặc mã dự án..."
                                placeholderTextColor={colors.gray400}
                                value={searchProject}
                                onChangeText={setSearchProject}
                            />
                            {searchProject.length > 0 && (
                                <TouchableOpacity
                                    onPress={() => setSearchProject('')}
                                    style={styles.clearBtn}
                                >
                                    <Text style={styles.clearBtnText}>✕</Text>
                                </TouchableOpacity>
                            )}
                        </View>

                        {getDisplayPrj().map((item) => (
                            <ProjectCard
                                key={item.id}
                                item={item}
                                type="home"
                                onPress={() => {
                                    navigation.navigate('DetailProjectScreen', {
                                        item: item,
                                        initialTab: 'info'
                                    });
                                }}
                                onButtonPress={() => {
                                    navigation.navigate('DetailProjectScreen', {
                                        item: item,
                                        initialTab: 'log'
                                    });
                                }}
                            />
                        ))}

                        {visibleProject < (mockProject?.length || 0) && (
                            <TouchableOpacity
                                style={[styles.btnLoadMore, { borderColor: colors.success, backgroundColor: colors.successLight }]}
                                onPress={handleLoadMorePrj}
                                activeOpacity={0.7}
                            >
                                <IcPlus width={18} height={18} color={colors.success} style={{ translate: 0.9 }} />
                                <Text style={[styles.loadMoreText, { color: colors.success }]}>Tải thêm 10 dự án</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeGeneralView;