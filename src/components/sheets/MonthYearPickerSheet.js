import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import IcArrowU from "../../assets/icons/arrow_up.svg";
import IcArrowD from "../../assets/icons/arrow_down.svg";

const MonthYearPickerSheet = ({ isVisible, onClose, currentMonth, currentYear, onChange }) => {
    
    const changeMonth = (amount) => {
        let newMonth = currentMonth + amount;
        if (newMonth > 12) newMonth = 1;
        if (newMonth < 1) newMonth = 12;
        onChange(newMonth, currentYear);
    };

    const changeYear = (amount) => {
        onChange(currentMonth, currentYear + amount);
    };

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            {/* Vùng ngoài modal */}
            <TouchableOpacity 
                style={styles.modalOverlay} 
                activeOpacity={1} 
                onPress={onClose}
            >
                {/* Modal section */}
                <TouchableOpacity activeOpacity={1} style={styles.sheetContent}>
                    {/* Month - Year picker */}
                    <View style={styles.pickerContainer}>
                        <View style={styles.pickerColumn}>
                            <Text style={styles.pickerLabel}>Tháng</Text>
                            <View style={styles.wheelWrapper}>
                                <TouchableOpacity style={styles.wheelArrow} onPress={() => changeMonth(1)}>
                                    <IcArrowU width={14} height={16} color="#000000" />
                                </TouchableOpacity>
                                <View style={styles.numberBox}>
                                    <Text style={styles.numberText}>{currentMonth}</Text>
                                </View>
                                <TouchableOpacity style={styles.wheelArrow} onPress={() => changeMonth(-1)}>
                                    <IcArrowD width={14} height={16} color="#000000" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.pickerColumn}>
                            <Text style={styles.pickerLabel}>Năm</Text>
                            <View style={styles.wheelWrapper}>
                                <TouchableOpacity style={styles.wheelArrow} onPress={() => changeYear(1)}>
                                    <IcArrowU width={21} height={16} color="#000000" />
                                </TouchableOpacity>
                                <View style={styles.numberBox}>
                                    <Text style={styles.numberText}>{currentYear}</Text>
                                </View>
                                <TouchableOpacity style={styles.wheelArrow} onPress={() => changeYear(-1)}>
                                    <IcArrowD width={21} height={16} color="#000000" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        justifyContent: "flex-end",
    },

    sheetContent: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
    },

    pickerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 24,
        width: "100%",
    },

    pickerColumn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 24,
    },

    pickerLabel: {
        fontSize: 20,
        fontWeight: "500",
        color: "#000000",
    },

    wheelWrapper: {
        alignItems: "center",
    },

    wheelArrow: {
        padding: 8,
    },

    numberBox: {
        backgroundColor: "#E4E6E9",
        paddingHorizontal: 32,
        paddingVertical: 10,
        borderRadius: 8,
        minWidth: 70,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#7E8387",
    },

    numberText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#000000",
    },
});

export default MonthYearPickerSheet;