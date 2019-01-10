import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import pic from '../../images/image1.jpeg';
// import '../../App.css';

class Header extends Component {

  Smirk = () => {
    window.scrollTo({
      top: 1000000,
      behavior: "smooth"
    });
  }



  render() {
    return (

      <div id="upperHeader">
        <div id="headerPic" className="swaying">
          <h2>
            Howdy!
            </h2>
          <img 
          className="swaying" 
          src={pic} 
          alt="logo" 
          title="Halloween a few years ago"/>
        </div>
        <div id="headerInfo">
          <h1>
            i'm Casey Clowers.
          </h1>
         
          <p>
            i'm pretty awesome, and i really excel at a LOT of things.
            </p>
          <p>
            i'd say the thing i'm <b><em>the best</em></b> at would be... Humility...&nbsp;
              <button onClick={this.Smirk}>
              smirk
              </button>
          </p>
        </div>
      </div>
    );
  };
};

export default Header;
