import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Button from './src/components/Button';
import About from './src/components/About/About.js';
import Focus from './src/components/Focus/Focus.js';
import Header from './src/components/Header/Header.js';
import Carousel from './src/components/Crafts/Crafts.js';
import Shirts from './src/components/Shirts/Shirts.js';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import './App.css';

class App extends React.Component {

  static navigationOptions = {
    title: 'Home',
  //   headerStyle: { backgroundColor: '#090446' },
  // headerTitleStyle: { color: 'white' },
  }

  onButtonPressAbout = () => {
    this.props.navigation.navigate('about');
  }


  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>hi!</Text>
        <Button 
          title="something"
          onPress={this.onButtonPressAbout}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    fontFamily: 'Trebuchet MS',
    color: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
 
});


//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  about: About,
  // where: Where,
  // forecast: Forecast
})



export default createAppContainer(Navigation);