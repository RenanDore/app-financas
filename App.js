import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthProvider from "./src/contexts/auth";

import Routes from "./src/routes";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="auto" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
