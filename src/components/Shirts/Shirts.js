import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import '../../App.css';
import { Carousel } from "react-responsive-carousel";

//import images
import grin from '../../images/Shirts/grin.png';
import hatwink from '../../images/Shirts/hatwink.png';
import ugh from '../../images/Shirts/ugh.png';
import uhoh from '../../images/Shirts/uhoh.png';
import what from '../../images/Shirts/what.png';
import wink from '../../images/Shirts/wink.png';
import yawn from '../../images/Shirts/yawn.png';
import cowboy from '../../images/Shirts/cowboy.png';

let shirts = [
  {
    image: wink,
    tag: "wink"
  }, {
    image: hatwink,
    tag: "the famous Stormy Kromer"
  }, {
    image: ugh,
    tag: "*eye-roll emoji"
  }, {
    image: uhoh,
    tag: "you don't say..."
  }, {
    image: what,
    tag: "really?"
  }, {
    image: grin,
    tag: "heh"
  }, {
    image: yawn,
    tag: "yawn? or yell?"
  }, {
    image: cowboy,
    tag: "howdy"
  }
]


class Shirts extends Component {

  static navigationOptions = {
    title: 'Some Shirts',
  //   headerStyle: { backgroundColor: '#090446' },
  // headerTitleStyle: { color: 'white' },
  }


  render() {
    let shirtArray = shirts.map((shirt, index) => {
      return (
        <View key={index} style={styles.container}>
          <Image  
          source={shirt.image} 
          title={shirt.tag}
          alt={shirt.tag} 
          style={styles.image}>
          </Image>
          <Text style={styles.container}>{shirt.tag}</Text>
        </View>
        
      )
    })
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.container}>some apparel which i have made... hand-traced on a lightbox with Sharpie</Text>
        
          {shirtArray}
        <View 
          style={{height:80}}>
        </View>
      </ScrollView>
    )
  };
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    fontFamily: 'Trebuchet MS',
    color: 'white',
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'Trebuchet MS',
    fontSize: 18,
    fontWeight: 'bold',

  },
  image: {
    marginTop: 48,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    width: 300,
    height: 350
  }
});

export default Shirts;
