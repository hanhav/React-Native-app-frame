import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image, ImageBackground } from 'react-native';

import ProfilePicture from '../assets/ProfilePicture.png';
import Background from '../assets/Background.png';

const profileContent = [
  {key: 0, label: 'Username:'},
  {key: 1, label: 'First Name:'},
  {key: 2, label: 'Last Name:'},
  {key: 3, label: 'Email:'},
  {key: 4, label: 'Status:'}
];

export default class Profile extends Component {
  render() {
    return (
      <ImageBackground 
      source={Background} 
      style={styles.container}
      >
      <Image style={styles.image} source={ProfilePicture}/>
       
          {profileContent.map((item) => {
            return(
              <View 
                key={item.key}
                style={styles.subContainer}
              >
                <Text style={styles.label}>{item.label}</Text>
              </View>
          )})}
      
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width - 360,
  },
  subContainer: {
    backgroundColor: '#fafafa',
    height: Dimensions.get("window").height / 18,
    width: Dimensions.get("window").width - 250,
    borderColor: '#333333',
    borderWidth: 1,
    marginTop: 2,
    justifyContent: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: '#777777'
  }
});