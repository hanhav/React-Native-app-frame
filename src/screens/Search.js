import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Background from '../assets/Background.png';

export default class Search extends Component {
  constructor(props) {
    super(props);
    // State for searchvalue
    this.state = {
        value: '',
    };
  }
  render() {
    return (
      <ImageBackground 
      source={Background} 
      style={styles.container}
      >
        <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
          {/* Input for searchvalue */}
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor='#333333'
            name="SearchValue"
            placeholder='Search...'
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={false}
            keyboardType="default"
            value={this.state.value}
            // Call this whenever user inputs something to update value state
            onChangeText={text => this.setState({ value: text })}
          />
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fafafa",
    color: "#333333",
    height: Dimensions.get("window").height / 19,
    width: Dimensions.get("window").width - 80,
    paddingHorizontal: 12,
    fontSize: 18,
    fontWeight: "normal",
    borderRadius: 8,
    borderColor: '#333333',
    borderWidth: 1,
    marginVertical: 30,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#333333',
  },
  searchIcon: {
    padding: 10,
  },
});