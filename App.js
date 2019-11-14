import React, { Component } from "react";
import { 
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Screen imports
import LoginScreen from './src/screens/Login'
import RegisterScreen from './src/screens/Register';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import ListingScreen from './src/screens/Listing';
import SettingsScreen from './src/screens/Settings';
import ProfileScreen from './src/screens/Profile';
import subSettingScreen from './src/screens/subSetting';

// Class App that renders component AppContainer
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
};

// Profile Stack with screen
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

// Settings Stack with screen
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
  // Low level screen from SettingsStack
  subSettingScreen:{
    screen: subSettingScreen,
    navigationOptions: () => {
      return {
        headerTitle: 'User Settings'
      }
    }
  },
});

// Listing Stack with screen
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

// Search Stack with screen
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

// Home screen StackNavigator which returns the actual Home screen
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

// Drawer navigation for moving between all upper level screens
// All screens have stack as a screen because the screen will be defined in StackNavigator
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

// Navigation component for moving between Login <-> Register and to Home
// Home has screen AppDrawerNavigation because the screen will be defined in StackNavigator 
const AppSwitchNavigator = createSwitchNavigator({
  LogIn: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  Home: { screen: AppDrawerNavigator }
});

// Create a container for application navigation and render it as a root
const AppContainer = createAppContainer(AppSwitchNavigator)