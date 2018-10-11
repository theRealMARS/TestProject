import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabBarIcon from '../components/TabBarIcon';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
};

export default createBottomTabNavigator({
    HomeStack,
    SettingsStack,
});