import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../signIn';
import TxDetail from '../txDetail';
import Register from '../register';
import Wallet from '../wallet';
import About from '../about';
import CurrencySelection from '../currencySelection';
import ManageAssets from '../manageAssets';
import LanguageSelection from '../languageSelection';
import Terms from '../terms';
import EnableBioAuth from '../enableBioAuth';
import DisableBioAuth from '../disableBioAuth';
import PassphraseBackup from '../passphraseBackup';
import Intro from '../intro';
import HeaderBackground from './headerBackground';
import HeaderTitle from './headerTitle';
import HeaderPlaceholderButton from './headerPlaceholderButton';
import HeaderBackButton from './headerBackButton';
import TokenSwitcher from './tokenSwitcher';
import registerHeaderTitle from './registerHeaderTitle';
import Tabs from './tabStack';
import { colors } from '../../../constants/styleGuide';
import { t, headerStyle } from './helper';

const Stack = createStackNavigator();


const MainStack = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Main" component={Tabs} />
    <Stack.Screen name="TxDetail" component={TxDetail} />
    <Stack.Screen name="Wallet" component={Wallet} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="Terms" component={Terms} />
    <Stack.Screen name="CurrencySelection" component={CurrencySelection} />
    <Stack.Screen name="ManageAssets" component={ManageAssets} />
    <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
    <Stack.Screen name="EnableBioAuth" component={EnableBioAuth} />
    <Stack.Screen name="DisableBioAuth" component={DisableBioAuth} />
    <Stack.Screen name="PassphraseBackup" component={PassphraseBackup} />
    <Stack.Screen name="Intro" component={Intro} />
  </Stack.Navigator>
);

// eslint-disable-next-line new-cap
// const MainStack = createStackNavigator(
//   {
//     Register: {
//       screen: Register,
//       navigationOptions: {
//         headerTitle: registerHeaderTitle,
//         headerTitleStyle: {
//           textAlign: 'center',
//           flex: 1,
//           color: colors.light.black,
//         },
//       },
//     },
//     SignIn: {
//       screen: SignIn,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     Main: {
//       screen: Tabs,
//       navigationOptions: ({ navigation }) => {
//         const title = navigation.state.routes[navigation.state.index].routeName;
//         // Do not render header on tabs that have their own stack navigator nested
//         const shouldRenderHeader = !(
//           'routes' in navigation.state.routes[navigation.state.index]
//         );
//         const headerConfig = shouldRenderHeader
//           ? {
//             headerTitle: HeaderTitle,
//             headerRight: <TokenSwitcher navigation={navigation} />,
//             headerBackground: <HeaderBackground noBorder={true} />,
//             headerStyle,
//             title,
//           }
//           : {
//             header: null,
//           };

//         return headerConfig;
//       },
//     },
//     TxDetail: {
//       screen: TxDetail,
//       navigationOptions: {
//         title: t('Transaction Details'),
//         headerTitle: HeaderTitle,
//         headerRight: HeaderPlaceholderButton,
//         headerBackground: <HeaderBackground noBorder={true} />,
//         headerStyle: {
//           backgroundColor: 'transparent',
//           overflow: 'hidden',
//           borderBottomWidth: 0,
//           elevation: 0,
//         },
//       },
//     },
//     Wallet: {
//       screen: Wallet,
//       navigationOptions: {
//         headerRight: HeaderPlaceholderButton,
//         headerLeft: HeaderBackButton,
//         headerBackground: <HeaderBackground noBorder={true} />,
//       },
//     },
//     About: {
//       screen: About,
//       navigationOptions: ({ navigation }) => ({
//         title: t('About Lisk'),
//         headerTitle: HeaderTitle,
//         headerRight: <TokenSwitcher navigation={navigation} />,
//         headerLeft: HeaderBackButton,
//         headerBackground: <HeaderBackground />,
//         headerStyle,
//       }),
//     },
//     Terms: {
//       screen: Terms,
//       navigationOptions: ({ navigation }) => ({
//         title: t('Terms of use'),
//         headerTitle: HeaderTitle,
//         headerRight: <TokenSwitcher navigation={navigation} />,
//         headerLeft: HeaderBackButton,
//         headerBackground: <HeaderBackground />,
//         headerStyle,
//       }),
//     },
//     CurrencySelection: {
//       screen: CurrencySelection,
//       navigationOptions: {
//         title: t('Select your currency'),
//         headerTitle: HeaderTitle,
//         headerRight: HeaderPlaceholderButton,
//         headerLeft: HeaderBackButton,
//         headerBackground: <HeaderBackground />,
//         headerStyle,
//       },
//     },
//     ManageAssets: {
//       screen: ManageAssets,
//       navigationOptions: ({ navigation }) => ({
//         title: t('Manage tokens'),
//         headerTitle: HeaderTitle,
//         headerRight: <TokenSwitcher navigation={navigation} />,
//         headerLeft: HeaderBackButton,
//         headerBackground: <HeaderBackground />,
//         headerStyle,
//       }),
//     },
//     LanguageSelection: {
//       screen: LanguageSelection,
//       navigationOptions: ({ navigation }) => ({
//         title: t('Select your language'),
//         headerTitle: HeaderTitle,
//         headerRight: <TokenSwitcher navigation={navigation} />,
//         headerLeft: HeaderBackButton,
//         headerBackground: <HeaderBackground />,
//         headerStyle,
//       }),
//     },
//     EnableBioAuth: {
//       screen: EnableBioAuth,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: HeaderTitle,
//         headerRight: <TokenSwitcher navigation={navigation} />,
//         headerLeft: HeaderBackButton,
//         headerBackground: <HeaderBackground />,
//         headerStyle,
//       }),
//     },
//     DisableBioAuth: {
//       screen: DisableBioAuth,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: HeaderTitle,
//         headerRight: <TokenSwitcher navigation={navigation} />,
//         headerLeft: HeaderBackButton,
//         headerBackground: <HeaderBackground />,
//         headerStyle,
//       }),
//     },
//     PassphraseBackup: {
//       screen: PassphraseBackup,
//       navigationOptions: ({ navigation }) => ({
//         title: t('Passphrase backup'),
//         headerTitle: HeaderTitle,
//         headerRight: <TokenSwitcher navigation={navigation} />,
//         headerLeft: HeaderBackButton,
//         headerBackground: <HeaderBackground />,
//         headerStyle,
//       }),
//     },
//     Intro: {
//       screen: Intro,
//       navigationOptions: {
//         header: null,
//       },
//     },
//   },
//   {
//     initialRouteName: 'SignIn',
//     headerLayoutPreset: 'center',
//     transitionConfig: ({ scene }) =>
//       scene.routeName === 'SignIn'
//         ? {
//           transitionSpec: {
//             duration: 0,
//           },
//         }
//         : {
//           transitionSpec: {
//             duration: 300,
//           },
//         },
//   }
// );

export default MainStack;
