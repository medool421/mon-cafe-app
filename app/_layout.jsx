import {  Stack } from "expo-router";
import {} from "expo-status-bar"
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
