import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import { globalStyles } from '../styles/global';

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errorMsg: "",
  }

  handleEmail = (text) => {
    this.setState({email: text})
  }

  handlePassword = (text) => {
    this.setState({password: text})
  }

  logIn() {
    // Firebase auth

    // Successful log in
    this.props.navigation.navigate('Home');     // Might need to change name later
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
                placeholder="Enter your password..."
                onChangeText={this.handlePassword}
            />
            <Text style={globalStyles.errorMsgText}>{this.state.errorMessage}</Text>
            <Button
                title="Login"
                onPress={() => this.logIn()}
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

export default Login;
