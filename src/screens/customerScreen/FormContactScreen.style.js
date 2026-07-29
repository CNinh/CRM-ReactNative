import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E6E9'
    },

    body: {
        flex: 1
    },

    scrollContent: {
        padding: 12
    },

    cardForm: {
        backgroundColor: '#ffffff',
        borderColor: '#D3D5D7',
        borderWidth: 1,
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 14,
        gap: 10
    },

    formGroup: {
        gap: 6
    },

    label: {
        fontSize: 12,
        color: '#000000'
    },

    input: {
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 6,
        maxHeight: 40,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 13,
        color: '#000000'
    },

    textArea: {
        maxHeight: 80
    },

    footer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB'
    },

    btnSubmit: {
        backgroundColor: '#1A7FC1',
        borderRadius: 8,
        height: 44,
        marginBottom: 10
    },

    btnSubmitGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },

    btnSubmitText: {
        color: '#ffffff',
        fontSize: 15
    }
});

export default styles;