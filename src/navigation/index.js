import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './routes';

const Router = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default Router;
