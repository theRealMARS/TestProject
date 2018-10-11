import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import UpperTabNavigator from './UpperTabNavigator';

export default createSwitchNavigator({
    Main: UpperTabNavigator
});