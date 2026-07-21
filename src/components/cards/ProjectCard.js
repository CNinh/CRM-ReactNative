import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IcCalendar from "../../assets/icons/calendar_blank.svg";
import IcBuilding from "../../assets/icons/building.svg";
import IcHistory from "../../assets/icons/history.svg";
import IcUser from "../../assets/icons/user.svg";
import AvatarGroup from "../avatars/AvatarGroup";

const ProjectCard = ({ item, type = 'project' }) => {

    const getRateColor = (rateValue) => {
        if (rateValue >= 80) return '#56A856';
        if (rateValue < 50) return '#C62828';
        return '#E19E2E';
    };

    const rateNum = item?.successRateValue ?? 100;
    const rateStr = item?.successRateText ?? '100,00%';

    const formatCurrency = (value) => {
        if (!value) return "0 triệu";
        if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)} tỷ`;
        if (value >= 1000000) return `${(value / 1000000).toFixed(0)} triệu`;
        return `${value} đ`;
    }

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <View style={[styles.statusTag, { backgroundColor: '#FFBE50' }]}>
                    <Text style={[styles.statusText, { color: type === 'home' ? '#000000' : '#ffffff' }]}>
                        {item?.stage || "Đang thực hiện"}
                    </Text>
                </View>

                {type === 'project' && (
                    <View style={styles.headerDate}>
                        <IcCalendar width={16} height={16} color="#000000" />
                        <Text style={styles.dateText}>{item?.date}</Text>
                    </View>
                )}
            </View>

            <Text style={styles.titleText}>
                {item?.code} {item?.name}
            </Text>

            <View style={[styles.infoRow, { marginLeft: type === 'home' ? -2 : -6 }]}>
                <IcBuilding width={22} height={22} color="#C62828" />
                <Text style={styles.deptText}>
                    {item?.dept}
                </Text>
            </View>

            {type === 'home' ? (
                <View style={styles.financeRow}>
                    <View style={styles.financeTag}>
                        <Text style={styles.financeText}>
                            Chi phí: {formatCurrency(item?.cost)}
                        </Text>
                    </View>
                    <View style={[styles.financeTag, { backgroundColor: '#9ee1b9' }]}>
                        <Text style={[styles.financeText, { color: '#000000' }]}>
                            Doanh thu: {formatCurrency(item?.revenue)}
                        </Text>
                    </View>
                </View>
            ) : (
                <View style={styles.rateContainer}>
                    <Text style={styles.rateLabel}>
                        Tỉ lệ thành công <Text style={[styles.rateValue, { color: getRateColor(rateNum) }]}>{item?.successRate}%</Text>
                    </Text>
                </View>
            )}

            {type === 'home' && (
                <View style={styles.cardFooter}>
                    <AvatarGroup members={item?.staff || []} maxDisplay={3} />

                    <TouchableOpacity style={styles.btnHistory}>
                        <IcHistory width={18} height={18} color="#ffffff" />
                        <Text style={styles.btnText}>Nhật ký</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        paddingBottom: 12,
        marginBottom: 12,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#E5E7EB'
    },

    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginVertical: 8
    },

    statusTag: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 8
    },

    statusText: {
        fontSize: 11
    },

    headerDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4
    },

    dateText: {
        fontSize: 11,
        color: '#000000'
    },

    titleText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#0284C7',
        paddingHorizontal: 12,
        marginTop: -2
    },

    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        paddingHorizontal: 12,
        marginBottom: 4
    },

    deptText: {
        fontSize: 13,
        color: '#DC2626'
    },

    financeRow: {
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 12,
        marginBottom: 10
    },

    financeTag: {
        backgroundColor: '#E4E6E9',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#E5E7EB'
    },

    financeText: {
        fontSize: 11,
        color: '#000000'
    },

    rateContainer: {
        paddingHorizontal: 12,
        marginVertical: -4
    },

    rateLabel: {
        fontSize: 12,
        color: '#000000'
    },

    rateValue: {
        fontSize: 12,
        fontWeight: '500'
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#D3D5D7',
        paddingTop: 8,
        paddingHorizontal: 12,
        marginBottom: -4
    },

    avatarGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatarCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1A7FC1'
    },

    avatarText: {
        fontSize: 11,
        color: '#ffffff'
    },

    btnHistory: {
        flexDirection: 'row',
        gap: 6,
        backgroundColor: '#0284C7',
        paddingHorizontal: 12,
        paddingVertical: 5,
        marginRight: -6,
        borderRadius: 8,
        alignItems: 'center'
    },

    btnText: {
        color: '#ffffff',
        fontSize: 11,
        marginRight: 6
    }
});

export default ProjectCard;