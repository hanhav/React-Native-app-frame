import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object
}

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  };

  handleClick = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  };

  renderSubText = () => {
    return (
    <View style={styles.subContainer}>
      <Text style={styles.subText}>{this.props.item.subText}</Text>
    </View>
    )
  }

  render() {
    const { selected } = this.state;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handleClick}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{this.props.item.heading}</Text>
          </View>
        </TouchableWithoutFeedback>
        {selected && this.renderSubText()}
      </View>
    );
  }
};

ListItem.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: "#fafafa",
    justifyContent: 'center',
    height: Dimensions.get("window").height / 19,
    width: Dimensions.get("window").width - 80,
    paddingHorizontal: 12,
    fontSize: 18,
    fontWeight: "normal",
    borderColor: '#333333',
    borderWidth: 1,
    marginVertical: 5,
  },
  titleText: {
    color: "#333333",
  },
  subText: {
    color: "#333333",
  },
  subContainer: {
    marginTop: -6,
    padding: 5,
    backgroundColor: "#fafafa",
    height: Dimensions.get("window").height / 19,
    width: Dimensions.get("window").width - 81,
    borderColor: '#333333',
    borderWidth: 1,
  }
});

export default ListItem;