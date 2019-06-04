import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
export default class PictureCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   imagePath: this.props.imagePath
    };
    this.baseState = this.state;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundView}>
          <View style={[styles.outerBackgroundView, this.props.upperStyle]}>
            <View style={[styles.innerBackgroundView, this.props.lowerStyle]} />
          </View>
          <View style={[styles.outerBackgroundView, this.props.lowerStyle]}>
            <View style={[styles.innerBackgroundView, this.props.upperStyle]} />
          </View>
        </View>
        <Image source={this.props.imagePath} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
    height: width - 80
  },
  backgroundView: {
    flex: 1,
    flexDirection: 'column'
  },
  outerBackgroundView: {
    flex: 1
  },
  innerBackgroundView: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20
  },
  image: {
    height: width - 120,
    width: width - 80,
    marginTop: 20,
    alignSelf: 'center',
    position: 'absolute'
  }
});
