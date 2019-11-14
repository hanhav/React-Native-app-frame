import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

// Import Login form from components folder
import LoginForm from '../components/LoginForm';
import Background from '../assets/Background.png';

export default class Login extends Component {
  render() {
    return (
      <ImageBackground 
      source={Background} 
      style={styles.container}
      >
        {/* Render login form */}
        <LoginForm/>
        <View style={styles.registerTextCont}>
          <Text style={styles.generalText}>Don't have an Account?</Text>
            {/* Navigate to Register screen */}
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.registerText}> Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
};

// Styling for Login screen
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  registerTextCont: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 16,
    flexDirection: 'row',
  },
  generalText: {
    fontSize: 18,
    fontWeight:'500',
  },
  registerText: {
    color: '#a82613',
    fontSize: 18,
    fontWeight:'500',
  }
});