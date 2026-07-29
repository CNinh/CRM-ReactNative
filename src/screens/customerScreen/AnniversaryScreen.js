import { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./AnniversaryScreen.style";
import AnniversaryCard from '../../components/cards/AnniversaryCard';
import AnniversaryDetailModal from "../../components/modals/AnniversaryDetailModal";
import IcSearch from '../../assets/icons/search.svg';
import IcPlus from '../../assets/icons/plus.svg';

import { anniversary } from '../../data/mockData';

const AnniversaryScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const [searchText, setSearchText] = useState('');
    const [anniversaryList, setAnniversaryList] = useState(anniversary);

    const filteredList = anniversaryList.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.note.toLowerCase().includes(searchText.toLowerCase())
    );

    const { customer } = route.params || {};
    const displayCustomer = customer ? `${customer}` : '';
    const customerInfo = `${displayCustomer}`

    const handleCreateAnniversary = () => {
        navigation.navigate('FormAnniversaryScreen', {
            customerInfo: customerInfo,
            onSave: (newItem) => {
                setAnniversaryList(prev => [newItem, ...prev]);
            }
        });
    };

    const handleView = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const handleEdit = (item) => {
        navigation.navigate('FormAnniversaryScreen', {
            customerInfo: customerInfo,
            anniversaryData: item,
            onSave: (updatedItem) => {
                setAnniversaryList(prev =>
                    prev.map(anniversaryItem =>
                        anniversaryItem.id === updatedItem.id ? updatedItem : anniversaryItem
                    )
                )
            }
        });
    };

    const handleDelete = (id) => {
        Alert.alert('Xác nhận xóa', 'Bạn có chắc chắn muốn xóa ngày kỷ niệm này?', [
            { text: 'Hủy', style: 'cancel' },
            {
                text: 'Xóa',
                style: 'destructive',
                onPress: () => setAnniversaryList(prev => prev.filter(item => item.id !== id))
            }
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Search & Filter Section */}
            <View style={styles.searchSection}>
                <View style={styles.searchBox}>
                    <IcSearch width={20} height={20} color="#D3D5D7" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm theo tên, sđt, email..."
                        placeholderTextColor="#8d8e8e"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
                <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={handleCreateAnniversary}
                >
                    <IcPlus width={24} height={24} color="#ffffff" style={{ translate: 0.9 }} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={filteredList}
                keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                renderItem={({ item }) => (
                    <AnniversaryCard
                        item={item}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />

            <AnniversaryDetailModal
                visible={modalVisible}
                item={selectedItem}
                customerInfo={customerInfo}
                onClose={() => setModalVisible(false)}
            />
        </SafeAreaView>
    )
}

export default AnniversaryScreen;