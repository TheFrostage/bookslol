import {entireScreenHeight, entireScreenWidth, rem} from '../const/dimensions';
import colors from './colors';

const commonStyles = {
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  paddedContainer: {
    flex: 1,
    paddingHorizontal: rem(16),
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: entireScreenWidth,
    height: entireScreenHeight,
    zIndex: -1,
  },
  text1: {
    textAlign: 'center',
    fontSize: rem(30),
    color: colors.white,
  },
  text2: {
    textAlign: 'center',
    fontSize: rem(24),
    color: colors.white,
  },
  text3: {
    textAlign: 'center',
    fontSize: rem(16),
    color: colors.white,
  },
  text4: {
    textAlign: 'center',
    fontSize: rem(14),
    color: colors.white,
  },
  errorText: {
    fontSize: rem(14),
    color: colors.white,
  },
};

export default commonStyles;
