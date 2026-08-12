import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4E6E9'
    },

    listPadding: {
        paddingBottom: 2
    },

    calendarContainer: {
        backgroundColor: "#ffffff",
        marginBottom: 10
    },

    tierContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#E8EBF0",
        paddingLeft: 22,
        paddingRight: 32,
        paddingTop: 10,
        paddingBottom: 5
    },

    checkboxRow: {
        flexDirection: "row",
        alignItems: "center"
    },

    checkbox: {
        width: 15,
        height: 15,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#7E8387",
        backgroundColor: "#ffffff",
        marginRight: 10
    },

    checkboxLabel: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000000",
        marginHorizontal: 12
    },

    txtTotal: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000000"
    },

    monthSelectorRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#E8EBF0",
        borderTopWidth: 1,
        borderTopColor: "#ffffff"
    },

    arrowBtn: {
        paddingHorizontal: 6,
        paddingVertical: 4
    },

    monthBadge: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 60,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#D1D5DB"
    },

    monthText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000000"
    },

    weekStripRow: {
        flexDirection: "row",
        backgroundColor: "#ffffff"
    },

    dayItemBtn: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 3,
        borderBottomWidth: 2,
        borderBottomColor: "transparent"
    },

    dayItemActive: {
        borderBottomColor: "#1A7FC1",
    },

    txtSubDay: {
        fontSize: 12,
        color: "#000000",
        marginBottom: -1
    },

    txtMainDay: {
        fontSize: 13,
        color: "#000000"
    },

    txtRedColor: {
        color: "#EF4444"
    },

    badgeWrapper: {
        height: 16,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: -1
    },

    taskBadge: {
        backgroundColor: "#1A7FC1",
        width: 16,
        height: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },

    taskBadgeText: {
        color: "#ffffff",
        fontSize: 13,
        lineHeight: 16
    },

    emptyBadge: {
        width: 16,
        height: 16
    }
});

export default styles;