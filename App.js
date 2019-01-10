import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Button from './src/components/Button';
import About from './src/components/About/About.js';
import Focus from './src/components/Focus/Focus.js';
import Header from './src/components/Header/Header.js';
import Crafts from './src/components/Crafts/Crafts.js';
import Shirts from './src/components/Shirts/Shirts.js';
import casey from './src/images/image1.jpeg'
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import './App.css';

class App extends React.Component {

  static navigationOptions = {
    title: 'Casey A. Clowers',
  //   headerStyle: { backgroundColor: '#090446' },
  // headerTitleStyle: { color: 'white' },
  }

  onButtonPressAbout = () => {
    this.props.navigation.navigate('about');
  };
  
  onButtonPressCrafts = () => {
    this.props.navigation.navigate('crafts');
  };
  
  onButtonPressShirts = () => {  
    this.props.navigation.navigate('shirts');
  }; 
  
  onButtonPressAbout = () => {
    this.props.navigation.navigate('about');
  }; 
  
  onButtonPressAbout = () => {
    this.props.navigation.navigate('about');
  };

  onButtonPressAbout = () => {
    this.props.navigation.navigate('about');
  };


  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.container}>howdy!</Text>
          <Image
          source={casey}
          style={styles.image}></Image>
        </View>
        <View style={styles.buttons}>
          <Button 
          title="Tech Stuff"
          onPress={this.onButtonPressAbout}/>
          <Button 
          title="Crafts"
          onPress={this.onButtonPressCrafts}/>
          <Button 
          title="Apparel"
          onPress={this.onButtonPressShirts}/>
        </View>
        <View 
          style={{height:80}}>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    fontFamily: 'Trebuchet MS',
    color: 'white',
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 0,
    flexDirection: "row"
  },
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'Trebuchet MS',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    flex: 0,
    marginTop: 48,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    width: 300,
    height: 550
  }
});


//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  about: About,
  crafts: Crafts,
  focus: Focus,
  shirts: Shirts
  // where: Where,
  // forecast: Forecast
})



export default createAppContainer(Navigation);