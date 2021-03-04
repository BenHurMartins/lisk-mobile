import { Platform, Dimensions, NativeModules } from 'react-native';
// import { Header } from 'react-navigation';
import DeviceInfo from 'react-native-device-info';
import { Appearance } from 'react-native-appearance/src/index.tsx';

const { width, height } = Dimensions.get('window');
const Header = { HEIGHT: 40 };

/**
 * Returns a simple string defining the device type
 *
 * @returns {String} - iOSx for iPhoneX, iOS for the rest of iPhones
 *  and android for all the android phones
 */

/**
 * List of Apple's mobile device codes types
 * https://gist.github.com/adamawolf/3048717
 */
const iPhoneXOrSuperiorIDs = [
  'iPhone10,3', // iPhone X Global
  'iPhone10,6', // iPhone X GSM
  'iPhone11,2', // iPhone Xs
  'iPhone11,4', // iPhone Xs Max
  'iPhone11,6', // iPhone Xs Max Global
  'iPhone11,8', // iPhone Xr
];

const isIphoneXOrSuperior = () =>
  iPhoneXOrSuperiorIDs.includes(DeviceInfo.getDeviceId());

export const deviceType = () => {
  if (Platform.OS === 'ios' && isIphoneXOrSuperior()) {
    return 'iOSx';
  } else if (Platform.OS === 'ios' && !isIphoneXOrSuperior()) {
    return 'iOS';
  }
  return 'android';
};

/**
 * @returns {Number} - The with of the screen
 */
export const deviceWidth = () => width;

/**
 * @returns {Number} - The height of the screen
 */
export const deviceHeight = () => height;

/**
 * @returns {Number} - The height of the header
 */
export const headerHeight = () => {
  if (isIphoneXOrSuperior()) {
    return Header.HEIGHT + 23;
  }
  return Header.HEIGHT;
};

/**
 * @returns {Number} - The height of the TabBarBottom
 */
// https://github.com/react-navigation/react-navigation/blob/1.x/src/views/TabView/TabBarBottom.js#L296-L297
export const tabBarHeight = () => 49;

/**
 * @returns {Number} - The height of the view under the header and above the tabs bar
 */
export const viewportHeight = () =>
  deviceHeight() - headerHeight() - 56 - (deviceType() === 'iOSx' ? 24 : 0);

export const SCREEN_HEIGHTS = {
  SM: 640, // 640
  MD: 960, // 960
  LG: 1200, // Rest
};

export const deviceLocale = () => {
  if (Platform.OS === 'ios') {
    const locale =
      parseInt(Platform.Version, 10) > 12
        ? NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.SettingsManager.settings.AppleLocale; // "fr_FR"
    return locale.substr(0, 2);
  }
  return NativeModules.I18nManager.localeIdentifier.substr(0, 2);
};

export const deviceTheme = () => {
  if (Platform.OS === 'ios' && Platform.Version >= 13) {
    return Appearance.getColorScheme();
  }
  return 'light';
};
