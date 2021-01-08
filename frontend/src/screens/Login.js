import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../styles/global';
import * as firebase from "firebase";

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
    const { email, password } = this.state 
    
    // Firebase auth
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        this.props.navigation.navigate('Home');
      })
      .catch(error => this.setState({ errorMsg: error.message }));
  }

  render() {
    return (
        <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.inputDescText}>Email</Text>
            <TextInput
                style={styles.textInputField}
                autoCapitalize="none"
                onChangeText={this.handleEmail}
            />
            <Text style={globalStyles.inputDescText}>Password</Text>
            <TextInput
                style={styles.textInputField}
                secureTextEntry={true}
                onChangeText={this.handlePassword}
            />
            <Text style={globalStyles.errorMsgText}>{this.state.errorMsg}</Text>
            <View style={styles.centered}>
              <TouchableOpacity
                style={styles.bigBtn}
                color="#299078"
                onPress={() => this.logIn()}
              >
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputField: {
    marginBottom: 30,
    borderBottomColor: "#48B77D",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 50,
    fontSize: 18,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
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
    margin: 20,
  }
});

export default Login;
