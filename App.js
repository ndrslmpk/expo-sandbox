import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from "./assets/woly.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.instructions}>And another one!</Text>
      <StatusBar style='auto' />

      <TouchableOpacity
        onPress={() => alert("Hello World")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 360,
    height: 240,
  },
  instructions: {
    color: "#888",
    fontSize: 24,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
