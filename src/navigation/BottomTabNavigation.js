import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import CustomerScreen from "../screens/customerScreen/CustomerScreen";
import OpportunityStack from "./OpportunityStack";
import ProjectStack from "./ProjectStack";
import HomeStack from "./HomeStack";
import IcSummary from "../assets/icons/summary.svg";
import IcCustomer from "../assets/icons/customer.svg";
import IcOpportunity from "../assets/icons/opportunity.svg";
import IcProject from "../assets/icons/project.svg";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveColor: '#185FA5',
            tabBarInactiveColor: '#7E8387',
            tabBarStyle: {
                backgroundColor: '#ffffff',
                borderTopWidth: 1,
                borderTopColor: '#e0e0e0',
                height: 70,
                paddingTop: 10,
                paddingBottom: 10
            },
            tabBarLabelStyle: {
                fontSize: 14,
                marginTop: 2
            },
            tabBarIcon: ({ focused, color }) => {
                const iconProps = {
                    width: 28,
                    height: 28,
                    color: color
                };

                if (route.name === 'Tổng quát') {
                    return <IcSummary {...iconProps} />
                } else if (route.name === 'Khách hàng') {
                    return <IcCustomer {...iconProps} />
                } else if (route.name === 'Cơ hội') {
                    return <IcOpportunity {...iconProps} />
                } else if (route.name === 'Dự án') {
                    return <IcProject {...iconProps} />
                }
                return null;
            },
          })}
        >
            <Tab.Screen name="Tổng quát" component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name="Khách hàng" component={CustomerScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Cơ hội" component={OpportunityStack} options={{ headerShown: false }} />
            <Tab.Screen name="Dự án" component={ProjectStack} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;