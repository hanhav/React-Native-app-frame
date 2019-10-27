import React, { Component } from "react";
import { ImageBackground, Text, StyleSheet } from 'react-native';

import HomeNavTabs from '../components/HomeNavigationTabs';
import Background from '../assets/Background.png';

export default class Home extends Component {
  render() {
    return (
      <ImageBackground 
      source={Background} 
      style={styles.container}
      >
      <Text style={styles.welcomeText}>Welcome to HomeScreen</Text>
      <HomeNavTabs style={styles.navigationTabs} />
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight:'400',
    color: 'white'
  },
  navigationTabs: {
    
  }
});