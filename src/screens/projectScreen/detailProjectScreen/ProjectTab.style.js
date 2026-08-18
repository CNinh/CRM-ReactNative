import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        margin: 12
    },

    cardSection: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingTop: 10,
        borderWidth: 1,
        borderColor: '#D3D5D7'
    },

    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingBottom: 12,
        borderBottomWidth: 1,
        paddingHorizontal: 14,
        borderBottomColor: '#D3D5D7'
    },

    sectionTitle: {
        fontSize: 14,
        color: '#000000'
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    label: {
        fontSize: 13,
        color: '#000000'
    },

    value: {
        fontSize: 13,
        color: '#000000',
        flex: 2,
        textAlign: 'right'
    },

    blueText: {
        color: '#1A7FC1'
    },

    descriptionText: {
        fontSize: 13,
        color: '#000000',
        lineHeight: 16,
        marginTop: 4,
        paddingHorizontal: 16
    },

    toggleMoreBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 24,
        paddingTop: 2,
        paddingBottom: 12,
    },

    toggleMoreText: {
        fontSize: 12,
        color: '#1A7FC1',
    }
});

export default styles;