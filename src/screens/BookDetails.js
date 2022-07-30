import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from '../components';
import {selectCurrentBook} from '../store/selectors/books';
import {fetchBookById} from '../store/actions/books';

import commonStyles from '../styles/commonStyles';
import {rem} from '../const/dimensions';
import colors from '../styles/colors';

const BookDetails = () => {
  const {params} = useRoute();
  const dispatch = useDispatch();

  const data = useSelector(selectCurrentBook);

  useEffect(() => {
    (async () => {
      if (params?.id) {
        await dispatch(fetchBookById(params?.id));
      }
    })();
  }, [dispatch, params?.id]);

  if (!data) {
    return (
      <Container>
        <View style={commonStyles.centeredContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView style={styles.container}>
        <View style={styles.imageRow}>
          <Image source={{uri: data.coverImageUrl}} style={styles.image} />
          <View>
            <Text style={styles.titleText}>{data.title}</Text>
            <Text style={styles.authorText}>
              {data.author + ' | ' + data.publisher}
            </Text>
          </View>
        </View>
        <Text style={styles.descriptionText}>{data.synopsis}</Text>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: rem(16),
    paddingHorizontal: rem(16),
  },
  imageRow: {
    flexDirection: 'row',
    marginBottom: rem(16),
  },
  image: {
    width: rem(120),
    aspectRatio: 0.75,
    borderRadius: rem(6),
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.darkBlue,
    marginRight: rem(8),
  },
  titleText: {
    fontSize: rem(20),
    width: rem(190),
    color: colors.white,
    marginBottom: rem(8),
  },
  authorText: {
    fontSize: rem(12),
    color: colors.white,
  },
  descriptionText: {
    fontSize: rem(16),
    color: colors.white,
  },
});

export default BookDetails;
