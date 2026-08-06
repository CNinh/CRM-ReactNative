import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 12,
        gap: 12
    },

    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        overflow: 'hidden'
    },

    headerSection: {
        padding: 12,
        gap: 4
    },

    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },

    timeText: {
        fontSize: 12.5,
        color: '#000000',
        marginTop: -2
    },

    planTitle: {
        fontSize: 18,
        color: '#000000'
    },

    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    },

    locationText: {
        fontSize: 12.5,
        color: '#000000',
        flex: 1
    },

    relatedUserRow: {
        marginBottom: -8
    },

    noUserRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 2
    },

    noUserText: {
        fontSize: 12.5,
        color: '#D3D5D7'
    },

    contentSection: {
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#D3D5D7'
    },

    contentLabel: {
        fontSize: 12.5,
        color: '#4AA0DF',
        marginBottom: 2,
        marginTop: -8
    },

    contentText: {
        fontSize: 12.5,
        color: '#000000',
        lineHeight: 16
    },

    toggleMoreBtn: {
        alignSelf: 'flex-start',
        marginBottom: -2
    },

    toggleMoreText: {
        fontSize: 12.5,
        color: '#4AA0DF'
    }
});

export default styles;