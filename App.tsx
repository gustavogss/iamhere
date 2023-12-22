import React from "react";
import { Text, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { Home } from "./src/screens/Home";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
      <StatusBar 
      barStyle="light-content" 
      backgroundColor="transparent"
      translucent
      />
      
    </SafeAreaView>
  );
}

