import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import InfoScreen from '../screens/infoScreen/InfoScreen';
import SettingScreen from '../screens/settingScreen/SettingScreen';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-paper';
import colors from '../constants/colors';
import {useTranslation} from 'react-i18next';
import DefaultText from '../components/texts/DefaultText';
import {getLabelByKey} from '../realm/LabelLanguageStorageServices';
import useLocaleLabel from '../hooks/useLocaleLabel';

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontFamily: 'helveticaneuelight',
    textTransform: 'uppercase',
  },
  headerTitleAlign: 'center',
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: '#fff',
  },
};

const BottomTabs = () => {
  const getValueByKeyAndLocale = useLocaleLabel();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: getValueByKeyAndLocale('P_Bottom_Tab_Home'),
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  source="home"
                  size={24}
                  color={focused ? colors.primary : colors.secondary}
                />
                <DefaultText
                  text={getValueByKeyAndLocale('P_Bottom_Tab_Home')}
                  style={{
                    fontSize: 12,
                    color: focused ? colors.primary : colors.secondary,
                  }}></DefaultText>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: getValueByKeyAndLocale('P_Bottom_Tab_Info'),
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.primary,
                  width: Platform.OS == 'ios' ? 50 : 60,
                  height: Platform.OS == 'ios' ? 50 : 60,
                  top: Platform.OS == 'ios' ? -10 : -20,
                  borderRadius: Platform.OS == 'ios' ? 25 : 30,
                }}>
                <Icon source="information" size={28} color={colors.white} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: getValueByKeyAndLocale('P_Bottom_Tab_Setting'),
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  source="cog"
                  size={24}
                  color={focused ? colors.primary : colors.secondary}
                />
                <DefaultText
                  text={getValueByKeyAndLocale('P_Bottom_Tab_Setting')}
                  style={{
                    fontSize: 12,
                    color: focused ? colors.primary : colors.secondary,
                  }}></DefaultText>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
