import { View, TextInput, Text, StyleSheet } from "react-native";

// Thêm dấu ngăn cách trong quá trình gõ
const maskDate = (text) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length > 4) return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
    if (cleaned.length > 2) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return cleaned;
};

const maskDateTime = (text) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length > 10) return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)} ${cleaned.slice(8, 10)}:${cleaned.slice(10, 12)}`;
    if (cleaned.length > 8) return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)} ${cleaned.slice(8)}`;
    if (cleaned.length > 4) return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
    if (cleaned.length > 2) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return cleaned;
};

// Chỉnh sửa sau khi gõ đủ chuỗi ký tự
const correctDate = (text) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length < 8) return text;

    let d = parseInt(cleaned.slice(0, 2), 10);
    let m = parseInt(cleaned.slice(2, 4), 10);
    let y = parseInt(cleaned.slice(4, 8), 10);

    if (m < 1) m = 1;
    if (m > 12) m = 12;

    const maxDaysInMonth = new Date(y, m, 0).getDate();
    if (d < 1) d = 1;
    if (d > maxDaysInMonth) d = maxDaysInMonth;

    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(d)}/${pad(m)}/${y}`;
};

const correctDateTime = (text) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length < 12) return text;

    let d = parseInt(cleaned.slice(0, 2), 10);
    let m = parseInt(cleaned.slice(2, 4), 10);
    let y = parseInt(cleaned.slice(4, 8), 10);
    let h = parseInt(cleaned.slice(8, 10), 10);
    let min = parseInt(cleaned.slice(10, 12), 10);

    if (m < 1) m = 1;
    if (m > 12) m = 12;

    const maxDaysInMonth = new Date(y, m, 0).getDate();
    if (d < 1) d = 1;
    if (d > maxDaysInMonth) d = maxDaysInMonth;

    if (h > 23) h = 23;
    if (min > 59) min = 59;

    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(d)}/${pad(m)}/${y} ${pad(h)}:${pad(min)}`;
};

export const DateInput = ({
    value,
    onChange = () => {},
    placeholder = "",
    customInputStyle,
}) => {
    const handleChangeText = (text) => {
        const masked = maskDate(text);
        const cleaned = masked.replace(/\D/g, '');

        // Kiểm tra năm nhuận & sửa sau khi nhập đủ 8 ký tự
        if (cleaned.length === 8) {
            onChange(correctDate(masked));
        } else {
            onChange(masked);
        }
    };

    const handleBlur = () => {
        if (value) {
            onChange(correctDate(value));
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, customInputStyle]}
                value={value}
                onChangeText={handleChangeText}
                onBlur={handleBlur}
                placeholder={placeholder}
                placeholderTextColor="#D3D5D7"
                keyboardType="numeric"
                maxLength={10}
            />
        </View>
    );
};

export const DateTimeInput = ({
    value,
    onChange = () => {},
    placeholder = "",
    customInputStyle
}) => {
    const handleChangeText = (text) => {
        const masked = maskDateTime(text);
        const cleaned = masked.replace(/\D/g, '');

        // Kiểm tra năm nhuận & sửa sau khi nhập đủ 12 ký tự
        if (cleaned.length === 12) {
            onChange(correctDateTime(masked));
        } else {
            onChange(masked);
        }
    };

    const handleBlur = () => {
        if (value) {
            onChange(correctDateTime(value));
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, customInputStyle]}
                value={value}
                onChangeText={handleChangeText}
                onBlur={handleBlur}
                placeholder={placeholder}
                placeholderTextColor="#D3D5D7"
                keyboardType="numeric"
                maxLength={16}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 12
    },

    input: {
        height: 38,
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 6,
        paddingHorizontal: 10,
        fontSize: 14,
        color: '#000000',
        backgroundColor: '#FFFFFF'
    }
});