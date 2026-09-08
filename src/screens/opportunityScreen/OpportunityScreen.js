import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import styles from "./OpportunityScreen.style";
import OpportunityCard from "../../components/cards/OpportunityCard";
import FilterModal from "../../components/modals/filterModal/FilterModal";
import colors from "../../constants/colors";

import IcSearch from "../../assets/icons/search.svg";
import IcFilter from "../../assets/icons/filter.svg";
import IcSort from "../../assets/icons/sort.svg";
import IcPlus from "../../assets/icons/plus.svg";

import { opportunity, stage, service, department, staff } from '../../data/mockData';

const OpportunityScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [searchText, setSearchText] = useState('');
    const [visibleCount, setVisibleCount] = useState(4);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [selectedStage, setSelectedStage] = useState([]);
    const [selectedService, setSelectedService] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState([]);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    // Nhận param redirect từ màn hình khách hàng sang
    useFocusEffect(
        useCallback(() => {
            const keyword = route.params?.searchKeyword;

            if (keyword) {
                setSearchText(keyword);
                navigation.setParams({ searchKeyword: undefined });
            }
        }, [route.params?.searchKeyword, navigation])
    );

    /* Filter Helper */
    const getItemName = (id, dataArray) => {
        const found = dataArray?.find(item => item.id === id);
        return found ? (found.title || found.name || found.label) : id;
    };

    // Xoá dấu dùng cho search
    const removeAccents = (str) => {
        if (!str) return '';
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
    };

    const filteredData = (opportunity || []).filter(item => {
        const cleanSearch = removeAccents(searchText).toLowerCase().trim();
        const cleanTitle = removeAccents(item.title || item.name || '').toLowerCase();
        const cleanCode = removeAccents(item.code || item.opportunityCode || item.projectCode || '').toLowerCase();
        const cleanCustomerCode = removeAccents(item.customerCode || '').toLowerCase();
        const cleanCustomerName = removeAccents(item.customerName || item.customer || '').toLowerCase();

        let matchesSearch = !cleanSearch;

        if (cleanSearch) {
            const parts = cleanSearch.split('-').map(p => p.trim()).filter(Boolean);

            if (parts.length > 1) {
                const searchCode = parts[0];
                const searchName = parts[1];

                matchesSearch =
                    (cleanCustomerCode && cleanCustomerCode.includes(searchCode)) ||
                    (cleanCustomerName && cleanCustomerName.includes(searchName)) ||
                    cleanTitle.includes(searchName) ||
                    cleanCode.includes(searchCode);
            } else {
                matchesSearch =
                    cleanTitle.includes(cleanSearch) ||
                    cleanCode.includes(cleanSearch) ||
                    (cleanCustomerCode && cleanCustomerCode.includes(cleanSearch)) ||
                    (cleanCustomerName && cleanCustomerName.includes(cleanSearch));
            }
        }

        // Giai đoạn
        const matchesStage = selectedStage.length === 0 ||
            selectedStage.includes(item.stageId) ||
            selectedStage.some(id => getItemName(id, stage) === item.stage);

        // Dịch vụ
        const matchesService = selectedService.length === 0 ||
            selectedService.includes(item.serviceId) ||
            selectedService.some(id => getItemName(id, service) === item.serviceName);

        // Phòng ban
        const matchesDept = selectedDepartment.length === 0 ||
            selectedDepartment.includes(item.departmentId) ||
            selectedDepartment.some(id => getItemName(id, department) === item.dept);

        // Nhân viên
        const matchesStaff = selectedStaff.length === 0 ||
            selectedStaff.includes(item.staffId) ||
            selectedStaff.some(id => getItemName(id, staff) === item.assignee);

        // Khoảng thời gian
        let matchesDate = true;
        if (item.createdDate) {
            const itemDate = new Date(item.createdDate);
            if (fromDate) {
                matchesDate = matchesDate && itemDate >= new Date(fromDate);
            }
            if (toDate) {
                matchesDate = matchesDate && itemDate <= new Date(toDate);
            }
        }

        return matchesSearch && matchesStage && matchesService && matchesDept && matchesStaff && matchesDate;
    });

    const displayData = filteredData.slice(0, visibleCount);
    const remainingOpt = filteredData.length - visibleCount;
    const loadCount = remainingOpt > 10 ? 10 : remainingOpt;

    const handleCreate = () => {
        navigation.navigate('CreateOpportunityScreen');
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + loadCount);
    };

    const getSelectedTags = () => {
        const tags = [];

        selectedStage.forEach(id => {
            tags.push({
                id: `stage-${id}`,
                label: getItemName(id, stage),
                type: 'stage',
                value: id
            });
        });

        selectedService.forEach(id => {
            tags.push({
                id: `service-${id}`,
                label: getItemName(id, service),
                type: 'service',
                value: id
            });
        });

        selectedDepartment.forEach(id => {
            tags.push({
                id: `dept-${id}`,
                label: getItemName(id, department),
                type: 'department',
                value: id
            });
        });

        selectedStaff.forEach(id => {
            tags.push({
                id: `staff-${id}`,
                label: getItemName(id, staff),
                type: 'staff',
                value: id
            });
        });

        return tags;
    };

    const activeTags = getSelectedTags();
    const activeFilterCount = selectedStage.length + selectedService.length + selectedDepartment.length + selectedStaff.length;

    const handleRemoveSingleTag = (removeTag) => {
        if (removeTag.type === 'stage') {
            setSelectedStage(prev => prev.filter(id => id !== removeTag.value));
        } else if (removeTag.type === 'service') {
            setSelectedService(prev => prev.filter(id => id !== removeTag.value));
        } else if (removeTag.type === 'department') {
            setSelectedDepartment(prev => prev.filter(id => id !== removeTag.value));
        } else if (removeTag.type === 'staff') {
            setSelectedStaff(prev => prev.filter(id => id !== removeTag.value));
        }
    };

    const handleClearAllTags = () => {
        setSelectedStage([]);
        setSelectedService([]);
        setSelectedDepartment([]);
        setSelectedStaff([]);
    };

    useEffect(() => {
        navigation.setOptions({
            handleReload: () => {
                setSearchText('');
                setVisibleCount(4);
            }
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            {/* Search & Filter Section */}
            <View style={styles.searchSection}>
                <View style={styles.searchBox}>
                    <IcSearch width={18} height={18} color={colors.gray400} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm theo tên, mã cơ hội kinh doanh,..."
                        placeholderTextColor={colors.gray400}
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    {searchText.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchText('')} style={styles.clearBtn}>
                            <Text style={styles.clearBtnText}>✕</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <TouchableOpacity
                    onPress={() => setIsFilterOpen(true)}
                    style={[styles.btnFilter, activeFilterCount > 0 && styles.btnFilterActive]}
                    activeOpacity={0.7}
                >
                    <IcFilter width={18} height={18} color={activeFilterCount > 0 ? colors.primary : colors.gray700} />
                    {activeFilterCount > 0 && (
                        <View style={styles.filterBadge}>
                            <Text style={styles.filterBadgeText}>{activeFilterCount}</Text>
                        </View>
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAdd} onPress={handleCreate} activeOpacity={0.8}>
                    <IcPlus width={20} height={20} color={colors.white} style={{ translate: 0.9 }} />
                </TouchableOpacity>
            </View>

            <FilterModal
                visible={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                initialStage={selectedStage}
                initialService={selectedService}
                initialDepartment={selectedDepartment}
                initialStaff={selectedStaff}
                initialFromDate={fromDate}
                initialToDate={toDate}
                onApply={(filters) => {
                    if (filters) {
                        setSelectedStage(filters.stage || []);
                        setSelectedService(filters.service || []);
                        setSelectedDepartment(filters.department || []);
                        setSelectedStaff(filters.staff || []);
                        setFromDate(filters.fromDate || '');
                        setToDate(filters.toDate || '');
                    }
                }}
            />

            {/* Filter Tags Bar */}
            <View style={styles.tagRow}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 8, flexDirection: 'row', alignItems: 'center' }}
                    style={{ flex: 1 }}
                >
                    {activeTags.length === 0 ? (
                        <View style={styles.activeTag}>
                            <Text style={styles.tagText}>Tất cả ({filteredData.length})</Text>
                        </View>
                    ) : (
                        activeTags.map((tag) => (
                            <View key={tag.id} style={styles.activeTag}>
                                <Text style={styles.tagText}>{tag.label}</Text>
                                <TouchableOpacity
                                    onPress={() => handleRemoveSingleTag(tag)}
                                    style={styles.btnRemoveTag}
                                >
                                    <Text style={styles.xText}>✕</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
                </ScrollView>

                <TouchableOpacity
                    onPress={handleClearAllTags}
                    disabled={activeTags.length === 0}
                    style={{ opacity: activeTags.length > 0 ? 1 : 0.4 }}
                >
                    <Text style={styles.btnClear}>Xoá hết</Text>
                </TouchableOpacity>
            </View>

            {/* Total Count & Sort Control */}
            <View style={styles.subHeaderRow}>
                <Text style={styles.countText}>
                    Tổng cộng: <Text style={styles.countHighlight}>{filteredData.length.toLocaleString('vi-VN')}</Text> cơ hội
                </Text>
                <TouchableOpacity style={styles.btnSort} activeOpacity={0.7}>
                    <IcSort width={14} height={14} color={colors.primary} />
                    <Text style={styles.sortText}>Mới nhất</Text>
                </TouchableOpacity>
            </View>

            {/* Opportunity List */}
            <FlatList
                style={{ flex: 1 }}
                data={displayData}
                keyExtractor={(item, index) => item?.id ? String(item.id) : index.toString()}
                renderItem={({ item }) => (
                    <OpportunityCard
                        item={item}
                        type="opportunity"
                        onButtonPress={() => {
                            navigation.navigate('AddMemberScreen', {
                                opportunityId: item.id
                            });
                        }}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <IcSearch width={48} height={48} color={colors.gray300} />
                        <Text style={styles.emptyText}>Không tìm thấy cơ hội kinh doanh nào</Text>
                        <Text style={styles.emptySubText}>Vui lòng thử tìm kiếm bằng từ khóa hoặc bộ lọc khác</Text>
                    </View>
                )}
                ListFooterComponent={() => {
                    if (visibleCount < filteredData.length) {
                        return (
                            <TouchableOpacity
                                style={styles.btnLoadMore}
                                onPress={handleLoadMore}
                                activeOpacity={0.7}
                            >
                                <IcPlus width={18} height={18} color={colors.primary} style={{ translate: 0.9 }} />
                                <Text style={styles.loadMoreText}>Tải thêm {loadCount} cơ hội</Text>
                            </TouchableOpacity>
                        );
                    }
                    return null;
                }}
            />
        </SafeAreaView>
    );
};

export default OpportunityScreen;