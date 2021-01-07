import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './HomePage/Home'; 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import Landing from './src/screens/Landing';
import SignUp from './src/screens/SignUp';
const Stack = createStackNavigator();

//every page we need 
export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          options={{ title: "" }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
