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
          backgroundColor: "#a35905ff", // Couleur orange/ambre
        },
        headerTintColor: "#fff", // Couleur du texte
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* Écran d'accueil */}
      <Stack.Screen
        name="index"
        options={{
          title: "BrewTime Coffee",
          headerShown: false,
        }}
      />

      {/* Écran menu */}
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

