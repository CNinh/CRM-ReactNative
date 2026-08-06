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
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#D3D5D7'
    },

    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingBottom: 8,
        borderBottomWidth: 1,
        paddingHorizontal: 12,
        borderBottomColor: '#D3D5D7'
    },

    sectionTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000'
    },

    serviceList: {
        flexDirection: 'column'
    },

    serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7',
        gap: 12
    },

    serviceTextGroup: {
        flex: 1
    },

    serviceName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
        marginBottom: 2
    },

    serviceDesc: {
        fontSize: 12,
        color: '#000000',
    },

    descriptionText: {
        fontSize: 13,
        color: '#000000',
        lineHeight: 16,
        marginTop: 4,
        paddingHorizontal: 12
    },

    toggleMoreBtn: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12
    },

    toggleMoreText: {
        fontSize: 13,
        color: '#1A7FC1',
        fontWeight: '500'
    },

    fileList: {
        gap: 8,
        marginTop: 8,
        marginBottom: 4,
        paddingHorizontal: 12
    },

    fileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10
    },

    fileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flex: 1,
        marginRight: 8
    },

    fileName: {
        fontSize: 13,
        color: '#000000',
        flex: 1
    },

    fileActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },

    actionIconBtn: {
        padding: 2
    }
});

export default styles;