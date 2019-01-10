import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import '../../App.css';
import pic from '../../images/casey2.jpeg';

class Focus extends Component {



  render() {
    return (
      <div id="focus">
      
        <div id="futurePic">
          <p>who, me...?</p>
          <p>yeah, you could say i'm focused</p>
          <img src={pic}
            alt="casey-looking-through-sunglasses-at-the-words-quote-the-future-end-quote">
          </img>
          <p>what are YOU focused on?</p>
        </div>
      </div>

    )
  };
};

export default Focus;
