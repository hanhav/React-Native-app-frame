import React, { Component } from "react";
import { 
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/screens/Login'
import RegisterScreen from './src/screens/Register';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import ListingScreen from './src/screens/Listing';
import SettingsScreen from './src/screens/Settings';
import ProfileScreen from './src/screens/Profile';
import subSettingScreen from './src/screens/subSetting';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
};

const ProfileStack = createStackNavigator ({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Profile',
        headerLeft: (<Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />)
      }
    }
  },
});

const SettingsStack = createStackNavigator ({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Settings',
        headerLeft: (<Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />)
      }
    }
  },
  subSettingScreen:{
    screen: subSettingScreen,
    navigationOptions: () => {
      return {
        headerTitle: 'subSetting'
      }
    }
  },
});

const ListingStack = createStackNavigator ({
  Listing: {
    screen: ListingScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Listing',
        headerLeft: (<Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />)
      }
    }
  },
});

const SearchStack = createStackNavigator ({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Search',
        headerLeft: (<Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />)
      }
    }
  },
});

const HomeStack = createStackNavigator ({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Home',
        headerLeft: (<Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />)
      }
    }
  },
});

const AppDrawerNavigator = createDrawerNavigator ({
  Home:{
    screen: HomeStack,
  },
  Search:{
    screen: SearchStack,
  },
  Listing:{
    screen: ListingStack,
  },
  Settings:{
    screen: SettingsStack,
  },
  Profile:{
    screen: ProfileStack,
  },
},
{
  drawerPosition: 'left',
  drawerBackgroundColor: '#fafafa',
  drawerType: 'slide',
}
);

const AppSwitchNavigator = createSwitchNavigator({
  LogIn: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  Home: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator)