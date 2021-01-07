import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import Landing from './src/screens/Landing';

export default function App() {
  return (
    <PaperProvider>
      <TopBar />
        <Landing />
      <MainScreen />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({

});
