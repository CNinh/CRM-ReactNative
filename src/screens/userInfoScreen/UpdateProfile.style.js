import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E6E9'
    },

    body: {
        flex: 1,
        padding: 10
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderColor: '#D3D5D7',
        borderWidth: 1
    },

    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    cardHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    cardHeaderTitle: {
        fontSize: 16,
        color: '#000000',
        marginTop: -2
    },

    btnSave: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 4,
        paddingLeft: 8
    },

    txtSave: {
        fontSize: 14,
        color: '#1A7FC1'
    },

    formContainer: {
        paddingTop: 12,
        paddingHorizontal: 10
    },

    inputGroup: {
        marginBottom: 12
    },

    label: {
        fontSize: 13,
        color: '#333333',
        marginBottom: 6
    },

    required: {
        color: '#E53935',
        fontWeight: '700'
    },

    input: {
        height: 42,
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 6,
        paddingHorizontal: 12,
        fontSize: 14,
        color: '#000000'
    },

    errorText: {
        color: '#E53935',
        fontSize: 12,
        marginBottom: 4,
        marginTop: -2,
    },

    inputError: {
        borderColor: '#E53935'
    }
});