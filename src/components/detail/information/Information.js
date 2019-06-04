import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import InformationItem from './InformationItem';
const { width, height } = Dimensions.get('window');
export default class Information extends Component {
  constructor(props) {
    super(props);
    this.item = this.props.item;
    this.timeItem = {
      logoPath: require('../../../../assets/MainPage/icon/time.png'),
      title: 'Time',
      subTitle: this.item.openingTime
    };
    this.typeItem = {
      logoPath: require('../../../../assets/MainPage/icon/type.png'),
      title: 'Type',
      subTitle: this.item.type
    };
    this.locationItem = {
      logoPath: require('../../../../assets/MainPage/icon/place.png'),
      title: 'Location',
      subTitle: this.item.address
    };
    this.phoneItem = {
      logoPath: require('../../../../assets/MainPage/icon/phone.png'),
      title: 'Phone',
      subTitle: this.item.phone
    };
  }

  render() {
    return (
      <View>
        <View style={{ height: height / 3 }}>
          <InformationItem item={this.timeItem} />
          <InformationItem item={this.typeItem} />
          <InformationItem item={this.locationItem} />
          <InformationItem item={this.phoneItem} />
        </View>
        <Image
          source={this.props.item.mapImgPath}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  img: {
    width: width,
    height: width
  }
});
