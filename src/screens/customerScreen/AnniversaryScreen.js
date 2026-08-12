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
import DeleteModal from "../../components/modals/DeleteModal";

import IcSearch from '../../assets/icons/search.svg';
import IcPlus from '../../assets/icons/plus.svg';

import { anniversary } from '../../data/mockData';

const AnniversaryScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteModal, setDeleteModal] = useState({
        visible: false,
        item: null
    });

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

    const handleOpenDelete = (anniversary) => {
        setDeleteModal({
            visible: true,
            item: anniversary
        });
    };

    const handleConfirmDelete = () => {
        if (deleteModal.item) {
            setAnniversaryList(prev => prev.filter(a => a.id !== deleteModal.item.id));
        }
        setDeleteModal({ visible: false, item: null });
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
                        onDelete={() => handleOpenDelete(item)}
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

            <DeleteModal
                isVisible={deleteModal.visible}
                onClose={() => setDeleteModal({ visible: false, item: null })}
                onConfirm={handleConfirmDelete}
                type="Ngày kỷ niệm"
                title={deleteModal.item ? `${deleteModal.item.title}` : ''}
            />
        </SafeAreaView>
    )
}

export default AnniversaryScreen;