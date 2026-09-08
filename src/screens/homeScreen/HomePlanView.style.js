import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray50,
    },

    listPadding: {
        paddingBottom: 24,
    },

    calendarContainer: {
        backgroundColor: colors.white,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray200,
        ...theme.shadows.xs,
    },

    tierContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray100,
    },

    checkboxRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    checkboxContainer: {
        marginRight: 8,
    },

    checkboxLabel: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.gray700,
    },

    txtTotal: {
        fontSize: 12,
        fontWeight: "600",
        color: colors.primary,
        backgroundColor: colors.primarySubtle,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: theme.radius.full,
    },

    monthSelectorRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: colors.white,
    },

    arrowBtn: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.gray100,
        justifyContent: "center",
        alignItems: "center",
    },

    monthBadge: {
        backgroundColor: colors.gray50,
        paddingHorizontal: 24,
        paddingVertical: 6,
        borderRadius: theme.radius.full,
        borderWidth: 1,
        borderColor: colors.gray200,
    },

    monthText: {
        fontSize: 13,
        fontWeight: "700",
        color: colors.gray800,
    },

    weekStripRow: {
        flexDirection: "row",
        backgroundColor: colors.white,
        paddingHorizontal: 6,
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: colors.gray100,
    },

    dayItemBtn: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 6,
        marginHorizontal: 2,
        borderRadius: theme.radius.sm,
    },

    dayItemActive: {
        backgroundColor: colors.primarySubtle,
        borderWidth: 1,
        borderColor: colors.primaryBorder,
    },

    txtSubDay: {
        fontSize: 11,
        fontWeight: "600",
        color: colors.gray500,
        marginBottom: 2,
    },

    txtMainDay: {
        fontSize: 13,
        fontWeight: "700",
        color: colors.gray800,
    },

    txtRedColor: {
        color: colors.danger,
    },

    badgeWrapper: {
        height: 16,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4,
    },

    taskBadge: {
        backgroundColor: colors.primary,
        minWidth: 16,
        height: 16,
        borderRadius: 8,
        paddingHorizontal: 4,
        justifyContent: "center",
        alignItems: "center",
    },

    taskBadgeText: {
        color: colors.white,
        fontSize: 10,
        fontWeight: "700",
        lineHeight: 12,
    },

    emptyBadge: {
        width: 16,
        height: 16,
    },
});

export default styles;