import React, { Component } from 'react';

import { Image, AsyncStorage } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  TabNavigator
} from 'react-navigation';
import MainScene from './src/scenes/MainScene';
import DetailScene from './src/scenes/DetailScene';
import ICDFScene from './src/scenes/ICDFScene';
import ProjectScene from './src/scenes/ProjectScene';
import WebsiteScene from './src/scenes/WebsiteScene';
import WelcomScene from './src/scenes/WelcomeScene';
import GuideScene from './src/scenes/GuideScene';

const gg = true;
const ICDFToWebsiteNavigator = createStackNavigator(
  {
    ICDF: {
      screen: ICDFScene,
      navigationOptions: () => ({
        header: null
      })
      // navigationOptions: () => ({
      //   title: 'ICDF',
      //   headerBackTitle: null
      // })
    },
    Website: {
      screen: WebsiteScene,
      navigationOptions: () => ({
        title: null,
        headerStyle: {
          backgroundColor: 'rgb(109,109,109)'
        }
        // headerBackTitle: ''
      })
    }
  },
  {
    initialRouteName: 'ICDF',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(109,109,109)'
      },
      headerTitleStyle: 'bold'
    }
  }
);

const projectToWebsiteNavigator = createStackNavigator(
  {
    Project: {
      screen: ProjectScene,
      navigationOptions: () => ({
        header: null
      })
      // navigationOptions: () => ({
      //   title: 'ICDF',
      //   headerBackTitle: null
      // })
    },
    Website: {
      screen: WebsiteScene,
      navigationOptions: () => ({
        title: null,
        headerStyle: {
          backgroundColor: 'rgb(109,109,109)'
        }
        // headerBackTitle: null
      })
    }
  },
  {
    initialRouteName: 'Project',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(109,109,109)'
      },
      headerTitleStyle: 'bold'
    }
  }
);

_storeData = async () => {
  try {
    await AsyncStorage.setItem('@Route:hadOpenedBefore4', 'true');
    console.log('save data');
  } catch (error) {
    console.log(`Failed to save data ${error}`);
  }
};

_adjustHadOpended = async () => {
  try {
    const value = await AsyncStorage.getItem('@Route:hadOpenedBefore4');
    if (value === null) {
      this._storeData().done;
      console.log('keep randering view');
      console.log('false');
      return false;
    } else {
      console.log('jump to main');
      // this.props.navigation.navigate('Main');
      console.log('true');
      return true;
    }
  } catch (error) {
    console.log(`Failed to fetch data ${error}`);
  }
};

const mainStackNavi = createStackNavigator(
  {
    Main: {
      screen: MainScene,
      navigationOptions: () => ({
        header: null
      })
    },
    Detail: {
      screen: DetailScene,
      navigationOptions: () => ({
        header: null
      })
    },
    Guide: {
      screen: GuideScene,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    // initialRouteName: this._adjustHadOpended() ? 'Main' : 'Guide'
    // initialRouteName: gg ? 'Main' : 'Guide'
    initialRouteName: 'Guide'
  }
);

const tabNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: mainStackNavi
    },
    Project: {
      screen: projectToWebsiteNavigator
    },
    ICDF: {
      // screen: ICDFScene
      screen: ICDFToWebsiteNavigator
    }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconPath;
        if (routeName === 'Main') {
          iconPath = require('./assets/TabBar/main.png');
        } else if (routeName === 'ICDF') {
          iconPath = require('./assets/TabBar/icdf.png');
        } else if (routeName === 'Project') {
          iconPath = require('./assets/TabBar/project.png');
        }

        // You can return any component that you like here!
        return <Image source={iconPath} style={{ width: 35, height: 35 }} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'rgb(157,107,117)',
      inactiveTintColor: '#A4978E',
      activeBackgroundColor: 'rgba(255, 223, 196, 0.8)',
      inactiveBackgroundColor: 'white'
    }
  }
);

const welcomToTabBarNavigator = createStackNavigator(
  {
    Video: {
      screen: WelcomScene,
      navigationOptions: () => ({
        header: null
      })
      // navigationOptions: () => ({
      //   title: 'ICDF',
      //   headerBackTitle: null
      // })
    },
    TabBar: {
      screen: tabNavigator,
      navigationOptions: () => ({
        header: null
        // headerBackTitle: ''
      })
    }
  },
  {
    initialRouteName: 'Video',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTitleStyle: 'bold'
    }
  }
);

const App = createAppContainer(welcomToTabBarNavigator);
export default App;
