import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E6E9',
    },

    badge: {
        position: 'absolute',
        right: -6,
        top: -6,
        backgroundColor: 'red',
        borderRadius: 9,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },

    badgeText: {
        color: '#ffffff',
        fontsize: 10,
        fontWeight: 'bold',
    },

    dateFilterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff'
    },

    dateLabel: {
        fontSize: 13,
        color: '#000000',
        marginHorizontal: 4,
    },

    dateBox: {
        width: 128,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingVertical: 4,
        paddingRight: 6,
        paddingLeft: 8,
        margin: 3,
        borderWidth: 0.5,
        borderColor: '#cccccc',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    dateText: {
        fontSize: 12,
        color: '#000000'
    },

    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 12
    },

    reportCard: {
        width: '48%',
        backgroundColor: '#ffffff',
        borderRadius: 4,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: 178,
        minHeight: 113,
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    reportTitle: {
        fontSize: 14,
        color: '#000000',
        flex: 1
    },

    reportValue: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        paddingLeft: 4,
        marginTop: 6,
        marginBottom: 2
    },

    bottomContent: {
        flexDirection: 'column',
        gap: -2,
        paddingLeft: 4
    },

    reportSub: {
        fontSize: 11,
        color: '#000000',
    },

    boldText: {
        fontWeight: '700'
    },

    scrollContainer: {
        paddingHorizontal: 12,
        paddingVertical: 10,
    },

    sectionContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 6,
        padding: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0e0',
    },

    sectionHeader:
    {
        backgroundColor: '#E5E7EB',
        paddingHorizontal: 26,
        paddingVertical: 13
    },

    sectionTitle:
    { fontSize: 16,
        fontWeight: '500',
        color: '#000000'
    },

    loadMoreBtn: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 10,
    },

    loadMoreBtnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    },

    mockItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        backgroundColor: '#ffffff'
    },

    overviewBody: {
        flex: 1,
        gap: 10
    },

    halfSection: {
        backgroundColor: '#ffffff',
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderTopWidth: 1,
        borderTopColor: '#ffffff'
    },

    expandedContainer: {
        flex: 1
    },

    scrollListContent: {
        paddingHorizontal: 12,
        paddingBottom: 20
    },

    searchBox: {
        backgroundColor: '#ffffff',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        paddingHorizontal: 6,
        marginVertical: 12,
        marginHorizontal: 20,
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },

    searchInput: {
        fontSize: 13,
        paddingVertical: 6
    },

    searchTitleBox: {
        backgroundColor: '#ffffff',
        marginHorizontal: 12,
        marginVertical: 8,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        paddingHorizontal: 10,
        marginHorizontal: 12,
        height: 38,
        justifyContent: 'center'
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