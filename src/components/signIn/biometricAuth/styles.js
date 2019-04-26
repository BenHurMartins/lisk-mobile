import { StyleSheet } from 'react-native';
import { colors, fonts, boxes } from '../../../constants/styleGuide';
import { deviceHeight } from '../../../utilities/device';

const height = deviceHeight();

const styles = {
  container: {
    height: '100%',
    paddingTop: height <= 640 ? 110 : 170,
  },
  title: {
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    textAlign: 'center',
    color: colors.light.gray2,
    fontSize: fonts.size.base,
    opacity: height <= 640 ? 0 : 1,
  },
  waves: {
    width: '100%',
    height: '100%',
    borderBottomColor: 'transparent',
    borderBottomWidth: 190,
    marginBottom: -190,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authTypeIcon: {
    zIndex: 2,
  },
  linkWrapper: {
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  question: {
    color: colors.light.gray2,
    textAlign: 'center',
    marginRight: 4,
    marginBottom: 5,
  },
  fillWidth: {
    width: '100%',
  },
  error: {
    color: colors.light.red,
  },
  invisible: {
    color: 'transparent',
  },
  button: {
    height: 47,
    marginHorizontal: boxes.boxPadding,
  },
  buttonManualSignIn: {
    marginTop: 16,
  },
};

export default StyleSheet.create(styles);
