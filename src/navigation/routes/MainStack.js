import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import screenNames from '../screenNames';
import {BookList, Landing, BookDetails} from '../../screens';
import {defaultHeaderOptions, withoutHeader} from '../options';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.LANDING}
        component={Landing}
        options={withoutHeader()}
      />
      <Stack.Screen
        name={screenNames.BOOK_LIST}
        component={BookList}
        options={withoutHeader()}
      />
      <Stack.Screen
        name={screenNames.BOOK_DETAILS}
        component={BookDetails}
        options={defaultHeaderOptions}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
