import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './HomePage/Home'; 
import OweOwed from './src/screens/OweOwed.js'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//every page we need we add a stack.screen with the component name
export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OweOwed">
      <Stack.Screen
          options={{ title: "" }}
          name="Home"
          component={Home}
        />
      <Stack.Screen
          options={{ title: "" }}
          name="OweOwed"
          component={OweOwed}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

;
