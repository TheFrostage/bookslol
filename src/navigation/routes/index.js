import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './MainStack';
import screenNames from '../screenNames';
import {withoutHeader} from '../options';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.MAIN_STACK}
        component={MainStack}
        options={withoutHeader()}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
