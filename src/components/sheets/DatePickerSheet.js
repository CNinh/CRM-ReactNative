import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import { useState, useEffect } from 'react';
import { Portal } from 'react-native-paper';

const DatePickerSheet = ({ visible, onClose, currentDateStr, onConfirm, title }) => {
    const [tempDay, setTempDay] = useState(1);
    const [tempMonth, setTempMonth] = useState(1);
    const [tempYear, setTempYear] = useState(2026);

    useEffect(() => {
        if (visible && currentDateStr) {
            const parts = currentDateStr.split('/');
            if (parts.length === 3) {
                setTempDay(parseInt(parts[0], 10));
                setTempMonth(parseInt(parts[1], 10));
                setTempYear(parseInt(parts[2], 10));
            }
        }
    }, [visible, currentDateStr]);

    const getsDayInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    const handleConfirm = () => {
        const formattedDate = `${String(tempDay).padStart(2, '0')}/${String(tempMonth).padStart(2, '0')}/${String(tempYear)}`;
        onConfirm(formattedDate);
    };

    return (
        <Portal>
            <Modal
                visible={visible}
                transparent={true}
                animationType='slide'
                onRequestClose={onClose}
            >
                <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={onClose}>
                    <View style={styles.bottomContainer} onStartShouldSetResponder={() => true}>
                        <Text style={styles.sheetTitle}>{title || 'Chọn ngày'}</Text>

                        <View style={styles.pickerRow}>
                            <View style={styles.pickerColumn}>
                                <Text style={styles.pickerLabel}>Ngày</Text>
                                <ScrollView style={styles.pickerScroll} showsVerticalScrollIndicator={false}>
                                    {Array.from({ length: getsDayInMonth(tempMonth, tempYear) }, (_, i) => i + 1).map((day) => (
                                        <TouchableOpacity
                                            key={day}
                                            style={[styles.pickerItem, tempDay === day && styles.pickerItemSelected]}
                                            onPress={() => setTempDay(day)}
                                        >
                                            <Text style={[styles.pickerItemText, tempDay === day && styles.pickerItemTextSelected]}>
                                                {day}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>

                            <View style={styles.pickerColumn}>
                                <Text style={styles.pickerLabel}>Tháng</Text>
                                <ScrollView style={styles.pickerScroll} showsVerticalScrollIndicator={false}>
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                        <TouchableOpacity
                                            key={month}
                                            style={[styles.pickerItem, tempMonth === month && styles.pickerItemSelected]}
                                            onPress={() => setTempMonth(month)}
                                        >
                                            <Text style={[styles.pickerItemText, tempMonth === month && styles.pickerItemTextSelected]}>
                                                {month}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>

                            <View style={styles.pickerColumn}>
                                <Text style={styles.pickerLabel}>Năm</Text>
                                <ScrollView style={styles.pickerScroll} showsVerticalScrollIndicator={false}>
                                    {Array.from({ length: 10 }, (_, i) => 2020 + i).map((year) => (
                                        <TouchableOpacity
                                            key={year}
                                            style={[styles.pickerItem, tempYear === year && styles.pickerItemSelected]}
                                            onPress={() => setTempYear(year)}
                                        >
                                            <Text style={[styles.pickerItemText, tempYear === year && styles.pickerItemTextSelected]}>
                                                {year}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        </View>

                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.btnCancel} onPress={onClose}>
                                <Text style={styles.btnCancelText}>Huỷ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnConfirm} onPress={handleConfirm}>
                                <Text style={styles.btnConfirmText}>Xác nhận</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },

    bottomContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 30,
        maxHeight: '50%',
    },

    sheetTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 20,
    },

    pickerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 180,
        marginBottom: 20,
    },

    pickerColumn: {
        flex: 1,
        alignItems: 'center',
    },

    pickerLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        marginBottom: 8,
    },

    pickerScroll: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 8,
    },

    pickerItem: {
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    pickerItemSelected: {
        backgroundColor: '#EBF3FC',
    },

    pickerItemText: {
        fontSize: 14,
        color: '#333333',
    },

    pickerItemTextSelected: {
        color: '#2971BF',
        fontWeight: '600',
    },

    buttonRow: {
        flexDirection: 'row',
        gap: 12,
    },

    btnCancel: {
        flex: 1,
        height: 44,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnCancelText: {
        fontSize: 14,
        color: '#666666',
        fontWeight: '500',
    },

    btnConfirm: {
        flex: 1,
        height: 44,
        backgroundColor: '#2971BF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnConfirmText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '600',
    }
});

export default DatePickerSheet;