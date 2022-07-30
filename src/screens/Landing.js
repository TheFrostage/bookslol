import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-ui-lib/core';

import screenNames from '../navigation/screenNames';
import {Container} from '../components';

import commonStyles from '../styles/commonStyles';
import {vrem, rem} from '../const/dimensions';
import colors from '../styles/colors';

const Landing = ({navigation}) => {
  const onPressBookList = () => {
    navigation.navigate(screenNames.BOOK_LIST);
  };

  return (
    <Container>
      <View style={commonStyles.paddedContainer}>
        <View style={styles.textContainer}>
          <Text style={[commonStyles.text1, styles.title]}>
            Welcome to my little sample app!
          </Text>
          <Text style={[commonStyles.text4, styles.description]}>
            This was done in a hurry, apologies for the simplicity :)
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <Button
            onPress={onPressBookList}
            backgroundColor={colors.darkBlue}
            label={'See books'}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: vrem(100),
  },
  title: {
    color: colors.white,
    marginBottom: vrem(20),
  },
  description: {
    color: colors.white,
    paddingHorizontal: rem(50),
  },
  footerContainer: {
    marginTop: vrem(200),
    width: '100%',
  },
});

export default Landing;
