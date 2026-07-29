import { useState, useLayoutEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Platform,
    Modal,
    FlatList
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './FormAnniversaryScreen.style';

import IcSave from '../../assets/icons/save.svg';
import IcArrowD from '../../assets/icons/arrow_down.svg';

import { anniversaryType } from '../../data/mockData';

const FormAnniversaryScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { customerInfo, anniversaryData, onSave } = route.params || {};

    const isEdit = !!anniversaryData;

    const [isPickerOpen, setIsPickerOpen] = useState(false);

    const [type, setType] = useState(
        anniversaryData?.title || anniversaryType[0]?.name || 'Sinh nhật'
    );

    const [date, setDate] = useState(anniversaryData?.date || '');
    const [calendarType, setCalendarType] = useState(anniversaryData?.calendarType || 'Dương lịch');
    const [note, setNote] = useState(anniversaryData?.note || '');

    const [dropdownTarget, setDropdownTarget] = useState(null);

    const handleOpenDropdown = (event, field, data, customMaxHeight = 180) => {
        event.currentTarget.measureInWindow((x, y, width, height) => {
            setDropdownTarget({
                field,
                data,
                maxHeight: customMaxHeight,
                layout: { x, y, width, height }
            });
        });
    };

    const handleSelectOption = (field, item) => {
        const selectedValue = item.title || item.name || item.label || item;
        setType(selectedValue);
        setDropdownTarget(null);
    };

    const handleSave = () => {
        let iconType = 'company';
        if (type === 'Sinh nhật') {
            iconType = 'birthday';
        } else if (type === 'Ngày ký hợp đồng') {
            iconType = 'contract';
        }

        const formData = {
            id: anniversaryData?.id || Date.now().toString(),
            title: type,
            date: date || '01/01/2025',
            calendarType: calendarType || 'Dương lịch',
            note,
            customerInfo,
            icon: iconType,
            hasReminder: anniversaryData?.hasReminder ?? true
        };

        if (onSave) {
            onSave(formData);
        }
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.cardForm}>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Khách hàng</Text>
                        <View style={styles.disabledInputBox}>
                            <Text style={styles.disabledText} numberOfLines={2}>
                                {customerInfo}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Loại kỷ niệm</Text>
                        <TouchableOpacity
                            style={styles.selectBox}
                            activeOpacity={0.7}
                            onPress={(e) => handleOpenDropdown(e, 'type', anniversaryType, 150)}
                        >
                            <Text style={styles.selectText}>{type}</Text>
                            <IcArrowD width={18} height={18} color="#000000" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Ngày kỷ niệm</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="dd/mm/yyyy"
                            placeholderTextColor="#9E9E9E"
                            value={date}
                            onChangeText={setDate}
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Loại lịch</Text>
                        <View style={styles.radioGroup}>
                            <TouchableOpacity
                                style={styles.radioButton}
                                onPress={() => setCalendarType('Dương lịch')}
                                activeOpacity={0.8}
                            >
                                <View style={[styles.radioOuter, calendarType === 'Dương lịch' && styles.radioOuterActive]}>
                                    {calendarType === 'Dương lịch' && <View style={styles.radioInner} />}
                                </View>
                                <Text style={styles.radioLabel}>Dương lịch</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.radioButton}
                                onPress={() => setCalendarType('Âm lịch')}
                                activeOpacity={0.8}
                            >
                                <View style={[styles.radioOuter, calendarType === 'Âm lịch' && styles.radioOuterActive]}>
                                    {calendarType === 'Âm lịch' && <View style={styles.radioInner} />}
                                </View>
                                <Text style={styles.radioLabel}>Âm lịch</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Ghi chú</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder=""
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical="top"
                            value={note}
                            onChangeText={setNote}
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.btnSave} onPress={handleSave} activeOpacity={0.8}>
                    <IcSave width={20} height={20} color="#FFFFFF" />
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
                            data={dropdownTarget.data}
                            keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                            keyboardShouldPersistTaps="handled"
                            nestedScrollEnabled={true}
                            renderItem={({ item }) => {
                                const label = item.title || item.name || item.label || item;
                                return (
                                    <TouchableOpacity
                                        style={styles.dropdownListItem}
                                        onPress={() => handleSelectOption(dropdownTarget.field, item)}
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
    );
};

export default FormAnniversaryScreen;