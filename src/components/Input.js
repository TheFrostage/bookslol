import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

import {rem} from '../const/dimensions';
import colors from '../styles/colors';

const Input = ({
  value,
  onChangeText,
  showError = false,
  errorMessage = '',
  placeholder,
  rightIcon: RightIcon = null,
  hint = '',
  ...rest
}) => {
  return (
    <View>
      <View style={[styles.container, showError && styles.errorContainer]}>
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={[styles.inputText, !!placeholder && styles.placeholderText]}
            placeholder={placeholder}
            placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
            {...rest}
          />
          {RightIcon}
        </View>
      </View>
      {!!hint && <Text style={styles.hintText}>{hint}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: rem(3),
    borderBottomColor: colors.darkBlue,
    paddingVertical: rem(10),
    paddingLeft: rem(8),
    paddingRight: rem(4),
    marginBottom: rem(16),
    backgroundColor: colors.darkBlue,
    borderRadius: rem(10),
    marginHorizontal: rem(16),
  },
  errorContainer: {
    borderBottomColor: colors.errorRed,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: rem(6),
  },
  labelText: {
    fontSize: rem(13),
    color: colors.xLightBlue,
    letterSpacing: 0,
    lineHeight: rem(20),
  },
  errorMessage: {
    fontSize: rem(11),
    color: colors.errorRed,
    letterSpacing: 0,
    textAlign: 'right',
    lineHeight: rem(18),
  },
  inputText: {
    fontSize: rem(15),
    color: colors.white,
    letterSpacing: 0,
    width: rem(250),
  },
  placeholderText: {
    letterSpacing: rem(0.78),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hintText: {
    opacity: 0.4,
    fontSize: rem(11),
    color: colors.white,
    letterSpacing: rem(0.1),
    lineHeight: rem(15),
    marginBottom: rem(4),
  },
});

export default Input;
