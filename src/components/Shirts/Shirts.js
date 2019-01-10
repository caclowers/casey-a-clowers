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



  render() {
    let shirtArray = shirts.map((shirt, index) => {
      return (
        <div id="shirts" key={index}>
          <img 
          className="craftImg" 
          src={shirt.image} 
          title={shirt.tag}
          alt={shirt.tag} >
          </img>
          <p>{shirt.tag}</p>
        </div>
        
      )
    })
    return (
      <section className="section">
        <h3>some apparel which i have made... hand-traced on a lightbox with Sharpie</h3>
        <Carousel>
          {shirtArray}
        </Carousel>
      </section>
    )
  };
};

export default Shirts;
