import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  FlatList
} from 'react-native';

import ListViewItem from '../components/ListItem';
import Background from '../assets/Background.png';

// Data for listview
const data = [
  {
    id: 0,
    heading: 'Person 1',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 1,
    heading: 'Person 2',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 2,
    heading: 'Person 3',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 3,
    heading: 'Person 4',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 4,
    heading: 'Person 5',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 5,
    heading: 'Person 6',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 6,
    heading: 'Person 7',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus in dui sed pharetra.'
  },
  {
    id: 7,
    heading: 'Person 8',
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
          // Set data
          data={data}
          // Render imported listviewItem
          renderItem={({item}) => <ListViewItem item={item}/>}
          // Tells list to use the id's for the react keys instead of default key property
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