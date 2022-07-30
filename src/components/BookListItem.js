import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import {rem, vrem} from '../const/dimensions';

import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

const BookListItem = ({item, onPress}) => {
  const onPressItem = () => onPress(item.id);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPressItem}
      activeOpacity={0.8}>
      <Image source={{uri: item.coverImageUrl}} style={styles.image} />
      <View style={commonStyles.flex}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <View>
            <Text style={styles.authorText}>{item.author}</Text>
            <Text style={styles.authorText}>{item.publisher}</Text>
          </View>
        </View>
        <Text style={styles.descriptionText} numberOfLines={10}>
          {item.synopsis}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: rem(15),
    backgroundColor: colors.white,
    marginVertical: vrem(5),
    paddingVertical: vrem(8),
    paddingHorizontal: rem(8),
  },
  titleText: {
    fontSize: rem(16),
    maxWidth: rem(110),
    color: colors.blue,
  },
  image: {
    width: rem(80),
    aspectRatio: 0.75,
    borderRadius: rem(6),
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.darkBlue,
    marginRight: rem(8),
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authorText: {
    fontSize: rem(12),
    textAlign: 'right',
    maxWidth: rem(120),
  },
  descriptionText: {
    marginTop: vrem(8),
  },
});

export default BookListItem;
