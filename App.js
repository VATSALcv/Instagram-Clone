import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
