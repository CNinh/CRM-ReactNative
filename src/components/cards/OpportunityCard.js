import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IcBuilding from '../../assets/icons/building.svg';
import IcHistory from '../../assets/icons/history.svg';
import IcClock from '../../assets/icons/clock.svg';
import IcPlus from '../../assets/icons/plus.svg';
import IcBox from '../../assets/icons/box.svg';
import IcAdd from '../../assets/icons/add.svg';
import AvatarGroup from "../avatars/AvatarGroup";

const OpportunityCard = ({ item, type = 'opportunity', onButtonPress }) => {
    const navigation = useNavigation();
    const service = item?.services || [];
    const displayServices = service.slice(0, 2);
    const otherServices = service.length - 2;

    const formatCurrency = (value) => {
        if (!value) return "0 đ";
        if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)} tỷ`;
        if (value >= 1000000) return `${(value / 1000000).toFixed(0)} triệu`;
        return `${value.toLocaleString('vi-VN')} đ`;
    };

    const handlePressCard = () => {
        navigation.navigate('DetailOpportunityScreen', { item });
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePressCard}
        >
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <View style={[styles.statusTag, { backgroundColor: '#008BB2' }]}>
                        <Text style={styles.statusText}>{item?.stage}</Text>
                    </View>
                    <View style={styles.cardTime}>
                        <IcClock width={14} height={14} color="#000000" />
                        <Text style={styles.timeText}>{item?.date} · {item?.time}</Text>
                    </View>
                </View>

                <Text style={styles.titleText} numberOfLines={2}>
                    {item?.code} {item?.name}
                </Text>

                <View style={styles.infoRow}>
                    <IcBuilding width={22} height={22} color="#C62828" />
                    <Text style={styles.deptText}>{item?.dept}</Text>
                </View>

                <View style={styles.tagGroup}>
                    {displayServices.map((srv, idx) => (
                        <View key={idx} style={styles.serviceTag}>
                            <IcBox width={12} height={12} color="#000000" />
                            <Text style={styles.serviceText}>{srv}</Text>
                        </View>
                    ))}
                    {otherServices > 0 && (
                        <View style={[styles.serviceTag, { backgroundColor: '#c7e1fa', borderColor: '#185FA5' }]}>
                            <IcPlus width={14} height={14} color="#185FA5" />
                            <Text style={[styles.serviceText, { color: '#185FA5' }]}>
                                {otherServices} dịch vụ khác
                            </Text>
                        </View>
                    )}
                </View>

                <Text style={styles.valueText}>
                    Giá trị dự kiến: <Text style={styles.boldGreen}>{formatCurrency(item?.expectedValue)}</Text> - Xác xuất chốt <Text style={styles.boldOrange}>{item?.probability},00 %</Text>
                </Text>

                <View style={styles.cardFooter}>
                    <AvatarGroup members={item?.staff || []} maxDisplay={3} />

                    <TouchableOpacity
                        style={[
                            styles.btnAction,
                            type === 'home' ? styles.btnActionHome : styles.btnActionOpportunity
                        ]}
                        onPress={onButtonPress}
                    >
                        {type === 'home' ? (
                            <>
                                <IcHistory width={16} height={16} color="#ffffff" />
                                <Text style={styles.btnText}>Nhật ký</Text>
                            </>
                        ) : (
                            <>
                                <IcAdd width={20} height={20} color="#ffffff" />
                                <Text style={styles.btnText}>Thêm thành viên</Text>
                            </>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
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
        paddingHorizontal: 5,
        paddingVertical: 4,
        borderRadius: 8
    },

    statusText: {
        fontSize: 11,
        color: '#ffffff'
    },

    cardTime: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        gap: 4.5
    },

    timeText: {
        fontSize: 11,
        color: '#000000'
    },

    titleText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#0284C7',
        paddingHorizontal: 12,
        marginHorizontal: 2,
        marginTop: -2
    },

    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 12,
        marginBottom: 4,
        marginLeft: -4
    },

    deptText: {
        fontSize: 13,
        color: '#DC2626'
    },

    tagGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        paddingHorizontal: 12,
        marginHorizontal: 2,
        marginBottom: 4
    },

    serviceTag: {
        backgroundColor: '#E4E6E9',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: '#E5E7EB',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },

    serviceText: {
        fontSize: 11,
        fontWeight: '300',
        color: '#000000'
    },

    valueText: {
        fontSize: 12,
        color: '#000000',
        paddingHorizontal: 12,
        marginBottom: 10
    },

    boldGreen: {
        fontSize: 11,
        fontWeight: '600',
        color: '#16A34A'
    },

    boldOrange: {
        fontSize: 11,
        fontWeight: '600',
        color: '#ea8047'
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#D3D5D7',
        paddingTop: 4,
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
        borderColor: '#ffffff'
    },

    avatarText: {
        fontSize: 11,
        color: '#374151'
    },

    btnAction: {
        backgroundColor: '#0284C7',
        marginRight: -6,
        borderRadius: 8,
        alignItems: 'center'
    },

    btnActionHome: {
        flexDirection: 'row',
        gap: 6,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },

    btnActionOpportunity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        paddingVertical: 2,
        paddingLeft: 10,
        paddingRight: 4
    },

    btnText: {
        color: '#ffffff',
        fontSize: 11,
        marginRight: 6
    }
});

export default OpportunityCard;