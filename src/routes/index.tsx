import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import City from '~/pages/City';

import HomeScreen from './home.routes';

import colors from '~/styles/colors';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: colors.softBlack },
    }}
  >
    <App.Screen name="Home" component={HomeScreen} />

    <App.Screen name="City" component={City} />
  </App.Navigator>
);

export default AppRoutes;
