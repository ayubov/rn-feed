import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Root from './navigation';
import { setupStore } from './store';

const store = setupStore();

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <Root />
    </Provider>
    <StatusBar />
  </SafeAreaProvider>
);

export default App;
