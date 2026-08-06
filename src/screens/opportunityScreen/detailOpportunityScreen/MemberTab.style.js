import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    swipeWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7',
        backgroundColor: '#FFFFFF'
    },

    memberItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF'
    },

    infoContainer: {
        flex: 1,
        justifyContent: 'center'
    },

    memberName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        marginBottom: -1
    },

    subInfoText: {
        fontSize: 11.5,
        color: '#000000',
        marginBottom: 2
    },

    roleRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6
    },

    roleBadge: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 12
    },

    roleText: {
        fontSize: 11,
        fontWeight: '500'
    },

    swipeActionContainer: {
        flexDirection: 'row',
        height: '100%'
    },

    actionBtn: {
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: 4
    },

    btnEdit: {
        backgroundColor: '#2971BF'
    },

    btnDelete: {
        backgroundColor: '#E24B4A'
    },

    actionText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500'
    }
});

export default styles;