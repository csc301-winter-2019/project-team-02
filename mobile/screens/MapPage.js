import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, Button, AppRegistry, Navigator, TouchableHighlight, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Location, Permissions, Constants } from 'expo';
import {MapView} from 'expo';

// press location on map
// on press, drop pin at location, ask user to confirm the location
// redirect to the formpage


// default initial map region is Toronto
//var Initial_region_coordinates = [-79.3832, 43.6532];

export default class Form1 extends Component {

	constructor(props) {
	    super(props);
	    // const { navigation } = this.props;
    	// const coordinates = navigation.getParam('coordinates');
	    this.state = {
	    	initial_region_coordinates: [-79.3832, 43.6532],
	    }
      }

	/*get_region_coordinates() {
		const { navigation } = this.props;
    	const coordinates = navigation.getParam('coordinates');
    	return coordinates;
	}*/

	render() {
	    return (
		  		<MapView
		    		style={{ flex: 1 }}
		    		initialRegion={{
		      		latitude: this.state.initial_region_coordinates[1],
		      		longitude: this.state.initial_region_coordinates[0],
		      		latitudeDelta: 0.0922,
		      		longitudeDelta: 0.0421,
		   			}}
		  		/>
	    );
  }
  
}