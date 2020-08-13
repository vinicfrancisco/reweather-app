import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';
import Search from '~/pages/Search';
import City from '~/pages/City';

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
    <App.Screen name="Search" component={Search} />
    <App.Screen name="City" component={City} />
  </App.Navigator>
);

export default AppRoutes;
