import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import { Audio } from 'expo';

// const videoURI = Asset.fromModule(require('../../assets/Video/intro.mp4')).uri;
const { width, height } = Dimensions.get('window');

export default class WelcomScene extends Component {
  constructor(props) {
    super(props);
    var intervalID = window.setInterval(this.goToMainScene, 17000);
    this.audioPlayer = new Audio.Sound();
  }

  async componentDidMount() {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(
        require('../../assets/sounds/backgroundMusic.mp3')
      );
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  goToMainScene = () => {
    this.props.navigation.navigate('TabBar');
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/GIF/intro.gif')}
          style={{ width, height }}
        />

        <TouchableOpacity style={styles.textView} onPress={this.goToMainScene}>
          <Text style={styles.text}>Skip>></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  textView: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white'
  }
});
