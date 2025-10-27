import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFonts, Jaro_400Regular } from '@expo-google-fonts/jaro';


export default function Layout() {
   const [fontsLoaded] = useFonts({Jaro_400Regular,});
  

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#a35905ff",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >

      <Stack.Screen
        name="index"
        options={{
          title: "BrewTime Coffee",
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="menu"
        options={{
          title: "Notre Menu",
          headerShown: false,
          
        }}
      />
    </Stack>
  );
}

