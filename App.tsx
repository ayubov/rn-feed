import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Root from 'navigation';

const App = () => (
  <SafeAreaProvider>
    <Root />
    <StatusBar />
  </SafeAreaProvider>
);

export default App;
