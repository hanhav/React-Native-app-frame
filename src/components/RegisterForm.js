import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { withNavigation } from 'react-navigation';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        usernameError: "",
        name: "",
        nameError: "",
        lastname: "",
        lastnameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          placeholderTextColor='#333333'
          name="username"
          placeholder='Username'
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={false}
          keyboardType="email-address"
          value={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.usernameError}</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          placeholderTextColor='#333333'
          name="name"
          placeholder='First Name'
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={false}
          keyboardType="email-address"
          value={this.state.username}
          onChangeText={text => this.setState({ name: text })}
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.usernameError}</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          placeholderTextColor='#333333'          
          name="lastname"
          placeholder='Last Name'
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={false}
          keyboardType="email-address"
          value={this.state.username}
          onChangeText={text => this.setState({ lastname: text })}
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.usernameError}</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          placeholderTextColor='#333333'          
          name="email"
          placeholder='Email'
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={false}
          keyboardType="email-address"
          value={this.state.username}
          onChangeText={text => this.setState({ email: text })}
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.usernameError}</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          placeholderTextColor='#333333'
          name="password"
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
          autoFocus={false}
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <View style={styles.warningContainer}>
          <Text style={styles.errorMSG}>{this.state.passwordError}</Text>
        </View>
        <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(RegisterForm);

const styles = StyleSheet.create({
  container: {
    flexGrow: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  warningContainer: {
    height: Dimensions.get("window").height / 100,
    width: Dimensions.get("window").width - 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
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
    marginVertical: 5,
  },
  Button: {
    height: Dimensions.get("window").height / 18,
    width: Dimensions.get("window").width - 350,
    backgroundColor: '#a82613',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#333333',
    borderWidth: 1,
    padding: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#FFFFFF",
  },
  errorMSG: {
    fontSize: 12,
    fontWeight: '100',
    color: 'rgba(178, 0, 0, 0.7)',
    textAlign: 'center',
  }
});