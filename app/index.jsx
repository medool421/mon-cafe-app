import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>مرحبا في متجر قهوتي</Text>

      <Link href="/about" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Menu ➔ </Text>
        </Pressable>
      </Link>
    </View>
  );
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
