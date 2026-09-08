import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    searchSection: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        gap: 8,
        alignItems: 'center',
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray200,
    },

    searchBox: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: theme.radius.md,
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 12,
        gap: 8,
        borderWidth: 1,
        borderColor: colors.gray200,
        backgroundColor: colors.gray50,
    },

    searchInput: {
        flex: 1,
        fontSize: 13,
        color: colors.gray900,
        paddingVertical: 0,
    },

    clearBtn: {
        padding: 4,
    },

    clearBtnText: {
        fontSize: 12,
        color: colors.gray400,
        fontWeight: '700',
    },

    btnFilter: {
        width: 40,
        height: 40,
        borderRadius: theme.radius.md,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray200,
        backgroundColor: colors.gray50,
    },

    btnFilterActive: {
        borderColor: colors.primary,
        backgroundColor: colors.primarySubtle,
    },

    filterBadge: {
        position: 'absolute',
        top: -4,
        right: -4,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: colors.white,
    },

    filterBadgeText: {
        color: colors.white,
        fontSize: 9,
        fontWeight: '700',
    },

    btnAdd: {
        width: 40,
        height: 40,
        borderRadius: theme.radius.md,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        ...theme.shadows.xs,
    },

    tagRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray100,
        gap: 8,
    },

    activeTag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primarySubtle,
        borderWidth: 1,
        borderColor: colors.primaryBorder,
        borderRadius: theme.radius.full,
        paddingLeft: 10,
        paddingRight: 8,
        paddingVertical: 4,
        gap: 6,
    },

    tagText: {
        color: colors.primary,
        fontSize: 12,
        fontWeight: '600',
    },

    btnRemoveTag: {
        padding: 2,
    },

    xText: {
        color: colors.danger,
        fontSize: 11,
        fontWeight: '700',
    },

    btnClear: {
        color: colors.danger,
        fontSize: 12,
        fontWeight: '600',
    },

    subHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray200,
    },

    countText: {
        fontSize: 13,
        color: colors.gray600,
    },

    countHighlight: {
        fontWeight: '700',
        color: colors.gray900,
    },

    btnSort: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: colors.gray50,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: theme.radius.full,
        borderWidth: 1,
        borderColor: colors.gray200,
    },

    sortText: {
        color: colors.primary,
        fontSize: 12,
        fontWeight: '600',
    },

    listContent: {
        paddingTop: 10,
        paddingBottom: 24,
    },

    btnLoadMore: {
        backgroundColor: colors.primarySubtle,
        borderRadius: theme.radius.md,
        borderWidth: 1.5,
        borderColor: colors.primary,
        paddingVertical: 10,
        marginHorizontal: 16,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
    },

    loadMoreText: {
        color: colors.primary,
        fontSize: 13,
        fontWeight: '600',
    },

    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
        paddingHorizontal: 24,
    },

    emptyText: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.gray700,
        marginTop: 12,
    },

    emptySubText: {
        fontSize: 13,
        color: colors.gray400,
        marginTop: 4,
        textAlign: 'center',
    },
});

export default styles;