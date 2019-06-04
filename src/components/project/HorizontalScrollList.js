import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions
} from 'react-native';
import ListItem from './ListItem';
import { Items } from '../../model/project/projectData';

const { width, height } = Dimensions.get('window');
export default class HorizontalScrollList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.baseState = this.state;
    this.navigation = this.props.navigation
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} pagingEnabled={true}>
          <ListItem item={Items.first} havingVideo={false} navigation={this.navigation}/>
          <ListItem item={Items.second} havingVideo={true} navigation={this.navigation}/>
          <ListItem item={Items.third} havingVideo={false} navigation={this.navigation}/>
          <ListItem item={Items.forth} havingVideo={false} navigation={this.navigation}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
