import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IcBuilding from '../../assets/icons/building.svg';
import IcLocation from '../../assets/icons/location.svg';
import { useState } from "react";

const PlanCard = ({ item }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const fullDescription = item.description && item.description.trim() !== ""
        ? item.description
        : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,...";

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.timeText}>{item.time}</Text>

            <View style={styles.rightContainer}>
                <View style={[styles.director, { backgroundColor: '#008BB2' }]}>
                    <Text style={styles.directText}>{item.name}</Text>
                </View>

                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.project}>{item.project}</Text>

                <View style={styles.company}>
                    <IcBuilding width={26} height={26} color="#C62828" />
                    <Text style={styles.compText}>{item.company}</Text>
                </View>

                <View style={styles.location}>
                    <IcLocation width={18} height={18} color="#000000" />
                    <Text style={styles.locateText}>{item.address}</Text>
                </View>

                <Text
                    style={styles.description}
                    numberOfLines={isExpanded ? undefined: 2}
                >
                    Nội dung: {fullDescription}
                </Text>

                <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                    <Text style={styles.toggleText}>
                        {isExpanded ? "Thu gọn" : "Xem thêm"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 12,
        marginHorizontal: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB'
    },

    timeText: {
        fontSize: 14,
        color: '#000000',
        padding: 12,
        borderRightWidth: 1,
        borderColor: "#E5E7EB"
    },

    rightContainer: {
        flex: 1,
        paddingHorizontal: 12,
        marginVertical: 8
    },

    director: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8
    },

    directText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#ffffff'
    },

    title: {
        fontSize: 13,
        color: '#000000',
        marginVertical: 4
    },

    project: {
        fontSize: 13,
        color: '#0284C7'
    },

    company: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        marginVertical: -1
    },

    compText: {
        fontSize: 13,
        color: '#DC2626'
    },

    location: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        paddingHorizontal: 4,
        marginTop: 3,
        marginBottom: 6 
    },

    locateText: {
        fontSize: 11,
        color: '#000000'
    },

    description: {
        fontSize: 11,
        color: '#7E7387',
        paddingHorizontal: 6
    },

    toggleText: {
        fontSize: 11,
        color: '#4AA0DF',
        marginBottom: 4,
        marginLeft: 6
    }
});

export default PlanCard;