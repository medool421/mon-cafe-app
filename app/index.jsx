import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { useFonts, Jaro_400Regular } from '@expo-google-fonts/jaro';


export default function Home() {
  let [fontsLoaded] = useFonts({Jaro_400Regular,});

  if (!fontsLoaded) {
  return null;
}
  return (

    <>
    <StatusBar style="light"  />
          <ImageBackground source={require('../assets/BrewTime.webp')} resizeMode="fill" style={{flex: 1, width: '100%', height: '100%',}}>

              <View style={{ marginTop: 490}}>
              <Text style={{color: '#fff5ec', textAlign: "center", margin: 45, fontFamily: "Jaro_400Regular" ,fontSize:29,  textShadowColor: "black",textShadowOffset: { width: -2, height: 2 },textShadowRadius: 2}}>Fuel your passion. Master your brew. Experience coffee like never before with BrewTime.</Text>
              </View>
          </ImageBackground>
          

        </>


  )


 
}
