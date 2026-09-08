import React from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OpportunityStack from "./OpportunityStack";
import ProjectStack from "./ProjectStack";
import HomeStack from "./HomeStack";
import CustomerStack from "./CustomerStack";
import colors from "../constants/colors";
import theme from "../constants/theme";

import IcSummary from "../assets/icons/summary.svg";
import IcCustomer from "../assets/icons/customer.svg";
import IcOpportunity from "../assets/icons/opportunity.svg";
import IcProject from "../assets/icons/project.svg";

const Tab = createBottomTabNavigator();

// Custom Tab Bar for clean visual presentation and active indicator
const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const renderIcon = (color) => {
                    const iconProps = {
                        width: 24,
                        height: 24,
                        color: color,
                    };

                    switch (route.name) {
                        case 'Tổng quát':
                            return <IcSummary {...iconProps} />;
                        case 'Khách hàng':
                            return <IcCustomer {...iconProps} />;
                        case 'Cơ hội':
                            return <IcOpportunity {...iconProps} />;
                        case 'Dự án':
                            return <IcProject {...iconProps} />;
                        default:
                            return null;
                    }
                };

                const activeColor = colors.primary;
                const inactiveColor = colors.gray500;

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabButton}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.tabContent, isFocused && styles.tabContentActive]}>
                            {renderIcon(isFocused ? activeColor : inactiveColor)}
                            <Text
                                style={[
                                    styles.tabLabel,
                                    { color: isFocused ? activeColor : inactiveColor },
                                    isFocused && styles.tabLabelActive,
                                ]}
                                numberOfLines={1}
                            >
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            backBehavior="none"
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="Tổng quát" component={HomeStack} />
            <Tab.Screen name="Khách hàng" component={CustomerStack} />
            <Tab.Screen name="Cơ hội" component={OpportunityStack} />
            <Tab.Screen name="Dự án" component={ProjectStack} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.gray200,
        height: Platform.OS === 'ios' ? 76 : 64,
        paddingBottom: Platform.OS === 'ios' ? 18 : 6,
        paddingTop: 6,
        paddingHorizontal: 8,
        justifyContent: 'space-around',
        alignItems: 'center',
        ...theme.shadows.md,
    },

    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
    },

    tabContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: theme.radius.md,
    },

    tabContentActive: {
        backgroundColor: colors.primarySubtle,
    },

    tabLabel: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 3,
    },

    tabLabelActive: {
        fontWeight: '700',
    },
});

export default BottomTabNavigation;