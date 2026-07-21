import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefaultHeader from "../components/header/DefaultHeader";
import OpportunityScreen from "../screens/opportunityScreen/OpportunityScreen";

const Stack = createNativeStackNavigator();

const OpportunityStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ header: (props) => <DefaultHeader {...props} /> }}
        >
            <Stack.Screen
                name="Opportunity"
                component={OpportunityScreen}
                options={{
                    headerTitle: 'Cơ hội kinh doanh',
                    unreadNotification: 14
                }}
            />
        </Stack.Navigator>
    );
};

export default OpportunityStack;