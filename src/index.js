

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, StatusBar, Keyboard } from 'react-native';
import SignIn from './components/SignIn';
import SignInput from './components/SignInput';
import SignInButton from './components/SigninButton';
import { isEmpty } from "lodash";

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


  handleLogin = async () => {
    Keyboard.dismiss()
  };


  render() {
    const { emailError, passwordError } = this.state
    return [
      <StatusBar barStyle="dark-content" key={'001'} />,
      <ScrollView contentContainerStyle={styles.scrollStyle}
        keyboardShouldPersistTaps="always"
        key={'002'}>
        <View style={styles.mainViewStyle}>
          <View style={styles.body}>
            <SignIn />
            <SignInput inputLabel={'Email'} onChangeText={text => this.setState({ email: text })} validationMessage={emailError} />
            <SignInput inputLabel={'Password'} onChangeText={text => this.setState({ password: text })} validationMessage={passwordError} />
            <View style={styles.buttonView}>
              <SignInButton titleLabel={'Sign-in'} onPress={this.handleLogin}/>
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