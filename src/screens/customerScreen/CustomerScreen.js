import { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
    StyleSheet,
    Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./CustomerScreen.style";
import CustomerFilterModal from "../../components/modals/filterModal/CustomerFilterModal";
import CustomerCard from "../../components/cards/CustomerCard";
import IcSearch from "../../assets/icons/search.svg";
import IcFilter from "../../assets/icons/filter.svg";
import IcPlus from "../../assets/icons/plus.svg";
import IcSort from "../../assets/icons/sort.svg";
import { mockCustomer, category, state } from "../../data/mockData";

const CustomerScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [visibleCount, setVisibleCount] = useState(5);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [customerList, setCustomerList] = useState(mockCustomer);

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedState, setSelectedState] = useState([]);

    const handleCreate = () => {
        navigation.navigate('FormCustomer', {
            onSave: (newCustomer) => {
                setCustomerList(prev => [newCustomer, ...prev]);
            }
        });
    };

    const handleEdit = (customer) => {
        navigation.navigate('FormCustomer', {
            customerData: customer,
            onSave: (updatedCustomer) => {
                setCustomerList(prev =>
                    prev.map(item => (item.id === updatedCustomer.id || item.code === updatedCustomer.code) ? updatedCustomer : item)
                );
            }
        });
    };

    const handleDelete = (customer) => {
        Alert.alert('Xác nhận xóa', `Bạn có chắc chắn muốn xóa khách hàng "${customer.name || customer.title}"?`, [
            { text: 'Hủy', style: 'cancel' },
            {
                text: 'Xóa',
                style: 'destructive',
                onPress: () => setCustomerList(prev => prev.filter(c => c.code !== customer.code))
            }
        ]);
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
    const remainingPrj = filteredData.length - visibleCount;
    const loadCount = remainingPrj > 10 ? 10 : remainingPrj;

    const handleLoadMore = () => {
        const currentRemaining = filteredData.length - visibleCount;
        const currentLoad = currentRemaining > 10 ? 10 : currentRemaining;
        setVisibleCount(prev => prev + currentLoad);
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
    }

    useEffect(() => {
        navigation.setOptions({
            handleReload: () => {
                console.log("Đang tải danh sách khách hàng...");
                setSearchText('');
                setVisibleCount(5);
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
                        placeholder="Tên, Mã KH, SĐT, MST..."
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
                <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={handleCreate}
                >
                    <IcPlus width={24} height={24} color="#ffffff" style={{ translate: 0.9 }} />
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

            {/* Customer List */}
            <FlatList
                style={{ flex: 1 }}
                data={displayData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <CustomerCard
                        item={item}
                        type="customer"
                        onEdit={() => handleEdit(item)}
                        onDelete={() => handleDelete(item)}
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
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 12, marginTop: 12 }}

                ListFooterComponent={() => {
                    if (visibleCount < filteredData.length) {
                        return (
                            <TouchableOpacity style={styles.btnLoadMore} onPress={handleLoadMore}>
                                <IcPlus width={26} height={26} color="#ffffff" style={{ translateY: 1.2 }} />
                                <Text style={styles.loadMoreText}>Tải thêm {loadCount} khách hàng</Text>
                            </TouchableOpacity>
                        );
                    }
                    return null;
                }}
            />
        </SafeAreaView>
    )
}

export default CustomerScreen;