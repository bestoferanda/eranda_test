

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, StatusBar, Keyboard, Alert } from 'react-native';
import SignIn from './components/SignIn';
import SignInput from './components/SignInput';
import SignInButton from './components/SigninButton';
import { isEmpty } from "lodash";
import { LoginValidations } from './config/strings';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    };
  }

  //Sample email validations we  can use validate.js like libraries to validate large scale forms
  validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    }
    else {
      return true;
    }
  }


  handleLogin = async () => {
    Keyboard.dismiss()
    const { email, password } = this.state;
    if (!this.validateEmail(email)) {
      this.setState({ emailError: LoginValidations.emailValidation })
      return
    }
    if (isEmpty(password)) {
      this.setState({ passwordError: LoginValidations.emptyPasswordValidation })
      return
    }

    this.setState({ passwordError: "", emailError: "" })
    Alert.alert("Login", "Login successfully!")

  };


  render() {
    const { emailError, passwordError, email, password } = this.state
    return [
      <StatusBar barStyle="dark-content" key={'001'} />,
      <ScrollView contentContainerStyle={styles.scrollStyle}
        keyboardShouldPersistTaps="always"
        key={'002'}>
        <View style={styles.mainViewStyle}>
          <View style={styles.body}>
            <SignIn />
            <SignInput inputLabel={'Email'}
              onChangeText={text => this.setState({ email: text })}
              onBlur={() => { this.setState({ emailError: this.validateEmail(email) ? '' : LoginValidations.emailValidation }) }}
              validationMessage={emailError} />
            <SignInput inputLabel={'Password'}
              onChangeText={text => this.setState({ password: text })}
              onBlur={() => { this.setState({ passwordError: isEmpty(password) ? LoginValidations.emptyPasswordValidation : '' }) }}
              validationMessage={passwordError} />
            <View style={styles.buttonView}>
              <SignInButton titleLabel={'Sign-in'} onPress={this.handleLogin} />
            </View>
          </View>
        </View>
      </ScrollView>
    ]
  }
}


const styles = StyleSheet.create({
  body: {
    flexDirection: 'column'
  },
  mainViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollStyle: {
    flexGrow: 1
  },
  buttonView: {
    alignItems: 'flex-end',
    padding: 10
  },

});