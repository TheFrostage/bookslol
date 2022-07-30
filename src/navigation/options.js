import colors from '../styles/colors';

export const withoutHeader = () => ({headerShown: false});

export const defaultHeaderOptions = {
  headerStyle: {
    backgroundColor: colors.darkBlue,
  },
  headerTintColor: colors.white,
  headerTruncatedBackTitle: 'Back',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
