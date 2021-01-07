import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './HomePage/Home'; 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

import Landing from './src/screens/Landing';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

//every page we need 
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'Sign Up' }}
          />  
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}
          />  
          {/* <Stack.Screen
              options={{ title: "" }}
              name="Home"
              component={Home}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
