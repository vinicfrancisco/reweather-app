import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';
import Search from '~/pages/Search';

import colors from '~/styles/colors';

const HomeStack = createStackNavigator();

const HomeScreen: React.FC = () => (
  <HomeStack.Navigator
    mode="modal"
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: colors.softBlack },
    }}
  >
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Search" component={Search} />
  </HomeStack.Navigator>
);

export default HomeScreen;
