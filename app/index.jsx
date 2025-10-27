import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  return (
    <>
    <StatusBar style="light"  />
          <ImageBackground source={require('../assets/BrewTime.webp')} resizeMode="fill" style={{flex: 1, width: '100%', height: '100%',}}>

              <View style={{ marginTop: 490}}>
              <Text style={{color: '#fff5ec', textAlign: "center", margin: 45, fontFamily: "Jaro_400Regular" ,fontSize:29,  textShadowColor: "black",textShadowOffset: { width: -2, height: 2 },textShadowRadius: 2}}>Fuel your passion. Master your brew. Experience coffee like never before with BrewTime.</Text>
              </View>
              <View style={styles.container}>

      <Link href="/menu" asChild>
        <Pressable>
             <LinearGradient
                colors={['#CB7D2F', '#653E17']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Go to Menu ➔</Text>
              </LinearGradient>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 19,
    borderWidth: 3,
    borderColor: "white",
    // marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 26,
    fontFamily: "Jaro_400Regular",
  },
});
