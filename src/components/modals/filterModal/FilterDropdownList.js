import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView
} from "react-native";
import { useState } from "react";
import IcArrowR from '../../../assets/icons/arrow_right.svg';
import IcArrowD from '../../../assets/icons/arrow_down.svg';
import IcSearch from '../../../assets/icons/search.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckBox = ({ selected, onPress }) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress} activeOpacity={0.8}>
        {selected ? (
            <Icon name="check-box" size={20} color="#1A7FC1" />
        ) : (
            <Icon name="check-box-outline-blank" size={20} color="#5e5e5e" />
        )}
    </TouchableOpacity>
);

const FilterDropdownList = ({
    title,
    placeholder,
    data,
    selectedId = [],
    onSelect,
    type = 'checkbox' // 3 type: 'tag', 'tree', 'checkbox'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    );

    // Tag list UI
    const renderTagLayout = () => (
        <View style={styles.tagContainer}>
            {data.map((item) => {
                const isSelected = selectedId.includes(item.id);
                return (
                    <TouchableOpacity
                        key={item.id}
                        style={[styles.tagItem, isSelected && styles.tagItemSelected]}
                        onPress={() => onSelect(item.id)}
                        activeOpacity={0.7}
                    >
                        <Text style={[styles.tagText, isSelected && styles.tagTextSelected]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );

    // Tag tree UI
    const renderTreeLayout = () => (
        <View style={styles.dropdownContent}>
            <View style={styles.searchBox}>
                <IcSearch width={20} height={20} color="#D3D5D7" />
                <TextInput
                    style={styles.searchInput}
                    placeholder={placeholder}
                    placeholderTextColor="#00000090"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>

            <View style={styles.listWrapper}>
                <ScrollView nestedScrollEnabled={true} style={styles.scrollViewList}>
                    {filteredData.map((item, index) => {
                        const isSelected = selectedId.includes(item.id);
                        const isChild = item.isChild;

                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={[
                                    styles.listItem,
                                    isChild && styles.listChildItem,
                                    index === filteredData.length - 1 && { borderBottomWidth: 0 }
                                ]}
                                onPress={() => onSelect(item.id)}
                                activeOpacity={0.7}
                            >
                                <CheckBox selected={isSelected} onPress={() => onSelect(item.id)} />
                                <Text style={styles.itemText} numberOfLines={2}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );

    // Checkbox list UI
    const renderCheckboxLayout = () => (
        <View style={styles.dropdownContent}>
            <View style={styles.searchBox}>
                <IcSearch width={20} height={20} color="#D3D5D7" />
                <TextInput
                    style={styles.searchInput}
                    placeholder={placeholder}
                    placeholderTextColor="#00000090"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
            <View style={styles.listWrapper}>
                <ScrollView nestedScrollEnabled={true} style={styles.scrollViewList}>
                    {filteredData.map((item, index) => {
                        const isSelected = selectedId.includes(item.id);
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={[
                                    styles.listItem,
                                    index === filteredData.length - 1 && { borderBottomWidth: 0 }
                                ]}
                                onPress={() => onSelect(item.id)}
                                activeOpacity={0.7}
                            >
                                <CheckBox selected={isSelected} onPress={() => onSelect(item.id)} />
                                <Text style={styles.itemText} numberOfLines={2}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );

    return (
        <View style={[
            styles.container,
            isOpen && { borderBottomWidth: 1, borderBlockColor:'#D3D5D7' }
        ]}>
            <TouchableOpacity
                style={styles.headerRow}
                onPress={() => setIsOpen(!isOpen)}
                activeOpacity={0.7}
            >
                <View style={styles.headerIcon}>
                    {isOpen ? (
                        <IcArrowD width={16} height={16} color="#000000" />
                    ) : (
                        <IcArrowR width={16} height={16} color="#000000" />
                    )}
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </TouchableOpacity>

            {isOpen && (
                type === 'tag' ? renderTagLayout() :
                    type === 'tree' ? renderTreeLayout() :
                        renderCheckboxLayout()
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        marginBottom: 6,
        paddingHorizontal: 24,
    },

    headerIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10
    },

    headerText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000000',
    },

    dropdownContent: {
        paddingHorizontal: 24
    },

    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 8,
        paddingHorizontal: 6,
        height: 38,
        backgroundColor: '#fff',
        marginBottom: 6,
        gap: 8
    },

    searchInput: {
        flex: 1,
        fontSize: 13,
        paddingVertical: 0
    },

    scrollViewList: {
        maxHeight: 220
    },

    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7',
        gap: 8
    },

    itemText: {
        flex: 1,
        fontSize: 11.5,
        color: '#000000',
        lineHeight: 18
    },

    // Style item con của list tree
    listChildItem: {
        paddingLeft: 36
    },

    // Style nút tag của Giai đoạn
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 14,
        paddingBottom: 16,
        gap: 5
    },

    tagItem: {
        paddingHorizontal: 9,
        paddingVertical: 6,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#D3D5D7'
    },

    tagText: {
        fontSize: 11,
        fontWeight: '500',
        color: '#000000'
    },

    tagItemSelected: {
        borderColor: '#2971BF',
        backgroundColor: '#EBF3FC'
    },

    tagTextSelected: {
        color: '#2971BF',
        fontWeight: '500'
    },
});

export default FilterDropdownList;