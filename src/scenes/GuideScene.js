import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  Easing,
  AsyncStorage
} from 'react-native';
import { Button } from 'native-base';
import InformationView from '../components/main/InformationView';
import items from '../model/main/AllPlaces';

const { width, height } = Dimensions.get('window');
const originalWidth = 411;
const originalHeight = 683;
const informationViewHeight = (width * 4) / 5;
const visitBtnHeight = (informationViewHeight - 40) / 9;
const tabBarHeight = 49;
const ivCloseY = height - tabBarHeight - visitBtnHeight;

const ivOpenY = height - informationViewHeight - tabBarHeight;

export default class GuideScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: items[9],
      informationViewIsOpened: false,
      fromGuide: true,
      rotateYValue: new Animated.Value(0),
      iconTextOpacity: new Animated.Value(1),
      detailTextOpacity: new Animated.Value(0)
    };
    this.baseState = this.state;
    this.menIconLoaction = {
      x: width - 10 - (65 * width) / originalWidth,
      y: (10 * height) / originalHeight
    };
    this.manIconMoveAnimation = new Animated.ValueXY({
      x: this.menIconLoaction.x,
      y: this.menIconLoaction.y
    });
    this.informationViewLoaction = {
      x: 0,
      y: ivCloseY
    };

    this.informationViewMoveAnimation = new Animated.ValueXY({
      x: 0,
      y: this.informationViewLoaction.y
    });
  }

  _startRotatedAnimated = () => {
    Animated.timing(this.state.rotateYValue, {
      toValue: 1,
      duration: 750,
      easing: Easing.in
    }).start(finished => {
      this.state.rotateYValue.setValue(0);
    });
  };

  _startIconTextAnimated = () => {
    Animated.timing(this.state.iconTextOpacity, {
      toValue: 0,
      duration: 1000,
      easing: Easing.in
    }).start(() => {
      this._startDetailTextAnimated();
    });
  };

  _startDetailTextAnimated = () => {
    Animated.timing(this.state.detailTextOpacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.in
    }).start();
  };

  _moveManIcon = () => {
    Animated.spring(this.manIconMoveAnimation, {
      toValue: {
        x: this.menIconLoaction.x,
        y: this.menIconLoaction.y
      }
    }).start();
  };

  pressLocationIcon = item => {
    this.setState(prevState => ({
      currentItem: item
    }));

    this._startRotatedAnimated();
    //ManIconAnimation
    Animated.timing(this.manIconMoveAnimation, {
      toValue: {
        x: (item.iconLocationX * width) / originalWidth + 30,
        y: (item.iconLocationY * height) / originalHeight + 30
      },
      duration: 600,
      easing: Easing.in
    }).start(
      //InforamtionViewAnimation
      this.openInformationView
    );

    this._startIconTextAnimated();
  };

  openInformationView = () => {
    Animated.timing(this.informationViewMoveAnimation, {
      toValue: {
        x: 0,
        y: ivOpenY
      },
      duration: 600,
      easing: Easing.in
    }).start(() => {
      this.setState(prevState => ({
        informationViewIsOpened: true
      }));
      this.refs.InformationView.setState({
        isOpened: this.state.informationViewIsOpened
      });
    });
  };

  handleInformationView = () => {
    let offsetY = ivOpenY;
    let isOpened = true;
    if (this.state.informationViewIsOpened === true) {
      offsetY = ivCloseY;
      isOpened = false;
    }
    Animated.timing(this.informationViewMoveAnimation, {
      toValue: {
        x: 0,
        y: offsetY
      },
      duration: 600,
      easing: Easing.in
    }).start(() => {
      this.setState(prevState => ({
        informationViewIsOpened: isOpened
      }));
      this.refs.InformationView.setState({
        isOpened: this.state.informationViewIsOpened
      });
    });
  };

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('@Route:hadOpenedBefore5', 'true');
      console.log('save data');
    } catch (error) {
      console.log(`Failed to save data ${error}`);
    }
  };

  _adjustHadOpended = async () => {
    try {
      const value = await AsyncStorage.getItem('@Route:hadOpenedBefore5');
      if (value === null) {
        this._storeData().done();
        console.log('keep randering view');
        return false;
      } else {
        console.log('jump to main');
        // this.props.navigation.navigate('Main');
        return true;
      }
    } catch (error) {
      console.log(`Failed to fetch data ${error}`);
    }
  };

  goToMainScene = () => {
    this.props.navigation.navigate('Main');
  };
  render() {
    const rotateY = this.state.rotateYValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '360deg']
    });
    const iconOpacity = this.state.iconTextOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    const detailOpacity = this.state.detailTextOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (
      <ImageBackground
        source={require('../../assets/GuidePage/guideBackground.png')}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}
      >
        <StatusBar hidden />
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)'
          }}
        />
        <TouchableOpacity
          onPress={event => {
            this.pressLocationIcon(items[9]);
          }}
          style={{
            width: (65 * width) / originalWidth,
            height: (65 * width) / originalWidth,
            position: 'absolute',
            top: (items[9].iconLocationY * height) / originalHeight,
            left: (items[9].iconLocationX * width) / originalWidth
          }}
        >
          <Animated.Image
            source={items[9].iconImgPath}
            style={{
              width: (65 * width) / originalWidth,
              height: (65 * width) / originalWidth,
              transform: [{ rotateY: rotateY }]
            }}
          />
        </TouchableOpacity>

        <Animated.Image
          source={require('../../assets/MainPage/men.png')}
          style={[
            {
              width: (40 * width) / originalWidth,
              height: (40 * width) / originalWidth,
              top: this.menIconLoaction.y,
              left: this.menIconLoaction.x,
              position: 'absolute'
            },
            this.manIconMoveAnimation.getLayout()
          ]}
          resizeMode="contain"
        />

        <Animated.View
          style={[
            styles.informationView,
            this.informationViewMoveAnimation.getLayout()
          ]}
        >
          <InformationView
            ref="InformationView"
            navigation={this.props.navigation}
            fromGuide={this.state.fromGuide}
            item={this.state.currentItem}
            style={styles.informationView}
            parentView={this}
            informationViewIsOpened={this.state.informationViewIsOpened}
          />
        </Animated.View>

        <Animated.Text
          style={[styles.text, styles.iconText, { opacity: iconOpacity }]}
        >
          Please tap this twinkle icon -- Wesley Methodist Church!
        </Animated.Text>
        <Animated.Text
          style={[styles.text, styles.detailText, { opacity: detailOpacity }]}
        >
          Good Job! Next, click ▷ to see more information about Wesley Methodist
          Church!
        </Animated.Text>

        <TouchableOpacity
          style={styles.skipTextView}
          onPress={this.goToMainScene}
        >
          <Animated.Text style={[styles.skipText, { opacity: iconOpacity }]}>
            Skip>>
          </Animated.Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  informationView: {
    position: 'absolute',
    top: ivCloseY,
    // top: height - 20,
    left: 0,
    width: width,
    height: informationViewHeight,
    alignItems: 'center'
  },
  iconText: {
    position: 'absolute',
    left: 50,
    top: height / 4 - 20
  },
  detailText: {
    position: 'absolute',
    left: 50,
    top: height / 6 - 20
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 55
  },
  skipTextView: {
    position: 'absolute',
    bottom: 5,
    right: 20
  },
  skipText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white'
  }
});
