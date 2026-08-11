import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import ProfileScreen from '../screens/userInfoScreen/ProfileScreen';
import UpdateProfile from '../screens/userInfoScreen/UpdateProfile';
import ChangePasswordScreen from '../screens/userInfoScreen/ChangePasswordScreen';
import DefaultHeader from '../components/header/DefaultHeader';
import FormCustomerScreen from '../screens/customerScreen/FormCustomerScreen';
import FormContactScreen from '../screens/customerScreen/FormContactScreen';
import SelectContactScreen from '../screens/customerScreen/SelectContactScreen';
import AnniversaryScreen from '../screens/customerScreen/AnniversaryScreen';
import FormAnniversaryScreen from '../screens/customerScreen/FormAnniversaryScreen';
import AddMemberScreen from '../screens/opportunityScreen/AddMemberScreen';
import DetailOpportunityScreen from '../screens/opportunityScreen/detailOpportunityScreen/DetailOpportunityScreen';
import CreateOpportunityScreen from '../screens/opportunityScreen/CreateOpportunityScreen';

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
                name="Profile"
                component={ProfileScreen}
                options={{ headerTitle: 'Thông tin cá nhân' }}
            />

            <Stack.Screen
                name="UpdateProfile"
                component={UpdateProfile}
                options={{ headerTitle: 'Cập nhật thông tin tài khoản' }}
            />

            <Stack.Screen
                name="ChangePassword"
                component={ChangePasswordScreen}
                options={{ headerTitle: 'Đổi mật khẩu' }}
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

            <Stack.Screen
                name="AddMemberScreen"
                component={AddMemberScreen}
                options={{ headerTitle: 'Thêm thành viên tham gia' }}
            />

            <Stack.Screen
                name="DetailOpportunityScreen"
                component={DetailOpportunityScreen}
                options={{ headerTitle: 'Chi tiết cơ hội kinh doanh' }}
            />

            <Stack.Screen
                name="CreateOpportunityScreen"
                component={CreateOpportunityScreen}
                options={{ headerTitle: 'Thêm mới cơ hội kinh doanh' }}
            />
        </Stack.Navigator>
    );
};

export default RootStack;