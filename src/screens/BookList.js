import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  ActivityIndicator,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import {fetchBookList} from '../store/actions/books';
import {BookListItem, Container, Input} from '../components';

import {selectBookList} from '../store/selectors/books';
import {rem} from '../const/dimensions';
import screenNames from '../navigation/screenNames';

import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {hitSlop10} from '../styles/hitSlop';

const SearchIcon = <Icon name="search" size={rem(20)} color={colors.white} />;
const ClearInputIcon = <Icon name="x" size={rem(20)} color={colors.white} />;

const BookList = ({navigation}) => {
  const dispatch = useDispatch();

  const books = useSelector(selectBookList);

  const [searchValue, setSearchValue] = useState('');
  const [usedQuery, setUsedQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(fetchBookList());
      setLoading(false);
    })();
  }, [dispatch]);

  const onPressBook = id => {
    navigation.navigate(screenNames.BOOK_DETAILS, {id});
  };

  const renderBooks = () =>
    books?.length ? (
      <ScrollView style={commonStyles.paddedContainer}>
        {books.map(book => (
          <BookListItem key={book.id} item={book} onPress={onPressBook} />
        ))}
      </ScrollView>
    ) : (
      !!usedQuery && (
        <View style={commonStyles.centeredContainer}>
          <Text
            style={
              commonStyles.text3
            }>{`No books found using query "${usedQuery}".\nPlease try searching for something else.`}</Text>
        </View>
      )
    );

  const clearSearchValue = async () => {
    setSearchValue('');
    setLoading(true);
    await dispatch(fetchBookList());
    setLoading(false);
  };

  const onSubmitSearch = async () => {
    setLoading(true);
    setUsedQuery(searchValue);
    await dispatch(fetchBookList(searchValue));
    setLoading(false);
  };

  const renderInputIcons = () => (
    <View style={commonStyles.row}>
      {!!searchValue && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={clearSearchValue}
          style={styles.clearIcon}
          hitSlop={hitSlop10}>
          {ClearInputIcon}
        </TouchableOpacity>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onSubmitSearch}
        style={styles.clearIcon}
        hitSlop={hitSlop10}>
        {SearchIcon}
      </TouchableOpacity>
    </View>
  );

  return (
    <Container>
      <Input
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Search books..."
        rightIcon={renderInputIcons()}
        onSubmitEditing={onSubmitSearch}
      />
      {loading ? (
        <View style={commonStyles.centeredContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        renderBooks()
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  iconsRow: {
    flexDirection: 'row',
  },
  clearIcon: {
    marginRight: rem(8),
  },
});

export default BookList;
