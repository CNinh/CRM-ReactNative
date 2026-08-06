import { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Modal,
    FlatList,
    DeviceEventEmitter
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./AddMemberScreen.style";
import Icon from "react-native-vector-icons/MaterialIcons";
import IcAdd from '../../assets/icons/add.svg';
import IcRole from '../../assets/icons/verify.svg';
import IcSearch from '../../assets/icons/search.svg';

import { member, division, role } from "../../data/mockData";

const CheckBox = ({ selected, onPress }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {selected ? (
            <Icon name="check-box" size={26} color="#1A7FC1" />
        ) : (
            <Icon name="check-box-outline-blank" size={26} color="#7E8387" />
        )}
    </TouchableOpacity>
);

const AddMemberScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { opportunityId, onSaveMembers } = route.params || {};

    const [searchText, setSearchText] = useState('');
    const [selectedMember, setSelectedMember] = useState([]);
    const [selectedRole, setSelectedRole] = useState([]);

    const [selectedDivision, setSelectedDivision] = useState(null);
    const [dropdownTarget, setDropdownTarget] = useState(null);

    const handleOpenDropdown = (event, data, customMaxHeight = 180) => {
        event.currentTarget.measureInWindow((x, y, width, height) => {
            setDropdownTarget({
                data,
                maxHeight: customMaxHeight,
                layout: { x, y, width, height }
            });
        });
    };

    const handleSelectOption = (item) => {
        setSelectedDivision(item);
        setDropdownTarget(null);
    };

    const toggleSelectMember = (id) => {
        setSelectedMember(prev =>
            prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
        );
    };

    const toggleSelectRole = (id) => {
        setSelectedRole(prev =>
            prev.includes(id) ? prev.filter(rId => rId !== id) : [...prev, id]
        );
    };

    const handleSave = () => {
        const memberObject = member.filter(m => selectedMember.includes(m.id));
        const roleObject = role.filter(r => selectedRole.includes(r.id));

        const payload = {
            opportunityId,
            members: memberObject,
            roles: roleObject
        };
        DeviceEventEmitter.emit('ADD_MEMBER_SUCCESS', payload);
        navigation.goBack();
    };

    const filteredMembers = (member || []).filter(m => {
        const matchSearch = m.name.toLowerCase().includes(searchText.toLowerCase());

        const divisionName = selectedDivision?.name || selectedDivision?.title;
        const matchDivision = !selectedDivision || m.team === divisionName || m.divisionId === selectedDivision?.id;

        return matchSearch && matchDivision;
    });

    const divisionText = selectedDivision
        ? (selectedDivision.name || selectedDivision.title)
        : '';

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardTitleRow}>
                            <IcAdd width={30} height={28} color="#1A7FC1" />
                            <Text style={styles.cardTitle}>Chọn thành viên</Text>
                        </View>
                        <View style={styles.badgeCount}>
                            <Text style={styles.badgeText}>{selectedMember.length} đã chọn</Text>
                        </View>
                    </View>

                    <View style={styles.searchBox}>
                        <IcSearch width={23} height={23} color="#D3D5D7" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Tên thành viên"
                            placeholderTextColor="#00000095"
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.dropdownBox}
                        onPress={(e) => handleOpenDropdown(e, division, 180)}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.dropdownText}>{selectedDivision ? selectedDivision.name : "Chọn đơn vị"}</Text>
                        <Icon name="keyboard-arrow-down" size={22} color="#666666" />
                    </TouchableOpacity>

                    <ScrollView style={styles.memberScrollList} showsVerticalScrollIndicator={false}>
                        {filteredMembers.map((item) => {
                            const isSelected = selectedMember.includes(item.id);
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.memberRow}
                                    activeOpacity={0.7}
                                    onPress={() => toggleSelectMember(item.id)}
                                >
                                    <CheckBox
                                        selected={isSelected}
                                        onPress={() => toggleSelectMember(item.id)}
                                    />
                                    <View style={styles.memberInfo}>
                                        <Text style={styles.memberName}>{item.name}</Text>
                                        <Text style={styles.memberTeam}>{item.team}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>

                <View style={styles.cardRole}>
                    <View style={styles.roleHeaderRow}>
                        <IcRole width={20} height={20} color="#185FA5" />
                        <Text style={styles.cardTitle}>Vai trò</Text>
                    </View>

                    <View style={styles.chipContainer}>
                        {(role || []).map((item) => {
                            const isSelected = selectedRole.includes(item.id);
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[styles.chip, isSelected && styles.chipSelected]}
                                    onPress={() => toggleSelectRole(item.id)}
                                    activeOpacity={0.8}
                                >
                                    <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnSave} onPress={handleSave} activeOpacity={0.8}>
                    <Icon name="save" size={20} color="#FFFFFF" style={{ marginRight: 6 }} />
                    <Text style={styles.btnSaveText}>Lưu</Text>
                </TouchableOpacity>
            </View>

            {dropdownTarget && (
                <Modal visible transparent animationType="none" onRequestClose={() => setDropdownTarget(null)}>
                    <TouchableOpacity
                        style={styles.modalOverlay}
                        activeOpacity={1}
                        onPress={() => setDropdownTarget(null)}
                    />

                    <View
                        style={[
                            styles.dropdownListModal,
                            {
                                top: dropdownTarget.layout.y + dropdownTarget.layout.height + 4,
                                left: dropdownTarget.layout.x,
                                width: dropdownTarget.layout.width,
                                maxHeight: dropdownTarget.maxHeight
                            }
                        ]}
                    >
                        <FlatList
                            data={[{ id: 'all', name: 'Tất cả đơn vị' }, ...dropdownTarget.data]}
                            keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                            keyboardShouldPersistTaps="handled"
                            nestedScrollEnabled={true}
                            renderItem={({ item }) => {
                                const label = item.id === 'all' ? '-- Tất cả đơn vị --' : (item.title || item.name || item.label);
                                return (
                                    <TouchableOpacity
                                        style={styles.dropdownListItem}
                                        onPress={() => handleSelectOption(item.id === 'all' ? null : item)}
                                    >
                                        <Text style={styles.dropdownItemText}>{label}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    )
}

export default AddMemberScreen;