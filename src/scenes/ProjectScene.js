import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

import HorizontalScrollList from '../components/project/HorizontalScrollList';
// import { Logos } from '../model/project/projectData';
const { width, height } = Dimensions.get('window');
const tabBarHeight = 49 / 2;

const websites = [
  { uri: 'http://tourism.gov.bz' },
  { uri: 'http://tourism.gov.bz/hoc-project/' },
  { uri: 'http://www.icdf.org.tw/mp.asp?mp=2' }
];

export default class ICDFScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.baseState = this.state;
    this.navigation = this.props.navigation;
  }

  goToWebsite = key => {
    this.props.navigation.navigate('Website', websites[key]);
  };

  
  render() {
    const Logos = [
      <TouchableOpacity
        key={0}
        onPress={() => {
          this.goToWebsite(0);
        }}
      >
        <Image
          source={require('../../assets/ProjectPage/Logo/cultureLogo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>,
      <TouchableOpacity
        key={1}
        onPress={() => {
          this.goToWebsite(1);
        }}
      >
        <Image
          source={require('../../assets/ProjectPage/Logo/hocLogo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>,
      <TouchableOpacity
        key={2}
        onPress={() => {
          this.goToWebsite(2);
        }}
      >
        <Image
          source={require('../../assets/ProjectPage/Logo/icdfShortLogo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
    ];
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <HorizontalScrollList navigation={this.navigation} />
        <View style={styles.footer}>{Logos}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    height: height / 6,
    width: width,
    left: 0,
    bottom: tabBarHeight / 2,
    paddingLeft: 20,
    paddingRight: 20
    // backgroundColor: 'yellow'
  },

  logo: {
    flex: 1,
    width: width / 3 - 20,
    height: width / 3 - 20,
    resizeMode: 'contain'
  }
});
