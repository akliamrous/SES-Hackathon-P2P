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
              options={{ title: "" }}
              name="Transactions"
              component={Transactions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
