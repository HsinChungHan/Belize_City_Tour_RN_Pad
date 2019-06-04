import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Linking
} from 'react-native';
import { Content } from 'native-base';
import { Logos } from '../../model/project/projectData';
import { Font } from 'expo';
const { width, height } = Dimensions.get('window');
const watchingVideoText = 'Click here to watch the introduction video!';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 35,
    paddingLeft: 20
  },
  contentView: {
    flex: 3
  },
  textContent: {
    backgroundColor: 'rgba(54,46,43,0.8)',
    margin: 20,
    borderRadius: 20
  },

  text: {
    padding: 10,
    fontSize: 30,
    color: 'white',
    lineHeight: 50,
    marginTop: 10,
    marginBottom: 10
  },
  titleColor: {
    color: 'white'
  },
  footer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFontLoaded: false
    };
    this.item = this.props.item;
    this.title = this.item.title;
    this.paragraph = this.item.paragraph;
    this.imagePath = this.item.imagePath;
    this.havingVideo = this.props.havingVideo;
    this.navigation = this.props.navigation;
  }

  async componentDidMount() {
    await Font.loadAsync({
      Vineritc: require('../../../assets/Fonts/Vineritc.ttf'),
      Centaur: require('../../../assets/Fonts/Centaur.ttf')
    });
    this.setState(prevState => ({
      isFontLoaded: true
    }));
  }

  goToWebsite = () => {

    Linking.openURL('https://www.youtube.com/watch?v=05dlrr3obIE&feature=youtu.be')
    // this.navigation.navigate('Website', {
    //   uri: 'https://www.youtube.com/watch?v=05dlrr3obIE&feature=youtu.be'
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={this.imagePath}
          style={{ width: '100%', height: '100%' }}
        >
          <View style={styles.titleView}>
            {this.state.isFontLoaded ? (
              <Text
                numberOfLines={2}
                style={[styles.titleText, { fontFamily: 'Vineritc' }]}
                textAlign="center"
              >
                {this.title}
              </Text>
            ) : null}
          </View>
          <View style={styles.contentView}>
            <Content style={styles.textContent}>
              {this.state.isFontLoaded ? (
                <Text style={[styles.text, { fontFamily: 'Centaur' }]}>
                  {this.paragraph}
                </Text>
              ) : null}
              {this.state.isFontLoaded && this.havingVideo ? (
                <Text
                  onPress={this.goToWebsite}
                  textAlign="center"
                  style={[
                    styles.text,
                    { fontFamily: 'Centaur' },
                    { color: '#00e9ff' }
                  ]}
                >
                  {watchingVideoText}
                </Text>
              ) : null}
            </Content>
          </View>
          <View style={{ flex: 1 }} />
        </ImageBackground>
      </View>
    );
  }
}
