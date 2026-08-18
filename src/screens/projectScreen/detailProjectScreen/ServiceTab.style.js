import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E7EB',
        paddingTop: 4
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D3D5D7',
        margin: 10,
        overflow: 'hidden'
    },

    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    serviceName: {
        fontSize: 14,
        color: '#000000',
        paddingBottom: 3
    },

    cardBody: {
        paddingHorizontal: 14
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8
    },

    label: {
        fontSize: 13.5,
        color: '#000000',
        marginRight: 12
    },

    value: {
        fontSize: 13.5,
        color: '#000000',
        flex: 1,
        textAlign: 'right'
    },

    bold: {
        fontWeight: '600'
    },

    blueText: {
        color: '#1A7FC1'    
    },

    greenText: {
        color: '#2E7D32'
    },

    redText: {
        color: '#C62828'
    },

    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderTopWidth: 1,
        borderTopColor: '#D3D5D7',
        gap: 10
    },

    btnAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5,
        gap: 6
    },

    btnDetail: {
        backgroundColor: '#0088B2'
    },

    btnEdit: {
        backgroundColor: '#2C86D1'
    },

    btnDelete: {
        backgroundColor: '#DF4B30'
    },

    btnAllocate: {
        backgroundColor: '#FFBE50'
    },

    btnText: {
        color: '#FFFFFF',
        fontSize: 13
    }
});

export default styles;