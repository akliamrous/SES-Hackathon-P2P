import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
} from 'react-native';
import { globalStyles } from '../styles/global';

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
      <View style={globalStyles.centeredContainer}>
        {/* <Image
            source={require("./src/assets/logo")}
            resizeMode="contain"
        ></Image> */}
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
  
});

export default Landing;
