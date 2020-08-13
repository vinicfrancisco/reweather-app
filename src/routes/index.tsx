import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';
import colors from '~/styles/colors';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: colors.softBlack },
    }}
  >
    <App.Screen name="Home" component={Home} />
  </App.Navigator>
);

export default AppRoutes;
