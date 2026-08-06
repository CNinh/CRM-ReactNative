import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 12,
        paddingVertical: 12
    },

    historyItemRow: {
        flexDirection: 'row',
        marginBottom: 16,
        gap: 4
    },

    leftTimeline: {
        width: 50,
        alignItems: 'center'
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F09595',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },

    avatarText: {
        color: '#FFFFFF',
        fontSize: 18,
    },

    timelineLine: {
        position: 'absolute',
        top: 42,
        bottom: -20,
        width: 2,
        backgroundColor: '#D3D5D7',
        zIndex: 1
    },

    rightCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#D3D5D7',
        overflow: 'hidden'
    },

    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    statusTag: {
        backgroundColor: '#0088B2',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8
    },

    statusTagText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500'
    },

    timeGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },

    timeText: {
        fontSize: 12,
        color: '#000000'
    },

    btnEdit: {
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 6,
        padding: 4,
        marginLeft: 6,
        marginRight: -3,
        marginVertical: -3
    },

    sectionMember: {
        paddingHorizontal: 12,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    sectionLabel: {
        fontSize: 13,
        color: '#1A7FC1',
        marginVertical: 4
    },

    memberText: {
        fontSize: 13,
        color: '#000000',
        marginLeft: 16
    },

    contactName: {
        fontSize: 13,
        color: '#000000',
        marginLeft: 16,
        marginBottom: 4
    },

    phonePillBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2971BF',
        paddingHorizontal: 12,
        paddingLeft: 6,
        paddingVertical: 2,
        marginLeft: 16,
        borderRadius: 12,
        alignSelf: 'flex-start',
        gap: 5
    },

    phonePillText: {
        color: '#FFFFFF',
        fontSize: 11.5
    },

    sectionContent: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    contentText: {
        fontSize: 13,
        color: '#000000'
    },

    toggleMoreBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginVertical: 4,
        marginHorizontal: 6
    },

    toggleMoreText: {
        fontSize: 12,
        color: '#1A7FC1',
        fontWeight: '500'
    },

    sectionFiles: {
        padding: 12
    },

    fileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 10
    },

    fileHeaderTitle: {
        fontSize: 13,
        fontWeight: '500',
        color: '#000000'
    },

    fileList: {
        gap: 8
    },

    fileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8
    },

    fileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flex: 1,
        marginRight: 8
    },
    
    fileName: {
        fontSize: 12.5,
        color: '#000000',
        flex: 1
    },

    fileActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
});

export default styles;