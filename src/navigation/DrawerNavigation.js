import { createDrawerNavigator } from "@react-navigation/drawer";
import RootStack from "./RootStack";
import SideMenu from "./SideMenu";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <SideMenu {...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'front'
            }}
        >
            <Drawer.Screen name="MainRoot" component={RootStack} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;