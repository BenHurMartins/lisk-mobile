import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import HeaderBackground from './headerBackground';
import HeaderTitle from './headerTitle';
import Send from '../tabs/send';
import Bookmark from '../bookmarkPage';
import Request from '../tabs/request';
import Settings from '../tabs/settings';
import TabBarIcon from './tabBarIcon';
import Home from '../tabs/home';
// import TabBarComponent from './tabBarComponent';
import DynamicHeaderBackground from './dynamicHeaderBackground';
import { t, headerStyle } from './helper';

// const SendStack = createStackNavigator(
//   {
//     Send: {
//       screen: Send,
//       navigationOptions: () => ({
//         headerTitle: HeaderTitle,
//         headerStyle,
//         headerBackground: <HeaderBackground />,
//       }),
//     },
//   },
//   {}
// );

// const HomeStack = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//     },
//   },
//   {
//     defaultNavigationOptions: {
//       headerBackground: <DynamicHeaderBackground />,
//     },
//   }
// );

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Request" component={Request} />
      <Tab.Screen name="Send" component={Send} />
      <Tab.Screen name="Bookmarks" component={Bookmarks} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}



// const Tabs = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeStack,
//       navigationOptions: {
//         // eslint-disable-next-line react/display-name
//         tabBarIcon: props => <TabBarIcon name="home" {...props} />,
//         tabBarOnPress: ({ defaultHandler, navigation }) => {
//           if (navigation.isFocused() && navigation.getParam('scrollToTop')) {
//             navigation.state.params.scrollToTop();
//           } else {
//             defaultHandler(0);
//           }
//         },
//       },
//     },
//     Request: {
//       screen: Request,
//       navigationOptions: {
//         // eslint-disable-next-line react/display-name
//         tabBarIcon: props => <TabBarIcon name="request" {...props} />,
//       },
//     },
//     Send: {
//       screen: SendStack,
//       navigationOptions: {
//         // eslint-disable-next-line react/display-name
//         tabBarIcon: props => <TabBarIcon name="send" {...props} />,
//       },
//     },
//     Bookmarks: {
//       screen: Bookmark,
//       navigationOptions: {
//         title: t('Bookmarks'),
//         tabBarLabel: 'Bookmarks',
//         // eslint-disable-next-line react/display-name
//         tabBarIcon: props => <TabBarIcon name="bookmark" {...props} />,
//       },
//     },
//     Settings: {
//       screen: Settings,
//       navigationOptions: {
//         title: t('Settings'),
//         // eslint-disable-next-line react/display-name
//         tabBarIcon: props => <TabBarIcon name="settings" {...props} />,
//       },
//     },
//   },
//   {
//     tabBarComponent: TabBarComponent,
//     initialRouteName: 'Home',
//     headerMode: 'screen',
//     swipeEnabled: false,
//     tabBarOptions: {
//       activeTintColor: undefined,
//       indicatorStyle: undefined,
//       inactiveTintColor: undefined,
//       showIcon: true,
//       showLabel: false,
//       upperCaseLabel: false,
//       allowFontScaling: false,
//     },
//   }
// );

export default Tabs;
