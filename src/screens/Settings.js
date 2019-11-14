import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import Background from '../assets/Background.png';

// Define Listitems and routes
const settingTabs = [
  {key: 0, name: 'User Settings', navLink: 'subSettingScreen'},
  {key: 1, name: 'Payment Options', navLink: null},
  {key: 2, name: 'Security and Login', navLink: null},
  {key: 3, name: 'Linked Applications', navLink: null},
  {key: 4, name: 'Privacy settings', navLink: null},
  {key: 5, name: 'Application access settings', navLink: null},
];

export default class Settings extends Component {
  render() {
    return (
      <ImageBackground 
        source={Background} 
        style={styles.container}
      >
        {/* 
          Start mapping settingsTabs array and create 
          a touchableOpacity for each object in array
          with item data
        */}
        {settingTabs.map((item) => {
          return(
            <TouchableOpacity 
              key={item.key}
              style={styles.navTab}
              onPress={() => this.props.navigation.navigate(`${item.navLink}`)}>
              <Text style={styles.navText}>{item.name}</Text>
            </TouchableOpacity>
        )})}
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  navTab: {
    height: Dimensions.get("window").height / 12,
    width: Dimensions.get("window").width,
    backgroundColor: '#fafafa',
    borderColor: '#333333',
    borderWidth: 1,
    paddingLeft: 12,
    justifyContent: "center",
  },
  navText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#333333",
  }
});