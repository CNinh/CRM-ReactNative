import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6F9'
    },

    subTabBar: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },

    subTab: {
        flex: 1,
        paddingVertical: 12, 
        alignItems: 'center',
    },

    subTabActive: {
        borderBottomWidth: 2,
        borderBottomColor: '#1A7FC1',
    },

    subTabText: {
        fontsize: 15,
        color: '#666666',
        fontWeight: '500',
    },

    subTabTextActive: {
        color: '#1A7FC1',
        fontWeight: 'bold',
    },

    contentBody: {
        flex: 1
    }
});

export default styles;