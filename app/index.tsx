import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

export default function Index() {
  const texture = require('../assets/images/texture.jpg');
  const chip = require('../assets/images/chip.png');
  const wifi = require('../assets/images/wifi.png');
  return (
    <View style={styles.main}>
    <View style={styles.card}>
    <View style={styles.cardShad}></View>
    <View style={styles.cardShad1}></View>
    <View style={styles.cardShad2}></View>

       <ImageBackground
      source={texture}
      // style={{ width: '100%', height: '100%' }} // Adjust as needed
    >
    <View style={styles.cardDetails}>
        <View style={styles.iconContainer}>
        <ImageBackground
      source={wifi}
      style={{ width: '100%', height: '100%' }} // Adjust as needed
    ></ImageBackground>
        </View>
        <View style={styles.chipImageContainer}>
        <ImageBackground
      source={chip}
      style={{ width: '100%', height: '100%' }} // Adjust as needed
    ></ImageBackground>
            <View  />
        </View>
    </View>
    <Text style={styles.cardNumber} >0000 0000 0000 0000</Text>
    <Text style={styles.cardDetailsText}>00/00</Text>
    <Text style={styles.cardDetailsText1}>KDV</Text>
    <View style={styles.visacon}>
    <ImageBackground
        source={{ uri: 'https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Image.png' }}
        style={styles.visaImage}
        alt="Visa logo"
        >
    </ImageBackground>
</View>
        </ImageBackground>
</View>
</View>
  );
}
const styles = StyleSheet.create({
  main: {
    // backgroundColor:'black',
    display:'flex',
    justifyContent:'center',
    // alignItems:"center",
    height:"100%"

  },
  card: {
      // backgroundColor: '#222', // Assuming dark background for card
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 7,
      height:250,
      borderRadius: 20,
      overflow: 'hidden',
      // padding: 16,
      margin: 8,
      position:'relative'
  },
  cardShad: {
      backgroundColor: '#0000', // Assuming dark background for card
      zIndex:5,
      shadowColor: '#000',
      shadowOffset: { width: 10, height: 4 },
      // shadowOpacity: 1,
      shadowRadius: 100,
      height:300,
      width:'20%',
      borderRadius: 20,
      // overflow: 'hidden',
      // padding: 16,
      // margin: 10 ,
      right:'-20%',
      position:'absolute'
  },
  cardShad1: {
    backgroundColor: '#0000', // Assuming dark background for card
    zIndex:5,
    shadowColor: '#000',
    shadowOffset: { width: 30, height: 4 },
    // shadowOpacity: 1,
    shadowRadius: 100,
    height:'20%',
    width:350,
    borderRadius: 20,
    // overflow: 'hidden',
    // padding: 16,
    // margin: 10 ,
    bottom:'-20%',
    position:'absolute'
  },
  cardShad2: {
      backgroundColor: '#0000', // Assuming dark background for card
      zIndex:5,
      shadowColor: '#000',
      shadowOffset: { width: 30, height: 4 },
      // shadowOpacity: 1,
      shadowRadius: 100,
      height:'20%',
      width:350,
      borderRadius: 20,
      // overflow: 'hidden',
      // padding: 16,
      // margin: 10 ,
      top:'-20%',
      position:'absolute'
  },
  cardDetails: {
    display:'flex',
      flexDirection: 'row',
      alignItems:'center',
      marginTop: 60,
      marginBottom: 20,
  },
  iconContainer: {
    transform: [{ rotate: '90deg' }],
    height:30,
    width:50,
  },
  chipImageContainer: {
    width: 55,
    height: 40,
    borderRadius:5,
    overflow:'hidden'
  },
  // chipImagePlaceholder: {
  //   width: "90%",
  //   height: "90%",

  //     // borderRadius: 30,
  // },
  cardNumber: {
    fontSize: 26,
    color: '#ffff',
    textAlign: 'center',
    textShadowOffset: { width: 2, height:1 }, 
    textShadowRadius: 0,
    textShadowColor: '#000', 
    letterSpacing:2,
    marginBottom:15,
},
  cardDetailsText: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      marginTop: 4,
      textShadowOffset: { width: 2, height:1 }, 
      textShadowRadius: 0,
      textShadowColor: '#000', 
  },
  cardDetailsText1: {
      fontSize: 18,
      color: '#fff',
      marginTop: 20,
      marginLeft: 28,
      textShadowOffset: { width: 2, height:1 }, 
      textShadowRadius: 0,
      textShadowColor: '#000', 
      fontFamily:"monospace"
  },
  visacon:{
    position: 'absolute',
    bottom: 0,
    right: -15,
    width: 140,
    height:45,
    zIndex:10,
    
  },
  visaImage: {
    width: "90%",
    height:"90%",
  },
});
