import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { red } from 'ansi-colors';
export default class InformationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.baseState = this.state;
    this.item = this.props.item;
    this.logoPath = this.item.logoPath;
    this.title = this.item.title;
    this.subTitle = this.item.subTitle;
    this.mapPath = this.item.mapPath;
  }

  render() {
    return (
      <View style={styles.title}>
        <View style={styles.iconView}>
          <Image
            source={this.logoPath}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{this.title}</Text>
        </View>
        <View style={styles.subtitleView}>
          <Text style={styles.subTitleText}>{this.subTitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  subTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow',
    paddingLeft: 10
  },
  titleView: {
    flex: 2
    // backgroundColor: 'green'
  },
  titleText: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'rgb(132,94,85)'
  },
  subtitleView: {
    flex: 4
    // backgroundColor: 'blue'
  },
  subTitleText: {
    paddingLeft: 20,
    textAlign: 'left',
    fontSize: 25,
    color: '#040C0E'
  },
  iconView: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  icon: {
    width: 25,
    height: 25
  }
});
