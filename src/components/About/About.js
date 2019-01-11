import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground, ReactPropTypes } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import '../../../App.css';

//import images
import git from '../../images/tech/git.png';
import bootstrap from '../../images/tech/bootstrap.png';
import CSS3 from '../../images/tech/CSS3.png';
import express from '../../images/tech/express.png';
import angular from '../../images/tech/angular.png';
import html5 from '../../images/tech/html5.png';
import jquery from '../../images/tech/jquery.png';
import js from '../../images/tech/js.png';
import mongodb from '../../images/tech/mongodb.png';
import node from '../../images/tech/node.png';
import postgresql from '../../images/tech/postgresql.png';
import react from '../../images/tech/react.png';
import redux from '../../images/tech/redux.png';
import sagas from '../../images/tech/sagas.png';
import reactnative from '../../images/tech/react-native.png';


const logos = [
  {
    logo: js,
    info: "Javascript"
  },{
    logo: html5,
    info: "HTML5"
  },{
    logo: CSS3,
    info: "CSS3"
  },{
    logo: angular,
    info: "AngularJS"
  },{
    logo: jquery,
    info: "jQuery"
  },{
    logo: bootstrap,
    info: "Bootstrap"
  },{
    logo: express,
    info: "ExpressJS"
  },{
    logo: node,
    info: "Node.JS"
  },{
    logo: git,
    info: "Git"
  },{
    logo: react,
    info: "ReactJS"
  },{
    logo: reactnative,
    info: "React Native"
  },{
    logo: redux,
    info: "Redux"
  },{
    logo: sagas,
    info: "Redux-Sagas"
  },{
    logo: mongodb,
    info: "MongoDB"
  },{
    logo: postgresql,
    info: "PostgreSQL"
  }
];

class About extends Component {

  static navigationOptions = {
    title: 'Handi-Crafts',
    headerStyle: { backgroundColor: '#282c34' },
  headerTitleStyle: { color: '#59C3C3', fontWeight: 'bold' },
  }

  render() {
    let logoArray = logos.map((logo, index) => {
      return (
        <View key={index} style={styles.container}>
          <Image
            // className="logoImg"
            source={logo.logo}
            title={logo.info}
            alt={logo.info}
            style={styles.image}>
          </Image>
          <Text style={styles.container}>{logo.info}</Text>
        </View>
      )
    })

    return (

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <StatusBar barStyle="light-content"/>
        </View>
        <Text style={styles.container}>some stuff i've learned with my brain</Text>
        <Text style={{color: '#59C3C3', fontFamily: 'Trebuchet MS', fontSize: 12, fontWeight: 'bold'}}>(a non-comprehensive list)</Text>
          
          {logoArray}
        
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
    color: '#59C3C3',
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#59C3C3',
    fontFamily: 'Trebuchet MS',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12
  },
  image: {
    marginTop: 48,
    borderColor: '#59C3C3',
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    width: 300,
    height: 350
  }
});

export default About;
