import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";

import Landing from './src/screens/Landing';
import SignUp from './src/screens/SignUp';

export default function App() {
  return (
    <PaperProvider>
      <SignUp />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  
});
