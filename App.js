import i18next from './src/localization/i18n';
import React, {useState} from 'react';
import {I18nextProvider, useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import ConfirmModalTest from './src/test-utils/test-component/ConfirmModalTest';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import LoginScreen from './src/screens/loginScreen/LoginScreen';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <I18nextProvider i18n={i18next}>
            <SafeAreaView style={styles.container}>
              <NavigationContainer>
                {/* <LoginScreen /> */}
                <BottomTabNavigation />
              </NavigationContainer>
              <Toast />
            </SafeAreaView>
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
    fontFamily: 'helveticaneue',
    fontStyle: 'italic',
  },
});
