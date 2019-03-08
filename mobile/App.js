import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, Button, AppRegistry, Navigator, TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import GreetingPage from './components/GreetingPage';
import FormPage from './screens/Form1';


const RootStack = createStackNavigator( {GreetingPage: GreetingPage, FormPage: FormPage,},
	{headerMode: 'none'})

const App = createAppContainer(RootStack)

export default App;
	
