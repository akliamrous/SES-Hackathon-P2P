import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import { globalStyles } from '../styles/global';

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
  }

  handleEmail = (text) => {
    this.setState({email: text})
  }

  handlePassword = (text) => {
    this.setState({password: text})
  }

  createAccount() {
    // Firebase auth

    // Successful sign up
    this.props.navigation.navigate('Homepage');     // Might need to change name later
  }

  render() {
    return (
        <View style={globalStyles.centeredContainer}>
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
                placeholder="Enter a password..."
                onChangeText={this.handlePassword}
            />
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
