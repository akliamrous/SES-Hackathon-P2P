import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import Transactions from "./src/screens/Transactions"
import Landing from './src/screens/Landing';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import OweOwed from './src/screens/OweOwed';
import Home from './src/screens/HomePage/Home'
import "react-native-gesture-handler";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBgbDHG6zCe5eZrj1ZvoAH1Oy_jOvWAvGg",
  authDomain: "ses-hackathon-p2p-3d952.firebaseapp.com",
  databaseURL: "https://ses-hackathon-p2p-3d952-default-rtdb.firebaseio.com/",
  projectId: "ses-hackathon-p2p-3d952",
  storageBucket: "ses-hackathon-p2p-3d952.appspot.com",
  messagingSenderId: "574249060303",
  appId: "1:574249060303:web:c9ca5a4e3e5e9ef2f9f4ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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

           <Stack.Screen
            name="OweOwed"
            component={OweOwed}
            options={{ title: 'Outstanding Balances' }}
          />

          <Stack.Screen
              options={{ title: "" }}
              name="Home"
              component={Home}
          />

          <Stack.Screen
              options={{ title: "Pay & Request" }}
              name="Transactions"
              component={Transactions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
