import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { withNavigation } from 'react-navigation';

// All Home screen navtabs data in array
const navTabs = [
  {key: 0, name: 'Search', navLink: 'Search'},
  {key: 1, name: 'Listing', navLink: 'Listing'},
  {key: 2, name: 'Settings', navLink: 'Settings'},
  {key: 3, name: 'Profile', navLink: 'Profile'}
];

class HomeNavigationTabs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* 
          Start mapping navTabs array and create 
          a touchableOpacity for each object in array
          with item data
        */}
        {navTabs.map((item) => {
          return(
            <TouchableOpacity 
              key={item.key}
              style={styles.navTab}
              onPress={() => this.props.navigation.navigate(`${item.navLink}`)}>
              <Text style={styles.navText}>{item.name}</Text>
            </TouchableOpacity>
        )})}
      </View>
    );
  }
}

export default withNavigation(HomeNavigationTabs);

// Styles for Navigation Tabs
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // Row rule to get items side by side in map() function
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  navTab: {
    height: Dimensions.get("window").height / 8,
    width: Dimensions.get("window").width - 350,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    margin: 20,
    borderRadius: 2,
    borderColor: '#333333',
    borderWidth: 1,
    justifyContent: "center",
  },
  navText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#333333",
  }
});