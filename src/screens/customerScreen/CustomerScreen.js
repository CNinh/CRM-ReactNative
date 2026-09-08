import { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
    DeviceEventEmitter
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./CustomerScreen.style";
import CustomerFilterModal from "../../components/modals/filterModal/CustomerFilterModal";
import CustomerCard from "../../components/cards/CustomerCard";
import DeleteModal from "../../components/modals/DeleteModal";
import colors from "../../constants/colors";

import IcSearch from "../../assets/icons/search.svg";
import IcFilter from "../../assets/icons/filter.svg";
import IcPlus from "../../assets/icons/plus.svg";
import IcSort from "../../assets/icons/sort.svg";

import { mockCustomer, category, state } from "../../data/mockData";

const CustomerScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [searchText, setSearchText] = useState('');
    const [visibleCount, setVisibleCount] = useState(5);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [customerList, setCustomerList] = useState(mockCustomer);

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedState, setSelectedState] = useState([]);

    const [deleteModal, setDeleteModal] = useState({
        visible: false,
        item: null
    });

    const handleCreate = () => {
        navigation.navigate('FormCustomer');
    };

    const handleEdit = (customer) => {
        navigation.navigate('FormCustomer', {
            customerData: customer
        });
    };

    const handleOpenDelete = (customer) => {
        setDeleteModal({
            visible: true,
            item: customer
        });
    };

    const handleConfirmDelete = () => {
        if (deleteModal.item) {
            setCustomerList(prev => prev.filter(c => c.id !== deleteModal.item.id));
        }
        setDeleteModal({ visible: false, item: null });
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

    const filteredData = (customerList || []).filter(item => {
        const cleanSearch = removeAccents(searchText).toLowerCase().trim();
        const cleanName = removeAccents(item.name || '').toLowerCase();
        const cleanCode = removeAccents(item.code || '').toLowerCase();

        const matchesSearch = !cleanSearch || cleanName.includes(cleanSearch) || cleanCode.includes(cleanSearch);

        const matchesCategory = selectedCategory.length === 0 ||
            selectedCategory.includes(item.categoryId) ||
            selectedCategory.some(id => category.find(c => c.id === id)?.name === (item.category || item.toc));

        const matchesState = selectedState.length === 0 ||
            selectedState.includes(item.stateId) ||
            selectedState.some(id => state.find(s => s.id === id)?.name === item.state);

        return matchesSearch && matchesCategory && matchesState;
    });

    const displayData = filteredData.slice(0, visibleCount);
    const remainingCount = filteredData.length - visibleCount;
    const loadCount = remainingCount > 10 ? 10 : remainingCount;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + loadCount);
    };

    const getSelectedTags = () => {
        const tags = [];

        selectedCategory.forEach(id => {
            const found = category.find(c => c.id === id);
            if (found) {
                tags.push({
                    id: `category-${id}`,
                    label: found.name,
                    type: 'category',
                    value: id
                });
            }
        });

        selectedState.forEach(id => {
            const found = state.find(s => s.id === id);
            if (found) {
                tags.push({
                    id: `state-${id}`,
                    label: found.name,
                    type: 'state',
                    value: id
                });
            }
        });

        return tags;
    };

    const activeTags = getSelectedTags();
    const activeFilterCount = selectedCategory.length + selectedState.length;

    const handleRemoveSingleTag = (removeTag) => {
        if (removeTag.type === 'category') {
            setSelectedCategory(prev => prev.filter(id => id !== removeTag.value));
        } else if (removeTag.type === 'state') {
            setSelectedState(prev => prev.filter(id => id !== removeTag.value));
        }
    };

    const handleClearAllTags = () => {
        setSelectedCategory([]);
        setSelectedState([]);
    };

    useEffect(() => {
        navigation.setOptions({
            handleReload: () => {
                setSearchText('');
                setVisibleCount(5);
            }
        });

        const listener = DeviceEventEmitter.addListener('ON_SAVE_CUSTOMER', ({ saveData, isEdit }) => {
            setCustomerList(prev => {
                if (isEdit) {
                    return prev.map(item =>
                        (item.id === saveData.id || item.code === saveData.code) ? saveData : item
                    );
                } else {
                    return [saveData, ...prev];
                }
            });
        });

        return () => {
            listener.remove();
        };
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            {/* Search & Filter Top Bar */}
            <View style={styles.searchSection}>
                <View style={styles.searchBox}>
                    <IcSearch width={18} height={18} color={colors.gray400} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tên, Mã KH, SĐT, MST..."
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

                <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={handleCreate}
                    activeOpacity={0.8}
                >
                    <IcPlus width={20} height={20} color={colors.white} style={{ translate: 0.9 }} />
                </TouchableOpacity>
            </View>

            <CustomerFilterModal
                visible={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                initialCategory={selectedCategory}
                initialState={selectedState}
                onApply={(filters) => {
                    if (filters) {
                        setSelectedCategory(filters.selectedCategory || []);
                        setSelectedState(filters.selectedState || []);
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
                    Tổng cộng: <Text style={styles.countHighlight}>{filteredData.length.toLocaleString('vi-VN')}</Text> khách hàng
                </Text>
                <TouchableOpacity style={styles.btnSort} activeOpacity={0.7}>
                    <IcSort width={14} height={14} color={colors.primary} />
                    <Text style={styles.sortText}>Mới nhất</Text>
                </TouchableOpacity>
            </View>

            {/* Customer List */}
            <FlatList
                style={{ flex: 1 }}
                data={displayData}
                keyExtractor={(item, index) => item?.id ? String(item.id) : index.toString()}
                renderItem={({ item }) => (
                    <CustomerCard
                        item={item}
                        type="customer"
                        onEdit={() => handleEdit(item)}
                        onDelete={() => handleOpenDelete(item)}
                        onOpenAnniversary={() => {
                            navigation.navigate('AnniversaryScreen', {
                                customer: item?.name || ''
                            });
                        }}
                        onOpenOpportunity={() => {
                            const searchKeyword = `${item?.code || ''} - ${item?.name || ''}`;
                            navigation.navigate('Cơ hội', {
                                screen: 'Opportunity',
                                params: {
                                    searchKeyword: searchKeyword
                                }
                            });
                        }}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <IcSearch width={48} height={48} color={colors.gray300} />
                        <Text style={styles.emptyText}>Không tìm thấy khách hàng nào</Text>
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
                                <Text style={styles.loadMoreText}>Tải thêm {loadCount} khách hàng</Text>
                            </TouchableOpacity>
                        );
                    }
                    return null;
                }}
            />

            <DeleteModal
                isVisible={deleteModal.visible}
                onClose={() => setDeleteModal({ visible: false, item: null })}
                onConfirm={handleConfirmDelete}
                type="Khách hàng"
                title={deleteModal.item ? `${deleteModal.item.code} - ${deleteModal.item.name}` : ''}
            />
        </SafeAreaView>
    );
};

export default CustomerScreen;