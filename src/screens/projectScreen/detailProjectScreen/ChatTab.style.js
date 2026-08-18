import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 16,
        paddingBottom: 24
    },

    emptyContainer: {
        padding: 24,
        alignItems: 'center'
    },

    emptyText: {
        fontSize: 14,
        color: '#6B7280'
    },

    chatContainer: {
        marginBottom: 14,
        position: 'relative'
    },

    timelineTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        zIndex: 2
    },

    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#4AA0DF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerGroup: {
        flex: 1,
        marginTop: 4,
        marginLeft: 8,
        justifyContent: 'center'
    },

    dateBadge: {
        backgroundColor: '#4AA0DF',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 12,
        marginBottom: -4
    },

    dateBadgeText: {
        color: '#FFFFFF',
        fontSize: 11.5,
        fontWeight: '300'
    },

    taskTitle: {
        fontSize: 11.5
    },

    taskId: {
        color: '#1A7FC1'
    },

    taskName: {
        color: '#1A7FC1'
    },

    splitter: {
        fontSize: 16,
        fontWeight: '300',
        color: '#000000'
    },

    taskLevel: {
        color: '#000000'
    },

    timelineContainer: {
        paddingLeft: 46,
        position: 'relative'
    },

    timelineLine: {
        position: 'absolute',
        left: 21,
        top: -8,
        bottom: -16,
        width: 1,
        backgroundColor: '#7E8387',
        zIndex: 1
    },

    chatCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderLeftWidth: 4,
        borderLeftColor: '#1A7FC1',
        marginLeft: -16,
        marginTop: -2
    },

    chatHeader: {
        fontSize: 13
    },

    timeText: {
        color: '#000000'
    },

    userName: {
        color: '#C62828'
    },

    actionText: {
        color: '#000000'
    },

    chatContent: {
        marginTop: 4,
        marginHorizontal: 4
    },

    chatTitle: {        
        fontSize: 13,
        color: '#000000',
    },

    attachmentBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#7E8387',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginBottom: 4,
        alignSelf: 'flex-start',
        gap: 6
    },

    attachmentName: {
        fontSize: 11.5,
        color: '#000000'
    }
});

export default styles;