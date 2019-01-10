import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Carousel } from "react-responsive-carousel";
// import '../../App.css';

//import images
import armguard from '../../images/Things/armguard.png';
import banner from '../../images/Things/banner.png';
import blanket from '../../images/Things/blanket.png';
import bottles from '../../images/Things/bottles.png';
import brasspins from '../../images/Things/brasspins.png';
import coinring from '../../images/Things/coinring.png';
import costumes from '../../images/Things/costumes.png';
import framebolsters from '../../images/Things/framebolsters.png';


let images = [
  {
    image: armguard,
    info: "Leather, Rivets - Hammer",
    tag: "leather armguards... #rennaisancefestival #dragonscale #umyesplease"
  }, {
    image: banner,
    info: "Birch, Curtain Rod Finials, Cabinet Knobs - Saws, Drill",
    tag: "Game of Thrones banners need suitable hangers."
  }, {
    image: blanket,
    info: "Wool Yarn - Knitting Machine",
    tag: "A wool blanket that i machine-knitted as a Christmas gift for my parents."
  }, {
    image: bottles,
    info: "Cotton String - Crochet Hook",
    tag: "i collected a bunch of bottles and crocheted some string on them. They're pretty great."
  }, {
    image: brasspins,
    info: "Brazing Rod - Hammer, Anvil",
    tag: "Saw something like these on Amazon and said to myself, \"Self, you can make those.\" So i did. "
  }, {
    image: coinring,
    info: "Coin - Hammer, Punch, Mandrel, Nylon Hammer",
    tag: "A Belizean $1 coin. The decagonal edge makes a great 'crown' effect when turned into a ring."
  }, {
    image: costumes,
    info: "Fabric - Sewing Machine",
    tag: "First trip to the Minnesota Renaissance Festival. My friends were great sports. i made all of the costumes the day before"
  }, {
    image: framebolsters,
    info: "Corner Brackets, Upholstery Tacks - Hammer",
    tag: "Bought the frame, but it needed ... something. i added the corner bolsters. Now it's right."
  }
]
class Crafts extends Component {


  render() {
    let craftArray = images.map((craft, index) => {
      return (
        <div id="crafts" key={index} >
          <img
            className="craftImg"
            src={craft.image}
            title={craft.info}
            alt={craft.tag}>
          </img>
          <h4>{craft.tag}</h4>
        </div>
      )
    })

    return (

      <section className="section">
        <h3>some things i've made with my hands</h3>
        
          <Carousel>
            {craftArray}
          </Carousel>
       
      </section>

    )
  }
};

export default Crafts;






