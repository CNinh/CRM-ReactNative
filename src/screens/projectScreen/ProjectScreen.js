import { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
    StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./ProjectScreen.style";
import ProjectCard from "../../components/cards/ProjectCard";
import FilterModal from "../../components/modals/filterModal/FilterModal";
import IcSearch from "../../assets/icons/search.svg";
import IcFilter from "../../assets/icons/filter.svg";
import IcPlus from "../../assets/icons/plus.svg";
import IcSort from "../../assets/icons/sort.svg";

import { project, stage, service, department, staff } from "../../data/mockData";

const ProjectScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [visibleCount, setVisibleCount] = useState(4);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [selectedStage, setSelectedStage] = useState([]);
    const [selectedService, setSelectedService] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState([]);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    /* Filter */
    const getItemName = (id, dataArray) => {
        const found = dataArray?.find(item => item.id === id);
        return found ? (found.title || found.name || found.label) : id;
    }

    // Xoá dấu dùng cho search
    const removeAccents = (str) => {
        if (!str) return '';
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
    };

    const filteredData = (project || []).filter(item => {
        // search
        const cleanSearch = removeAccents(searchText).toLowerCase().trim();

        const cleanTitle = removeAccents(item.title || item.name || '').toLowerCase();
        const cleanCode = removeAccents(item.code || item.opportunityCode || item.projectCode || '').toLowerCase();

        const matchesSearch = !cleanSearch ||
            cleanTitle.includes(cleanSearch) ||
            cleanCode.includes(cleanSearch);
            
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
    const remainingPrj = filteredData.length - visibleCount;
    const loadCount = remainingPrj > 10 ? 10 : remainingPrj;

    const handleLoadMore = () => {
        const currentRemaining = filteredData.length - visibleCount;
        const currentLoad = currentRemaining > 10 ? 10 : currentRemaining;
        setVisibleCount(prev => prev + currentLoad);
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
    }

    useEffect(() => {
        navigation.setOptions({
            handleReload: () => {
                console.log("Đang tải danh sách dự án...");
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
                    <IcSearch width={20} height={20} color="#D3D5D7" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm theo tên, mã dự án,..."
                        placeholderTextColor="#8d8e8e"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => setIsFilterOpen(true)}
                    style={styles.btnFilter}
                >
                    <IcFilter width={20} height={20} color="#000000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAdd}>
                    <IcPlus width={24} height={24} color="#ffffff" style={{ translate: 0.9 }} />
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
                    setIsFilterOpen(false);
                }}
            />

            {/*Filter Tags */}
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

            {/* Count & Sort */}
            <View style={styles.subHeaderRow}>
                <Text style={styles.countText}>
                    <Text style={{ fontWeight: '700' }}>16,135</Text>
                    <Text> Khách hàng</Text>
                </Text>
                <TouchableOpacity style={styles.btnSort}>
                    <IcSort width={18} height={18} color="#1A7FC1" />
                    <Text style={styles.sortText}>Mới nhất</Text>
                </TouchableOpacity>
            </View>

            {/* Project List */}
            <FlatList
                style={{ flex: 1 }}
                data={displayData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ProjectCard item={item} type="project" />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 12 }}

                ListFooterComponent={() => {
                    if (visibleCount < filteredData.length) {
                        return (
                            <TouchableOpacity style={styles.btnLoadMore} onPress={handleLoadMore}>
                                <IcPlus width={26} height={26} color="#ffffff" style={{ translateY: 1.2 }} />
                                <Text style={styles.loadMoreText}>Tải thêm {loadCount} dự án</Text>
                            </TouchableOpacity>
                        );
                    }
                    return null;
                }}
            />
        </SafeAreaView>
    );
};

export default ProjectScreen;