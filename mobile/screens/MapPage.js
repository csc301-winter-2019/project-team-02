import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, Button, AppRegistry, Navigator, TouchableHighlight, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Location, Permissions, Constants } from 'expo';
import {MapView} from 'expo';

// press location on map
// on press, drop pin at location
// press proceed to redirect to the formpage


// default initial map region is Toronto

export default class Form1 extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	initial_region_coordinates: [-79.3832, 43.6532],
	    	markers: [],
	    	canProceed: false,
	    }
      }

  	addMarker(e) {
  		this.setState(
  			{ markers : [{ latlng: e.nativeEvent.coordinate}], canProceed: true}
  		);
  	}
  	deleteMarker() {
  		this.setState(
  			{ markers : [], canProceed: false}
  		);
  	}
  	moveToFormPage = () => {
  		if(this.state.canProceed === false) {
  			alert("Please press on the map to drop a pin");
  			return;
  		}
	    this.props.navigation.navigate('FormPage',
	      {coordinates : [
	          this.state.markers[0].latlng.longitude,
	          this.state.markers[0].latlng.latitude]
	      });
  };

	render() {
	    return (
	    	<View style={{flex:1,}}>
		    	<View style={{flex:1}}>
			  		<MapView
			    		style={{ flex: 1 }}
			    		initialRegion={{
			      		latitude: this.state.initial_region_coordinates[1],
			      		longitude: this.state.initial_region_coordinates[0],
			      		latitudeDelta: 0.0922,
			      		longitudeDelta: 0.0421,
			   			}}
			   			onPress={this.addMarker.bind(this)}
			  		>

			  			{
			  				this.state.markers.map((marker, i) =>  (<MapView.Marker key={i} coordinate={marker.latlng}
			  				onPress={(e) => {e.stopPropagation(); this.deleteMarker(i)}} />))
			  			}
			  		</MapView>
			  	</View>

			  	<TouchableHighlight 
			  	style={styles.first_button_container}
			  	onPress={() => { this.moveToFormPage() }}>
					 	<Text style={styles.proceed_title}>
					 		Proceed
					 	</Text>
				</TouchableHighlight>
			</View>
	    );
  }
  
}
const styles = StyleSheet.create( {
	first_button_container: {
	width: '100%',
	flex: 1,
	position: 'absolute',
    bottom:0,
    backgroundColor: '#535c68',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  proceed_title: {
    color: '#FFF',
    marginTop: 15,
    marginBottom: 35,
    textAlign: 'center',
    opacity: 0.9,
    fontSize: 20
  }
})