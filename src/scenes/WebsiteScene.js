import React, { Component } from 'react';
import { View, StyleSheet, WebView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class WebsiteScene extends Component {
  constructor(props) {
    super(props);
    this.baseState = this.state;
    this.websiteUri = this.props.navigation.state.params.uri;
  }

  render() {
    console.log(this.test);
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: this.websiteUri }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
