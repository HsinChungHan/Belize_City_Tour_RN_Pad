import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import StoryItem from './StoryItem';
import { Container } from 'native-base';
const { width, height } = Dimensions.get('window');

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.baseState = this.state;
    this.item = this.props.item;

    this.item0 = {
      imgPath: this.item.imgsPath[0],
      story: this.item.englishStoryFirst
    };
    this.item1 = {
      imgPath: this.item.imgsPath[1],
      story: this.item.englishStorySecond
    };
    this.item2 = {
      imgPath: this.item.imgsPath[2],
      story: this.item.englishStoryThird
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StoryItem item={this.item0} />
        <StoryItem item={this.item1} />
        <StoryItem item={this.item2} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});
