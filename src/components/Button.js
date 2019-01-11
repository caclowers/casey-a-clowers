import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native';




const Button = (props) => {
 const { onPress, title} = props;
if (Platform.OS === 'ios'){
   return (
   <TouchableOpacity 
   onPress={onPress}
   activeOpacity={0.75}
   >
   <View style={styles.button}>
     <Text style={styles.text}>{title}</Text>
   </View>
   </TouchableOpacity>
 ) 
};

return (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.button}>
     <Text style={styles.text}>{title}</Text>
   </View>
  </TouchableNativeFeedback>
)
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6B6570',
    borderWidth: 2,
    borderColor: '#59C3C3',
    margin: 4,
    width: 112,
    height: 50,
    // padding: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#59C3C3',
    fontWeight: 'normal',
    fontSize: 18,
    fontFamily: 'Trebuchet MS',
  }
});

export default Button;