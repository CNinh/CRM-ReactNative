import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E6E9'
    },

    searchSection: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 10,
        gap: 5,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#E4E6E9'
    },

    searchBox:
    {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 24,
        height: 40,
        alignItems:'center',
        paddingHorizontal: 10,
        gap: 3,
        borderWidth: 1,
        borderColor: '#D3D5D7'
    },

    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#000000',
        paddingBottom: 8
    },

    btnFilter: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D3D5D7'
    },

    btnAdd: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#185FA5',
        backgroundColor: '#4AA0DF'
    },
    
    tagRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#E4E6E9',
        gap: 8
    },

    activeTag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6F1FB',
        borderWidth: 1,
        borderColor: '#185FA5',
        borderRadius: 20,
        paddingLeft: 12,
        paddingRight: 8,
        paddingVertical: 4,
        gap: 4
    },

    tagText: {
        color: '#185FA5',
        fontSize: 13
    },

    btnRemoveTag: {
        padding: 2,
    },

    xText: {
        color: '#E24B4A',
        fontSize: 11,
        fontWeight: '700',
    },

    btnClear: {
        color: '#E24B4A',
        fontSize: 13,
        fontWeight: '500'
    },
    
    subHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12, 
        marginBottom: 12,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    
    countText: {
        fontSize: 14,
        color: '#000000'
    },
    
    btnSort: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    
    sortText: {
        color: '#1A7FC1',
        fontSize: 14,
        fontWeight: '300'
    },

    btnLoadMore: {
        backgroundColor: '#0284C7',
        borderRadius: 6,
        paddingVertical: 8,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        marginTop: -2,
        marginBottom: 10
    },

    loadMoreText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
});

export default styles;