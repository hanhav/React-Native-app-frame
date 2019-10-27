import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  FlatList
} from 'react-native';

import ListViewItem from '../components/ListItem';
import Background from '../assets/Background.png';

const data = [
  {
    id: 0,
    heading: 'List item 1',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 1,
    heading: 'List item 2',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 2,
    heading: 'List item 3',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 3,
    heading: 'List item 4',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 4,
    heading: 'List item 5',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 5,
    heading: 'List item 6',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 6,
    heading: 'List item 7',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 7,
    heading: 'List item 8',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
]

export default class Listing extends Component {
  render() {
    return (
      <ImageBackground 
      source={Background} 
      style={styles.container}
      >
        <FlatList 
          data={data}
          renderItem={({item}) => <ListViewItem item={item}/>}
          keyExtractor={(index, _) => index + ''}
        />
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
  }
});