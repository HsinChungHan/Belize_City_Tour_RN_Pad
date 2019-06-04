import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default class StoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.baseState = this.state;
    this.item = this.props.item;
    this.imgPath = this.item.imgPath;
    this.story = this.item.story;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.imgPath} style={styles.img} />
        <Text style={styles.text}>{this.story}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(254,242,219)'
  },
  img: {
    width: width - 20,
    height: width / 2,
    marginBottom: 10
  },
  text: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 40,
    color: 'rgb(109, 109, 109)'
  }
});
