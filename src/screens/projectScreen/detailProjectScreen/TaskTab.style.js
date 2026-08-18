import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginHorizontal: 12,
        marginTop: 12,
        marginBottom: 12,
        paddingHorizontal: 12,
        height: 38,
        borderWidth: 1,
        borderColor: '#D3D5D7'
    },

    searchIcon: {
        marginRight: 8
    },

    searchInput: {
        flex: 1,
        fontSize: 13,
        color: '#000000',
        paddingVertical: 0
    },

    listContainer: {
        flex: 1,
        paddingHorizontal: 12
    },

    cardWrapper: {
        flexDirection: 'row',
        marginBottom: 12,
        borderRadius: 12,
        overflow: 'hidden'
    },

    taskCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 12
    },

    taskTitleHeader: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        marginBottom: 4
    },

    taskCode: {
        fontSize: 16,
        color: '#185FA5',
        fontWeight: '500'
    },

    taskName: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '500'
    },

    infoGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 6,
        gap: 60
    },

    leftColumn: {
        flexDirection: 'column',
        marginBottom: 6,
        gap: 2
    },

    rightColumn: {
        flexDirection: 'column',
        marginBottom: 6,
        gap: 2
    },

    infoRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2
    },

    label: {
        fontSize: 14,
        color: '#7E8387'
    },

    value: {
        fontSize: 14,
        color: '#000000'
    },

    statusGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    statusBadge: {
        backgroundColor: '#B6E0F0',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 16,
        marginLeft: 4
    },

    statusBadgeText: {
        fontSize: 12,
        color: '#185FA5'
    },

    assigneeBadge: {
        alignSelf: 'flex-start',
        backgroundColor: '#B5D4F4',
        borderWidth: 1,
        borderColor: '#1A7FC1',
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 1,
        marginTop: -6
    },

    assigneeBadgeText: {
        fontSize: 12,
        color: '#1A7FC1'
    },

    cardWrapper: {
        marginBottom: 12,
        borderRadius: 12,
        overflow: 'hidden'
    },

    taskCard: {
        backgroundColor: '#FFFFFF',
        padding: 12
    },

    actionGroup: {
        flexDirection: 'row',
        width: 150,
        height: '100%'
    },

    actionBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    },

    btnView: {
        backgroundColor: '#008BB2'
    },

    btnEdit: {
        backgroundColor: '#2971BF'
    },

    btnDelete: {
        backgroundColor: '#E24B4A'
    },

    actionText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500'
    }
});

export default styles;