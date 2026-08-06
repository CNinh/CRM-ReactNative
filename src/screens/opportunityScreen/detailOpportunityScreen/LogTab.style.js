import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 12,
        gap: -2
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 2
    },

    headerIconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#4AA0DF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerPill: {
        backgroundColor: '#4AA0DF',
        paddingHorizontal: 14,
        paddingVertical: 4,
        marginRight: 60,
        borderRadius: 20
    },

    headerTitle: {
        color: '#FFFFFF',
        fontSize: 14
    },

    logCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginLeft: 28,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#1A7FC1',
        gap: 8
    },

    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },

    userInfoGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 4,
        flex: 1,
        marginRight: 8
    },

    timeText: {
        fontSize: 12,
        color: '#000000'
    },

    levelBadge: {
        backgroundColor: '#1A7FC1',
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginLeft: 4,
        borderRadius: 4
    },

    levelText: {
        color: '#FFFFFF',
        fontSize: 12
    },

    userName: {
        fontSize: 12,
        color: '#1A7FC1'
    },

    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    statusPill: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
        gap: 6
    },

    btnEdit: {
        backgroundColor: '#1A7FC1',
        width: 24,
        height: 24,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    statusConfirmed: {
        backgroundColor: '#87cda350'
    },

    statusCommented: {
        backgroundColor: '#e6510020'
    },

    statusTextConfirmed: {
        fontSize: 12,
        color: '#2E7D32'
    },

    statusTextCommented: {
        fontSize: 12,
        color: '#E65100'
    },

    logContent: {
        fontSize: 13,
        color: '#000000',
        lineHeight: 19
    },

    attachmentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 3,
        alignSelf: 'flex-start',
        gap: 6
    },

    attachmentText: {
        fontSize: 12,
        color: '#000000',
    }
});

export default styles;