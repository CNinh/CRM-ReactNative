import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E6E9'
    },

    scrollContent: {
        padding: 12,
        paddingBottom: 20
    },

    cardForm: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 16,
        gap: 16
    },

    formGroup: {
        gap: 6,
    },

    label: {
        fontSize: 13,
        color: '#000000',
        fontWeight: '400'
    },

    disabledInputBox: {
        backgroundColor: '#D9D9D9',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 10,
        justifyContent: 'center'
    },

    disabledText: {
        fontSize: 13,
        color: '#000000',
        lineHeight: 18
    },

    selectBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 6,
        paddingHorizontal: 12,
        height: 42
    },

    selectText: {
        fontSize: 14,
        color: '#000000'
    },

    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 6,
        paddingHorizontal: 12,
        height: 42,
        fontSize: 14,
        color: '#000000'
    },

    textArea: {
        height: 110,
        paddingTop: 10,
        paddingBottom: 10
    },

    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
        marginTop: 2
    },

    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginLeft: 12
    },

    radioOuter: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },

    radioOuterActive: {
        borderColor: '#1976D2'
    },

    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#1976D2'
    },

    radioLabel: {
        fontSize: 13,
        color: '#000000'
    },

    bottomBar: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: 'transparent'
    },

    btnSave: {
        backgroundColor: '#1B78C1',
        borderRadius: 8,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },

    btnSaveText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '500'
    },

    modalOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent'
    },

    dropdownListModal: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 6,
        elevation: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        maxHeight: 180,
        zIndex: 9999
    },

    dropdownListItem: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0'
    },

    dropdownItemText: {
        fontSize: 13,
        color: '#000000'
    }
});

export default styles;