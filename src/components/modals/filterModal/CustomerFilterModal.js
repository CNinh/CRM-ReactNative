import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
    Dimensions
} from 'react-native';

import IcCheckboxBlank from '../../../assets/icons/check-box-outline-blank.svg';
import IcCheckbox from '../../../assets/icons/check-box.svg';
import IcFilter from '../../../assets/icons/filter.svg';
import IcClose from '../../../assets/icons/close.svg';
import IcSearch from '../../../assets/icons/search.svg';

import { category, state } from '../../../data/mockData';

const SCREEN_HEIGHT = Dimensions.get('window').height;

// Component CheckBox
const CheckBox = ({ selected, onPress }) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress} activeOpacity={0.8}>
        {selected ? (
            <IcCheckbox width={15} height={15} color="#1A7FC1" />
        ) : (
            <IcCheckboxBlank width={15} height={15} color="#7E8387" />
        )}
    </TouchableOpacity>
);

const CustomerFilterModal = ({
    visible,
    onClose,
    initialCategory = [],
    initialState = [],
    onApply
}) => {
    const [searchTypeKey, setSearchTypeKey] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedState, setSelectedState] = useState(initialState);

    // khởi tạo vị trí cho animation khi mở
    const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
    const backdropOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            setSelectedCategory(initialCategory || []);
            setSelectedState(initialState || []);
            setSearchTypeKey('');

            // set vị trí mở
            translateY.setValue(SCREEN_HEIGHT);

            // Animation mở
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }),
                Animated.timing(backdropOpacity, {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true
                })
            ]).start();
        }
    }, [visible, initialCategory, initialState]);

    // Animation đóng
    const handleClose = () => {
        Animated.parallel([
            Animated.timing(translateY, {
                toValue: SCREEN_HEIGHT,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(backdropOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            })
        ]).start(() => {
            if (onClose) onClose();
        });
    };

    const toggleCategory = (id) => {
        setSelectedCategory(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const toggleState = (id) => {
        setSelectedState(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleClearAll = () => {
        setSelectedCategory([]);
        setSelectedState([]);
    };

    const handleApply = () => {
        if (onApply) {
            onApply({
                selectedCategory,
                selectedState
            });
        }

        Animated.parallel([
            Animated.timing(translateY, {
                toValue: SCREEN_HEIGHT,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(backdropOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            })
        ]).start(() => {
            if (onClose) onClose();
        });
    };

    const getItemLabel = (item) => item?.title || item?.name || item?.label || '';

    const filteredCustomerTypes = (category || []).filter(type =>
        getItemLabel(type).toLowerCase().includes(searchTypeKey.toLowerCase())
    );

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="none"
            onRequestClose={handleClose}
        >
            <View style={styles.overlayContainer}>
                <TouchableWithoutFeedback onPress={handleClose}>
                    <Animated.View style={[styles.backdrop, { opacity: backdropOpacity }]} />
                </TouchableWithoutFeedback>

                <Animated.View
                    style={[
                        styles.modalContent,
                        { transform: [{ translateY }] }
                    ]}
                >
                    <View style={styles.header}>
                        <View style={styles.titleRow}>
                            <IcFilter width={20} height={20} color="#1A7FC1" />
                            <Text style={styles.headerTitle}>Bộ lọc</Text>
                        </View>
                        <TouchableOpacity
                            onPress={handleClose}
                            activeOpacity={0.6}
                            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                        >
                            <IcClose width={20} height={20} color="#000000" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.body}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>
                                Loại khách hàng{' '}
                                {selectedCategory.length > 0 && (
                                    <Text style={styles.countText}>({selectedCategory.length} Đã chọn)</Text>
                                )}
                            </Text>
                        </View>

                        <View style={styles.searchBox}>
                            <IcSearch width={22} height={22} color="#D3D5D7" />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Tìm loại khách hàng"
                                placeholderTextColor="#5a5a5a8c"
                                value={searchTypeKey}
                                onChangeText={setSearchTypeKey}
                            />
                        </View>

                        <View style={styles.scrollListWrapper}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                nestedScrollEnabled={true}
                            >
                                <View style={styles.checkboxList}>
                                    {filteredCustomerTypes.map((item) => {
                                        const isChecked = selectedCategory.includes(item.id);
                                        return (
                                            <TouchableOpacity
                                                key={item.id}
                                                style={styles.checkboxRow}
                                                activeOpacity={0.7}
                                                onPress={() => toggleCategory(item.id)}
                                            >
                                                <CheckBox
                                                    selected={isChecked}
                                                    onPress={() => toggleCategory(item.id)}
                                                />
                                                <Text style={styles.checkboxLabel}>{getItemLabel(item)}</Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.sectionState}>
                            <View style={[styles.sectionHeader, { marginTop: 12 }]}>
                                <Text style={styles.sectionTitle}>Trạng thái</Text>
                            </View>

                            <View style={styles.chipContainer}>
                                {(state || []).map((st) => {
                                    const isSelected = selectedState.includes(st.id);
                                    return (
                                        <TouchableOpacity
                                            key={st.id}
                                            style={[styles.chip, isSelected && styles.chipSelected]}
                                            onPress={() => toggleState(st.id)}
                                            activeOpacity={0.8}
                                        >
                                            <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                                                {getItemLabel(st)}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </View>

                    {/* FOOTER - Cố định */}
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.btnClear} onPress={handleClearAll} activeOpacity={0.8}>
                            <Text style={styles.btnClearText}>Bỏ chọn hết</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnApply} onPress={handleApply} activeOpacity={0.8}>
                            <Text style={styles.btnApplyText}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlayContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },

    modalContent: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: '70%',
        paddingBottom: 16
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000'
    },

    body: {
        flex: 1,
        paddingTop: 12
    },

    sectionHeader: {
        marginBottom: 8,
        marginHorizontal: 24
    },

    sectionTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000'
    },

    countText: {
        color: '#1A7FC1',
        fontWeight: '500'
    },

    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 8,
        paddingHorizontal: 8,
        marginHorizontal: 16,
        height: 38
    },

    searchInput: {
        flex: 1,
        marginLeft: 6,
        fontSize: 13,
        color: '#000000',
        paddingVertical: 0
    },

    scrollListWrapper: {
        flex: 1,
        maxHeight: 260,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBlockColor: "#D3D5D7"
    },

    checkboxList: {
        paddingRight: 4,
    },

    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    checkboxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12
    },

    checkboxLabel: {
        fontSize: 12.5,
        color: '#000000',
    },

    sectionState: {
        marginBottom: 10
    },

    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 4,
        marginHorizontal: 24,
    },

    chip: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D3D5D7'
    },

    chipSelected: {
        backgroundColor: '#E6F3FA',
        borderColor: '#185FA5'
    },

    chipText: {
        fontSize: 12.5,
        color: '#000000'
    },

    chipTextSelected: {
        color: '#185FA5',
        fontWeight: '500'
    },

    footer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 12,
        gap: 12,
        borderTopWidth: 1,
        borderTopColor: '#D3D5D7'
    },

    btnClear: {
        flex: 1,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#F5F4ED',
        borderWidth: 1,
        borderColor: '#D3D5D7',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnClearText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000'
    },

    btnApply: {
        flex: 1,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#1A7FC1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnApplyText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF'
    }
});

export default CustomerFilterModal;