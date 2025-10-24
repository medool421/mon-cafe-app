import { Stack } from "expo-router";

export default function Layout() {
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
