import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigator from '~/config/NavigationSettings';
import store, { persistor } from '~/redux/store';
import globalColors from '~/config/Colors';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={globalColors.backgroundColorApp}
        />
        <Navigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
