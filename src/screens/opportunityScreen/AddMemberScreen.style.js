import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#D3D5D7'
    },

    container: {
        flex: 1,
        padding: 12,
        gap: 12
    },

    card: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        maxHeight: 548
    },

    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        padding: 12,
        paddingHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#D3D5D7"
    },

    cardTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#2971BF'
    },

    badgeCount: {
        backgroundColor: '#E0EFF8',
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 15
    },

    badgeText: {
        fontSize: 13,
        color: '#1A7FC1',
        fontWeight: '500'
    },

    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginHorizontal: 12,
        height: 33,
        marginBottom: 10
    },

    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 13,
        color: '#000000',
        paddingVertical: 0
    },

    dropdownBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginHorizontal: 12,
        height: 32,
        marginBottom: 10
    },

    dropdownText: {
        fontSize: 13,
        color: '#000000'
    },

    memberScrollList: {
        flex: 1,
        marginBottom:12
    },

    memberRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 5,
        gap: 8,
        marginHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    checkboxContainer: {
        marginRight: 10,
    },

    memberInfo: {
        flex: 1,
        flexDirection: 'column',
        gap: -3
    },

    memberName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000'
    },

    memberTeam: {
        fontSize: 11.5,
        color: '#000000',
        marginTop: 1
    },

    cardRole: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        maxHeight: 138
    },

    roleHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#D3D5D7"
    },

    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        padding: 14,
        paddingBottom: 20
    },

    chip: {
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D3D5D7'
    },

    chipText: {
        fontSize: 11.5,
        fontWeight: '500',
        color: '#000000'
    },

    chipSelected: {
        backgroundColor: '#E6F1FB',
        borderColor: '#185FA5'
    },

    chipTextSelected: {
        color: '#185FA5',
        fontWeight: '500'
    },

    footer: {
        padding: 11,
        backgroundColor: '#FFFFFF'
    },

    btnSave: {
        backgroundColor: '#1A7FC1',
        height: 44,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10
    },

    btnSaveText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '500'
    },

    // dropdown list
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
        zIndex: 9999
    },

    dropdownListItem: {
        paddingVertical: 9,
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