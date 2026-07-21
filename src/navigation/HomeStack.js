import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefaultHeader from "../components/header/DefaultHeader";
import HomeScreen from "../screens/homeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ header: (props) => <DefaultHeader {...props} /> }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: 'Tổng quát',
                    unreadNotification: 14 
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;