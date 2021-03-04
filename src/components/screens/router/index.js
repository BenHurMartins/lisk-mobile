import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddBookmark from '../addBookmark';
import HeaderBackground from './headerBackground';
import HeaderTitle from './headerTitle';
import HeaderPlaceholderButton from './headerPlaceholderButton';
import MainStack from './mainStack';

const Stack = createStackNavigator();


const MainNavigator = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddBookmark" component={AddBookmark} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

// const MainNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: MainStack,
//       navigationOptions: {
//         headerStyle: {
//           display: 'none',
//         },
//       },
//     },
//     AddBookmark: {
//       screen: AddBookmark,
//       navigationOptions: {
//         headerTitle: props => <HeaderTitle {...props} />, //eslint-disable-line
//         headerRight: HeaderPlaceholderButton,
//         headerBackground: <HeaderBackground />,
//         headerStyle: {
//           overflow: 'hidden',
//           elevation: 0,
//         },
//       },
//     },
//   },
//   {
//     mode: 'modal',
//     cardStyle: {
//       backgroundColor: 'transparent',
//       opacity: 1,
//     },
//     navigationOptions: {
//       gesturesEnabled: false,
//     },
//   }
// );

export default MainNavigator;
