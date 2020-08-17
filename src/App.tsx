import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';
import Routes from './routes';

import colors from './styles/colors';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="light-content"
      backgroundColor={colors.black}
      translucent
    />

    <AppProvider>
      <Routes />
    </AppProvider>
  </NavigationContainer>
);

export default App;
