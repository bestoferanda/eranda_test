

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import SignIn from './components/SignIn';


const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        <View style={styles.body}>
          <SignIn />
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    justifyContent: 'center'

  },
  scrollStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  }

});

export default App;
