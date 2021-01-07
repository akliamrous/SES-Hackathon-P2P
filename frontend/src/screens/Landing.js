import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
} from 'react-native';
// import { globalStyles } from '../styles/global';

class Landing extends React.Component {
//   state = {
    
//   };

  login() {
    this.props.navigation.navigate('Login');
  }

  signUp() {
    this.props.navigation.navigate('Sign Up');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
            source={require("../assets/logo")}
            resizeMode="contain"
        ></Image>
        <Button
            title="Sign Up"
            onPress={() => this.signUp()}
        />
        <Button
          title="Login"
          onPress={() => this.login()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(240,247,238)",
    flex: 1,
    alignItems: "center",
  },
});

export default Landing;
