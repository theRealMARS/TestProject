import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';

export default createSwitchNavigator({
    Main: BottomTabNavigator,
});