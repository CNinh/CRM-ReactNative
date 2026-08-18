import { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    FlatList,
    StyleSheet
} from 'react-native';
import IcArrowD from '../../assets/icons/arrow_down.svg';

const DropDownList = ({
    placeholder = 'Chọn...',
    data = [],
    selectedItem,
    onSelect,
    showAllOption = false,
    allOptionLabel = '-- Tất cả --',
    fontSize = 13,
    fontWeight = 400,
    customMaxHeight = 180,
    dropDownHeight = 32,
    containerStyle,
}) => {
    const triggerRef = useRef(null);
    const [dropdownTarget, setDropdownTarget] = useState(null);

    const handleOpenDropdown = () => {
        if (triggerRef.current) {
            triggerRef.current.measureInWindow((x, y, width, height) => {
                setDropdownTarget({
                    data,
                    maxHeight: customMaxHeight,
                    layout: { x, y, width, height }
                });
            });
        }
    };

    const handleSelectOption = (item) => {
        onSelect(item);
        setDropdownTarget(null);
    };

    const displayValue = selectedItem
        ? (selectedItem.name || selectedItem.title || selectedItem.label || selectedItem)
        : placeholder;

    const listData = showAllOption
        ? [{ id: 'all_option_id', name: allOptionLabel }, ...data]
        : data;

    return (
        <View style={[styles.fieldContainer, containerStyle]}>
            <TouchableOpacity
                ref={triggerRef}
                style={[styles.dropdownBox, { height: dropDownHeight }]}
                onPress={handleOpenDropdown}
                activeOpacity={0.7}
            >
                <Text style={[
                    styles.dropdownText,
                    !selectedItem && styles.placeholderText,
                    { fontSize: fontSize, fontWeight: fontWeight }
                ]}
                    numberOfLines={1}
                >
                    {displayValue}
                </Text>
                <IcArrowD width={16} height={16} color="#7E8387" />
            </TouchableOpacity>

            {dropdownTarget && (
                <Modal
                    visible
                    transparent
                    animationType="none"
                    onRequestClose={() => setDropdownTarget(null)}
                >
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
                            data={listData}
                            keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                            keyboardShouldPersistTaps="handled"
                            nestedScrollEnabled={true}
                            renderItem={({ item }) => {
                                const isAll = item.id === 'all_option_id';
                                const itemLabel = isAll ? allOptionLabel : (item.title || item.name || item.label || item);

                                return (
                                    <TouchableOpacity
                                        style={styles.dropdownListItem}
                                        onPress={() => handleSelectOption(isAll ? null : item)}
                                    >
                                        <Text style={styles.dropdownItemText}>{itemLabel}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    fieldContainer: {
        width: '100%',
    },

    dropdownBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 6,
        paddingHorizontal: 10,
        height: 36,
        backgroundColor: '#FFFFFF'
    },

    dropdownText: {
        fontSize: 13,
        color: '#000000',
        flex: 1,
        marginRight: 6
    },

    placeholderText: {
        color: '#7E8387'
    },

    modalOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent'
    },

    dropdownListModal: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 6,
        elevation: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        zIndex: 9999
    },

    dropdownListItem: {
        paddingVertical: 9,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0'
    },

    dropdownItemText: {
        fontSize: 13,
        color: '#000000'
    }
});

export default DropDownList;