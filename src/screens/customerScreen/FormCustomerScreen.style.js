import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB'
    },

    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },

    tabButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent'
    },

    activeTabButton: {
        borderBottomColor: '#1A88C9'
    },

    tabText: {
        fontSize: 14,
        color: '#7E8387',
        fontWeight: '500'
    },

    activeTabText: {
        color: '#1A88C9',
        fontWeight: '600'
    },

    contactHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 20,
        paddingVertical: 4,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },

    contactCountText: {
        fontSize: 13,
        color: '#000000'
    },

    btnAddContact: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    btnAddContactText: {
        fontSize: 13,
        color: '#1A7FC1'
    },

    scrollBody: {
        flex: 1
    },

    scrollContent: {
        padding: 12
    },

    cardForm: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingTop: 14,
        paddingBottom: 8,
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3
    },

    row: {
        flexDirection: 'row',
        gap: 10
    },

    flex1: {
        flex: 1
    },

    flex3: {
        flex: 3
    },

    flex7: {
        flex: 7
    },

    formGroup: {
        marginBottom: 8,
        position: 'relative'
    },

    label: {
        fontSize: 11.5,
        color: '#000000',
        marginBottom: 6
    },

    required: {
        color: '#D93025'
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
    },

    inputError: {
        borderColor: '#D93025'
    },

    errorText: {
        color: '#D93025',
        fontSize: 12,
        marginBottom: 4,
        marginLeft: 2
    },

    dropdownInput: {
        height: 38,
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 6,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },

    inputText: {
        fontSize: 11.5,
        color: '#000000'
    },

    placeholderText: {
        fontSize: 11.5,
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
        maxHeight: 180
    },

    dropdownListItem: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    dropdownItemText: {
        fontSize: 12.5,
        color: '#000000'
    },

    footer: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 12,
        paddingTop: 10,
        paddingBottom: 20
    },

    btnSave: {
        height: 40,
        backgroundColor: '#1A88C9',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },

    btnSaveText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '500'
    }
});

export default styles;