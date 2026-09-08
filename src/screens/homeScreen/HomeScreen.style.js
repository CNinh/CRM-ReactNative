import { StyleSheet, Platform } from "react-native";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    greetingContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        paddingTop: 14,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    greetingLeft: {
        flex: 1,
    },

    greetingTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.gray900,
        letterSpacing: 0.2,
    },

    greetingSubtitle: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.gray500,
        marginTop: 2,
    },

    dateBadge: {
        backgroundColor: colors.primarySubtle,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: theme.radius.sm,
        borderWidth: 1,
        borderColor: colors.primaryBorder,
    },

    dateBadgeText: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.primary,
    },

    subTabBarWrapper: {
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        paddingBottom: 10,
        paddingTop: 4,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray200,
    },

    subTabBar: {
        flexDirection: 'row',
        backgroundColor: colors.gray100,
        borderRadius: theme.radius.md,
        padding: 4,
    },

    subTab: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.radius.sm,
    },

    subTabActive: {
        backgroundColor: colors.white,
        ...theme.shadows.xs,
    },

    subTabText: {
        fontSize: 14,
        color: colors.gray600,
        fontWeight: '500',
    },

    subTabTextActive: {
        color: colors.primary,
        fontWeight: '700',
    },

    contentBody: {
        flex: 1,
    }
});

export default styles;