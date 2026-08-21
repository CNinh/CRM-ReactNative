import { TextInput, StyleSheet } from "react-native";

const maskPhone = (text) => {
    let cleaned = text.replace(/[^\d+]/g, '');

    if (cleaned.startsWith('+84')) {
        cleaned = '0' + cleaned.slice(3);
    } else if (cleaned.startsWith('84') && cleaned.length > 2) {
        cleaned = '0' + cleaned.slice(2);
    }

    const numbersOnly = cleaned.replace(/\D/g, '');

    if (numbersOnly.length > 7) {
        return `${numbersOnly.slice(0, 4)} ${numbersOnly.slice(4, 7)} ${numbersOnly.slice(7, 10)}`;
    }
    if (numbersOnly.length > 4) {
        return `${numbersOnly.slice(0, 4)} ${numbersOnly.slice(4, 7)}`;
    }
    return numbersOnly;
};

const correctPhone = (text) => {
    if (!text) return '';

    let cleaned = text.replace(/\D/g, '');
    cleaned = cleaned.slice(0, 10);

    if (cleaned.length === 9 && !cleaned.startsWith('0')) {
        cleaned = '0' + cleaned;
    }

    if (cleaned.length === 10) {
        return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 10)}`;
    }

    return cleaned;
};

export const PhoneInput = ({
    value,
    onChange = () => {},
    placeholder = "",
    customInputStyle
}) => {
    const handleChangeText = (text) => {
        const masked = maskPhone(text);
        const numbersOnly = masked.replace(/\D/g, '');

        if (numbersOnly.length >= 10) {
            onChange(correctPhone(masked));
        } else {
            onChange(masked);
        }
    };

    const handleBlur = () => {
        if (value) {
            onChange(correctPhone(value));
        }
    };

    return (
        <TextInput
            style={[styles.input, customInputStyle]}
            value={value}
            onChangeText={handleChangeText}
            onBlur={handleBlur}
            placeholder={placeholder}
            placeholderTextColor="#D3D5D7"
            keyboardType="phone-pad"
            maxLength={12}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 38,
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 6,
        paddingHorizontal: 10,
        fontSize: 14,
        color: '#000000'
    }
});