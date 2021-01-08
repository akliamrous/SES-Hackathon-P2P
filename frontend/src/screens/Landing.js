import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../styles/global';

class Landing extends React.Component {
  login() {
    this.props.navigation.navigate('Login');
  }

  signUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={[globalStyles.centeredContainer, styles.container]}>
        <Text style={styles.title}>PeerLend</Text>
        <Image
          style={styles.image}
          source={require("../assets/logo.png")}
          resizeMode="contain"
        ></Image>
        <TouchableOpacity
          style={styles.bigBtn}
          color="#299078"
          onPress={() => this.login()}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bigBtn}
          color="#299078"
          onPress={() => this.signUp()}
        >
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 75,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 48,
    color: "#299078",
  },
  image: {
    height: 300,
    width: 300,
  },
  bigBtn: {
    width: 200,
    margin: 8,
  },
  btnText: {
    color: "white",
    padding: 20,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#299078",
  }
});

export default Landing;
