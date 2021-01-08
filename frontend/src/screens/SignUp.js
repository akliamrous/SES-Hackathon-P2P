import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import { globalStyles } from '../styles/global';
import * as firebase from "firebase";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMsg: "",
  }

  handleName = (text) => {
    this.setState({name: text})
  }

  handleEmail = (text) => {
    this.setState({email: text})
  }

  handlePassword = (text) => {
    this.setState({password: text})
  }

  handlePasswordConfirmation = (text) => {
    if (this.state.password != text) {
      this.setState({errorMsg: "Password fields do not match."})
    } else {
      this.setState({errorMsg: ""})
    }
  }

  createAccount() {
    // Firebase auth
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        this.props.navigation.navigate('Home');
      })
      .catch(error => this.setState({ errorMsg: error.message }))
  }

  render() {
    return (
        <View style={globalStyles.centeredContainer}>
            <Text style={globalStyles.inputDescText}>Name</Text>
            <TextInput
                style={styles.textInputField}
                placeholder="Enter your name..."
                onChangeText={this.handleName}
            />
            <Text style={globalStyles.inputDescText}>Email</Text>
            <TextInput
                style={styles.textInputField}
                placeholder="Enter your email..."
                onChangeText={this.handleEmail}
            />
            <Text style={globalStyles.inputDescText}>Password</Text>
            <TextInput
                style={styles.textInputField}
                secureTextEntry={true}
                placeholder="Enter your password..."
                onChangeText={this.handlePassword}
            />
            <Text style={globalStyles.inputDescText}>Confirm Password</Text>
            <TextInput
                style={styles.textInputField}
                secureTextEntry={true}
                placeholder="Enter your password again..."
                onChangeText={this.handlePasswordConfirmation}
            />
            <Text style={globalStyles.errorMsgText}>{this.state.errorMsg}</Text>
            <Button
                title="Sign Up"
                onPress={() => this.createAccount()}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    textInputField: {
        fontSize: 18,
        padding: 15,
        marginBottom: 15,
    }
});

export default SignUp;
