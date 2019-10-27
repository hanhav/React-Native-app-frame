import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import RegisterForm from '../components/RegisterForm';
import Background from '../assets/Background.png';

export default class Register extends Component {
  render() {
    return (
      <ImageBackground 
      source={Background} 
      style={styles.container}
      >
        <RegisterForm/>
        <View style={styles.signupTextCont}>
          <Text style={styles.generalText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('LogIn')}>
            <Text style={styles.signupText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  signupTextCont: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 16,
    flexDirection: 'row',
  },
  generalText: {
    fontSize: 18,
    fontWeight:'500',
  },
  signupText: {
    color: '#a82613',
    fontSize: 18,
    fontWeight:'500',
  }
});