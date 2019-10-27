import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import Background from '../assets/Background.png';

const settingTabs = [
  {key: 0, name: 'Setting 1', navLink: null},
  {key: 1, name: 'Setting 2', navLink: null},
  {key: 2, name: 'Setting 3', navLink: null},
  {key: 3, name: 'Setting 4', navLink: null},
  {key: 4, name: 'Setting 5', navLink: null},
  {key: 5, name: 'Setting 6', navLink: null},
  {key: 6, name: 'Setting 7', navLink: null},
];

export default class subSetting extends Component {
  render() {
    return (
      <ImageBackground 
        source={Background} 
        style={styles.container}
      >
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