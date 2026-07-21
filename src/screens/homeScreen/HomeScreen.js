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

const HomeScreen = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('summary');

    useEffect(() => {
        navigation.setOptions({

        });
    }, [activeTab]);

    return (
        /* Tổng quát | Kế hoạch */
        < SafeAreaView style={styles.container} >
            <View style={styles.subTabBar}>
                <TouchableOpacity
                    style={[styles.subTab, activeTab === 'summary' && styles.subTabActive]}
                    onPress={() => setActiveTab('summary')}
                >
                    <Text style={[styles.subTabText, activeTab === 'summary' && styles.subTabTextActive]}>Tổng quát</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.subTab, activeTab === 'plan' && styles.subTabActive]}
                    onPress={() => setActiveTab('plan')}
                >
                    <Text style={[styles.subTabText, activeTab === 'plan' && styles.subTabTextActive]}>Kế hoạch</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.contentBody}>
                {activeTab === 'summary' ? (
                    <HomeGeneralView />
                ) : (
                    <HomePlanView />
                )}
            </View>
        </ SafeAreaView>
    );
};

export default HomeScreen;