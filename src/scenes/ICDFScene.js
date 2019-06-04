import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Container, Content } from 'native-base';
import ProjectCell from '../components/icdf/projectCell';

import items from '../model/icdf/icdfData.js';

const { width, height } = Dimensions.get('window');
const website = {
  uri: 'http://www.icdf.org.tw/mp.asp?mp=2'
};
export default class ProjectScene extends Component {
  goToWebsite = () => {
    this.props.navigation.navigate('Website', website);
  };

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar hidden />

        <Content>
          <View style={styles.dummyView} />
          <View>
            <Text style={styles.text}>{items[0].paragraph}</Text>
          </View>
          <View>
            <ProjectCell
              items={items[1]}
              heigth={width - 60}
              navigation={this.props.navigation}
            />
          </View>
          <View>
            <ProjectCell
              items={items[2]}
              heigth={width - 60}
              navigation={this.props.navigation}
            />
          </View>
          <View>
            <ProjectCell
              items={items[3]}
              heigth={width - 60}
              navigation={this.props.navigation}
            />
          </View>
        </Content>
        <View style={styles.logo}>
          <TouchableOpacity onPress={this.goToWebsite}>
            <Image
              source={require('../../assets/ICDFPage/icdf_long_logo.png')}
              style={{
                width: width - 20,
                height: width / 5,
                margin: 10
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  logo: {
    height: width / 5 + 20,
    width: width,
    backgroundColor: 'rgba(254, 242, 219, 0.9)',
    position: 'absolute',
    top: 0,
    left: 0
  },
  dummyView: {
    height: width / 5 + 20,
    width: width
  },
  text: {
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(72,54,31)',
    lineHeight: 45,
    marginTop: 20,
    marginBottom: 20
  }
});
