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
        gap: 10,
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

    tagText: {
        color: '#185FA5',
        fontSize: 13
    },
    
    subHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
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

    scrollContent: {
        paddingHorizontal: 12,
        paddingTop: 12
    },
});

export default styles;