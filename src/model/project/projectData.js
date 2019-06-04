import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const imagePath = [
  require('../../../assets/ProjectPage/Photo/photo1.png'),
  require('../../../assets/ProjectPage/Photo/photo2.png'),
  require('../../../assets/ProjectPage/Photo/photo3.png'),
  require('../../../assets/ProjectPage/Photo/photo4.png')
];

const title = [
  'Belize City House of Culture and Downtown Rejuvenation Project',
  'Belize City House of Culture and Downtown Rejuvenation Project',
  'A vision of an eco-museum',
  'A vision of an eco-museum'
];

const paragraph = [
  '    Belize City was the capital of Belize during the English colonial era. Strolling through its downtown area, you would come across some colonial-style old houses here and there. The city is like a treasure trove of Belizean history and culture that has long been forgotten.As a result, the Government of Belize has been working in collaboration with the TaiwanICDF since 2014 on developing the Downtown of Belize City into a rich eco-museum, composed of a selection of historical buildings such as the famous Government House and St. John’s Cathedral.',
  '    We believe that by means of preserving and revitalizing the colonial-style public architecture and private houses, creating cultural amenities for community participation, and enhancing the tourist-friendly atmosphere, the old city can be most effectively transformed. We welcome you to join our journey and set out on a walking tour around. You’ll definitely be fascinated by the abundance of cultural heritage embedded in the city!\n',
  '    In contrast to a conventional museum which emphasizes collecting objects and displaying them in one building, an eco-museum leaves objects in their current context. It could encompass a series of display nodes, architecture and landscapes which form a network where the local community members could work with museum specialists to present their history. ',
  '    Therefore, an eco-museum could physically consist of a core and its satellites. The core museum possesses the unique contents which render the overall story of the city, while the satellites, according to their individual characteristics, are displayed with thematic subjects, cultural artifacts and people’s memories.In the case of Belize City, the former Government House, currently under renovation, will be repositioned as the core museum, connected by several rejuvenated satellites scattered within the Downtown of Belize City, forming an eco-museum that welcomes the visitors to discover the rich history and culture of Belize. '
];

export const Items = {
  first: {
    imagePath: imagePath[0],
    title: title[0],
    paragraph: paragraph[0]
  },
  second: {
    imagePath: imagePath[1],
    title: title[1],
    paragraph: paragraph[1]
  },
  third: {
    imagePath: imagePath[2],
    title: title[2],
    paragraph: paragraph[2]
  },
  forth: {
    imagePath: imagePath[3],
    title: title[3],
    paragraph: paragraph[3]
  }
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: width / 3 - 40,
    height: width / 3 - 40,
    resizeMode: 'contain'
  }
});
export const Logos = [
  <Image
    source={require('../../../assets/ProjectPage/Logo/cultureLogo.png')}
    style={styles.logo}
    key={0}
  />,
  <Image
    source={require('../../../assets/ProjectPage/Logo/hocLogo.png')}
    style={styles.logo}
    key={1}
  />,
  <Image
    source={require('../../../assets/ProjectPage/Logo/icdfShortLogo.png')}
    style={styles.logo}
    key={2}
  />
];
