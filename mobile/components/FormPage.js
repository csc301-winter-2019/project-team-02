import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, Button, AppRegistry, Navigator, TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class FormPage extends Component {
	render() {
		return (
			<View marginTop = {50}>
				<Text>
					Put the form stuff here
				</Text>
				<Button 
					onPress={() => this.props.navigation.navigate('GreetingPage')}
					title='Go Back'
				/>
			</View>
		);
	}
}
