import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import commonStyles from './../styles/commonStyles';
import colors from '../styles/colors';

const Container = ({children}) => {
  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <StatusBar barStyle={'light-content'} />
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={[
          colors.xLightBlue,
          colors.lightBlue,
          colors.blue,
          colors.purple,
        ]}
        style={commonStyles.background}
      />
      {children}
    </SafeAreaView>
  );
};

export default Container;
