import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');
const informationViewHeight = (width * 4) / 5;
const originalWidth = 411;
const originalHeight = 683;
const btnImgPath = {
  open: require('../../../assets/MainPage/icon/btn_extend.png'),
  close: require('../../../assets/MainPage/icon/btn_collapse.png')
};

export default class InformationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: this.props.parentView.informationViewIsOpened
    };
  }

  goToDetail = () => {
    this.props.navigation.navigate('Detail', [
      this.props.item,
      this.props.fromGuide
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.parentView.handleInformationView}
          style={styles.closeView}
        >
          <Image
            source={this.state.isOpened ? btnImgPath.close : btnImgPath.open}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={this.goToDetail} style={styles.visitView}>
          <Text style={styles.subTitleText}>Visit</Text>
        </TouchableOpacity> */}

        <View style={styles.swiper}>
          <Swiper
            autoplay={true}
            activeDot={
              <View
                style={{
                  backgroundColor: 'white',
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}
              />
            }
          >
            {this.props.item.imgsPath.map((path, key) => {
              return (
                <View key={key} style={styles.slider}>
                  <Image source={path} style={styles.img} />
                </View>
              );
            })}
          </Swiper>
        </View>

        <View style={styles.informationView}>
          <View style={styles.title}>
            <Image
              source={require('../../../assets/MainPage/icon/place.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.titleText} numberOfLines={1}>
              {this.props.item.englishName}
            </Text>
          </View>
          <View style={styles.subTitleView}>
            <Image
              source={require('../../../assets/MainPage/icon/time.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.subTitleText} numberOfLines={1}>
              {this.props.item.openingTime}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreIconView} onPress={this.goToDetail}>
          <Image
            source={require('../../../assets/MainPage/icon/more.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: informationViewHeight,
    width: width - 20,
    backgroundColor: 'rgba(255, 223, 196, 0.8)',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 20
  },
  closeView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  visitView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20
  },
  informationView: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: width - 40,
    height: width / 5,
    backgroundColor: 'rgba(19,34,38,0.7)'
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 10,
    borderRadius: 30
    // marginLeft: 10,
    // marginRight: 10
  },
  subTitleView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 10,
    borderRadius: 30
    // marginLeft: 10,
    // marginRight: 10
  },
  titleText: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  subTitleText: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  swiper: {
    flex: 8,
    // backgroundColor: 'green',
    marginTop: 10
  },
  slider: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  img: {
    width: width - 40,
    height: height / 2 + 20
  },
  icon: {
    width: (25 * width) / originalWidth,
    height: (25 * width) / originalWidth
  },
  moreIconView: {
    position: 'absolute',
    bottom: 40,
    right: 40
  }
});
