import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "./src/services/firebaseConnection";

import Routes from "./src/routes";
// import { Container } from './styles';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
