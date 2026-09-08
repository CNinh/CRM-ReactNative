import i18next from './src/localization/i18n';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BackHandler, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import colors from './src/constants/colors';

const App = () => {
  // Tắt vuốt mặc định của android
  useEffect(() => {
    const onBackPress = () => {
      return true;
    };

    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => subscription.remove();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <I18nextProvider i18n={i18next}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <StatusBar
                barStyle="light-content"
                backgroundColor={colors.primaryDark}
                translucent={false}
              />
              <SafeAreaView style={styles.container}>
                <NavigationContainer>
                  <DrawerNavigation />
                </NavigationContainer>
                <Toast />
              </SafeAreaView>
            </GestureHandlerRootView>
          </I18nextProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
