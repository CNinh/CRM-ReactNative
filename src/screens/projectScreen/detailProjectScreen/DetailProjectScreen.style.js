import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#E4E6E9'
    },

    container: {
        flex: 1
    },
    
    subheaderContainer: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        paddingTop: 12,
        paddingBottom: 6
    },

    stageBadge: {
        alignSelf: 'flex-start',
        backgroundColor: '#FFBE50',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        marginBottom: 8
    },

    stageBadgeText: {
        color: '#FFFFFF',
        fontSize: 11.5
    },

    opportunityTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000'
    },

    deptRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },

    deptName: {
        fontSize: 13.5,
        color: '#000000',
        marginTop: -2
    },

    linkRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginHorizontal: 4
    },

    linkName: {
        flex: 1,
        fontSize: 13.5,
        color: '#1A7FC1',
        marginTop: -2,
        marginRight: 20
    },

    overviewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        gap: 8,
        backgroundColor: '#ffffff'
    },

    overviewCard: {
        width: '48.5%',
        backgroundColor: '#F8F9FA',
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: '#D3D5D7'
    },

    iconBox: {
        width: 24,
        height: 24,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    overviewLabel: {
        fontSize: 12.5,
        fontWeight: '300',
        color: '#000000'
    },

    overviewValue: {
        fontSize: 12.5,
        fontWeight: '500',
        color: '#000000'
    },

    stickyTabWrapper: {
        backgroundColor: '#FFFFFF',
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        borderTopWidth: 1,
        borderTopColor: '#D3D5D7'
    },

    tabBarScroll: {
        gap: 2
    },

    tabItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        gap: 8,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent'
    },

    tabItemActive: {
        borderBottomColor: '#1A7FC1'
    },

    tabText: {
        fontSize: 13.5,
        color: '#7E8387'
    },

    tabTextActive: {
        color: '#185FA5'
    },

    badgeCount: {
        backgroundColor: '#E3F2FD',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginLeft: -4
    },

    badgeCountText: {
        fontSize: 12,
        color: '#1A7FC1'
    },

    tabContentContainer: {
        minHeight: 300
    },

    footer: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#D3D5D7'
    },

    btnPrimary: {
        backgroundColor: '#1A7FC1',
        height: 44,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 6
    },

    btnPrimaryText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600'
    },

    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        gap: 6
    },

    btnFooterHalf: {
        height: 44,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#1A7FC1',
        borderWidth: 1,
        borderColor: '#1A7FC1',
        paddingHorizontal: 38
    },

    btnHalfText: {
        color: '#FFFFFF',
        fontSize: 13.5,
        fontWeight: '500'
    }
});

export default styles;