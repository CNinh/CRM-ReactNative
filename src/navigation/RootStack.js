import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import DefaultHeader from '../components/header/DefaultHeader';
import FormCustomerScreen from '../screens/customerScreen/FormCustomerScreen';
import FormContactScreen from '../screens/customerScreen/FormContactScreen';
import SelectContactScreen from '../screens/customerScreen/SelectContactScreen';
import AnniversaryScreen from '../screens/customerScreen/AnniversaryScreen';
import FormAnniversaryScreen from '../screens/customerScreen/FormAnniversaryScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ header: (props) => <DefaultHeader {...props} /> }}>
            <Stack.Screen 
                name="MainTabs" 
                component={BottomTabNavigation} 
                options={{ headerShown: false }} 
            />

            <Stack.Screen
                name="FormCustomer"
                component={FormCustomerScreen}
                options={({ route }) => ({
                    headerTitle: route.params?.customerData
                        ? 'Cập nhật thông tin khách hàng'
                        : 'Thêm mới khách hàng'
                })}
            />
            <Stack.Screen
                name="FormContactScreen"
                component={FormContactScreen}
                options={({ route }) => ({
                    headerTitle: route.params?.contactData
                        ? 'Cập nhật thông tin liên hệ'
                        : 'Thêm người liên hệ'
                })}
            />
            <Stack.Screen
                name="SelectContactScreen"
                component={SelectContactScreen}
                options={{ headerTitle: 'Thêm thông tin người liên hệ' }}
            />
            <Stack.Screen
                name="AnniversaryScreen"
                component={AnniversaryScreen}
                options={({ route }) => {
                    const { customer } = route.params || {};
                    const displayCustomer = customer ? `${customer}` : '';
                    
                    return {
                        headerTitle: `Ngày kỷ niệm: ${displayCustomer}`,
                        headerTitleStyle: {
                            fontSize: 16,
                            fontWeight: '500'
                        }
                    };
                }}
            />
            <Stack.Screen
                name="FormAnniversaryScreen"
                component={FormAnniversaryScreen}
                options={({ route }) => ({
                    headerTitle: route.params?.anniversaryData
                        ? 'Cập nhật ngày kỷ niệm'
                        : 'Thêm ngày kỷ niệm'
                })}
            />
        </Stack.Navigator>
    );
};

export default RootStack;