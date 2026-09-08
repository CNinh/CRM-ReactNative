import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray50,
    },

    topSection: {
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray200,
    },

    dateFilterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray100,
    },

    dateItem: {
        flex: 1,
    },

    dateLabel: {
        fontSize: 11,
        fontWeight: '600',
        color: colors.gray500,
        marginBottom: 4,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    dateBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.gray50,
        borderRadius: theme.radius.sm,
        borderWidth: 1,
        borderColor: colors.gray200,
        paddingHorizontal: 10,
        paddingVertical: 7,
    },

    dateText: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.gray800,
    },

    dateArrow: {
        paddingHorizontal: 6,
        paddingTop: 16,
    },

    dateArrowText: {
        fontSize: 14,
        color: colors.gray400,
        fontWeight: '600',
    },

    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 10,
    },

    reportCard: {
        width: '48%',
        backgroundColor: colors.white,
        borderRadius: theme.radius.md,
        padding: 12,
        borderWidth: 1,
        borderColor: colors.gray200,
        borderLeftWidth: 4,
        ...theme.shadows.xs,
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    iconBox: {
        width: 32,
        height: 32,
        borderRadius: theme.radius.xs,
        justifyContent: 'center',
        alignItems: 'center',
    },

    reportTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.gray700,
        flex: 1,
        lineHeight: 16,
    },

    reportValue: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.gray900,
        marginTop: 8,
        marginBottom: 4,
    },

    bottomContent: {
        gap: 2,
    },

    reportSub: {
        fontSize: 11,
        color: colors.gray500,
        lineHeight: 15,
    },

    boldText: {
        fontWeight: '700',
        color: colors.gray800,
    },

    overviewBody: {
        flex: 1,
        paddingBottom: 24,
    },

    halfSection: {
        backgroundColor: colors.white,
        marginTop: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.gray200,
        ...theme.shadows.xs,
    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray100,
    },

    sectionTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    accentBar: {
        width: 3.5,
        height: 16,
        borderRadius: 2,
        backgroundColor: colors.primary,
    },

    sectionTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: colors.gray800,
    },

    viewAllText: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.primary,
    },

    searchBox: {
        backgroundColor: colors.gray50,
        borderRadius: theme.radius.md,
        borderWidth: 1,
        borderColor: colors.gray200,
        paddingHorizontal: 12,
        marginHorizontal: 16,
        marginVertical: 10,
        height: 38,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    searchInput: {
        flex: 1,
        fontSize: 13,
        color: colors.gray800,
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

    btnLoadMore: {
        backgroundColor: colors.primarySubtle,
        borderRadius: theme.radius.md,
        borderWidth: 1.5,
        borderColor: colors.primary,
        paddingVertical: 9,
        marginHorizontal: 16,
        marginBottom: 14,
        marginTop: 4,
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
});

export default styles;