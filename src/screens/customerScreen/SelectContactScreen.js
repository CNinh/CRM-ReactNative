import { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import IcSearch from '../../assets/icons/search.svg';
import IcPlus from '../../assets/icons/plus.svg';
import IcSort from '../../assets/icons/sort.svg';
import ContactCard from "../../components/cards/ContactCard";
import styles from "./SelectContactScreen.style";

import { addContact } from "../../data/mockData";

const SelectContactScreen = ({ navigation, route }) => {
    const { onSelectContact, selectedId = [] } = route.params || {};

    const [contact, setContact] = useState(addContact);
    const [searchText, setSearchText] = useState('');

    const filteredContact = contact.filter(item => 
        item.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.phone?.includes(searchText) ||
        item.mobile?.includes(searchText)
    );

    const handleCreateContact = () => {
        navigation.navigate('FormContactScreen', {
            onSave: (newContact) => {
                setContact(prev => [newContact, ...prev]);
            }
        });
    };

    const handleSelectContact = (selectedItem) => {
        if (onSelectContact) {
            onSelectContact(selectedItem);
        }
        setContact(prev => prev.filter(item => item.id !== selectedItem.id));
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
                    onPress={handleCreateContact}
                >
                    <IcPlus width={24} height={24} color="#ffffff" style={{ translate: 0.9 }} />
                </TouchableOpacity>
            </View>

            {/* Count & Sort */}
            <View style={styles.subHeaderRow}>
                <Text style={styles.countText}>
                    <Text style={{ fontWeight: '700' }}>{contact.length}</Text> Người liên hệ
                </Text>
                <TouchableOpacity style={styles.btnSort}>
                    <IcSort width={18} height={18} color="#1A7FC1" />
                    <Text style={styles.sortText}>Mới nhất</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.scrollBody}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.contactListContainer}>
                    {contact.map((item) => (
                        <ContactCard
                            key={item.id}
                            item={item}
                            mode="select"
                            isSelected={selectedId.includes(item.id)}
                            onSelect={() => handleSelectContact(item)}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SelectContactScreen;