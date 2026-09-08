import { useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./HomeScreen.style";
import HomeGeneralView from "./HomeGeneralView";
import HomePlanView from "./HomePlanView";
import { user } from "../../data/mockData";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('summary');

    // Get today's formatted date string (DD/MM/YYYY)
    const getFormattedDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        navigation.setOptions({});
    }, [activeTab, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Greeting & Date */}
            <View style={styles.greetingContainer}>
                <View style={styles.greetingLeft}>
                    <Text style={styles.greetingTitle}>
                        Xin chào, {user.fullName?.split(' ').pop() || 'bạn'} 👋
                    </Text>
                    <Text style={styles.greetingSubtitle}>
                        Chúc bạn một ngày làm việc hiệu quả!
                    </Text>
                </View>
                <View style={styles.dateBadge}>
                    <Text style={styles.dateBadgeText}>{getFormattedDate()}</Text>
                </View>
            </View>

            {/* Segmented Control: Tổng quát | Kế hoạch */}
            <View style={styles.subTabBarWrapper}>
                <View style={styles.subTabBar}>
                    <TouchableOpacity
                        style={[styles.subTab, activeTab === 'summary' && styles.subTabActive]}
                        onPress={() => setActiveTab('summary')}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.subTabText, activeTab === 'summary' && styles.subTabTextActive]}>
                            Tổng quát
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.subTab, activeTab === 'plan' && styles.subTabActive]}
                        onPress={() => setActiveTab('plan')}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.subTabText, activeTab === 'plan' && styles.subTabTextActive]}>
                            Kế hoạch
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Content Body */}
            <View style={styles.contentBody}>
                {activeTab === 'summary' ? (
                    <HomeGeneralView />
                ) : (
                    <HomePlanView navigation={navigation} />
                )}
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;