import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import DefaultHeader from "../components/header/DefaultHeader";
import CustomerScreen from "../screens/customerScreen/CustomerScreen";
import CreateCustomerScreen from "../screens/customerScreen/FormCustomerScreen";
import FormContactScreen from "../screens/customerScreen/FormContactScreen"; 
import SelectContactScreen from "../screens/customerScreen/SelectContactScreen";

const Stack = createNativeStackNavigator();

const CustomerStack = ({ navigation, route }) => {

    return (
        <Stack.Navigator
            screenOptions={{ header: (props) => <DefaultHeader {...props} /> }}

        >
            <Stack.Screen
                name="Customer"
                component={CustomerScreen}
                options={{
                    headerTitle: 'Khách hàng',
                    unreadNotification: 14
                }}
            />
        </Stack.Navigator>
    );
};

export default CustomerStack;