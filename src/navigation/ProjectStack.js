import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefaultHeader from "../components/header/DefaultHeader";
import ProjectScreen from "../screens/projectScreen/ProjectScreen";

const Stack = createNativeStackNavigator();

const ProjectStack = () => {
    return (
        <Stack.Navigator
            screenOptions = {{ header: (props) => <DefaultHeader {...props} /> }}
        >
            <Stack.Screen
                name="Project"
                component={ProjectScreen}
                options={{
                    headerTitle: 'Dự án',
                    unreadNotification: 14
                }}
            />
        </Stack.Navigator>
    );
};

export default ProjectStack;