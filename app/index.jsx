import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React from "react";
import {ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useFonts, Jaro_400Regular } from '@expo-google-fonts/jaro';
import RootLayout from './_layout';


export default function Home() {

  return (


    <>
    <StatusBar style="light"  />
          <ImageBackground source={require('../assets/BrewTime.webp')} resizeMode="fill" style={{flex: 1, width: '100%', height: '100%',}}>

              <View style={{ marginTop: 490}}>
              <Text style={{color: '#fff5ec', textAlign: "center", margin: 45, fontFamily: "Jaro_400Regular" ,fontSize:29,  textShadowColor: "black",textShadowOffset: { width: -2, height: 2 },textShadowRadius: 2}}>Fuel your passion. Master your brew. Experience coffee like never before with BrewTime.</Text>
              </View>
                <View style={styles.container}>

      <Link href="/about" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Menu ➔ </Text>
        </Pressable>
      </Link>
    </View>
          </ImageBackground>
          

        </>


  )

 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#CB7D2F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
     borderWidth: 3,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
