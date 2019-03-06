import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, Button, AppRegistry, Navigator, TouchableHighlight, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Location, Permissions, Constants } from 'expo';

export default class GreetingPage extends Component {
	//Every component needs a render() function
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'This will not work on an android device',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
     this.setState({ location });
  };

  moveToFormPage = () => {
    this._getLocationAsync;
    if (this.state.location === null)  {
      Alert.alert("There was a problem accessing your location");
      return;
    }
    const coordinates = [this.state.location.coords.longitude, this.state.location.coords.latitude];
    this.props.navigation.navigate('FormPage', {coordinates : coordinates});
  }


  render() {
    return (
    	//<View> acts like the way <div> does in JavaScript
    	//style={...} stores properties about where you want the component to be placed
    	//and how you want it to look. It's similar to adding CSS styles to HTML elements
    	//when creating web pages

      <View style={styles.container}>

      	<View style={styles.titleContainer}>
      		<Text style={styles.title}>
      			Ensure that location services are enabled!
      		</Text>
      	</View>

      	<TouchableHighlight
      		style={styles.first_button_container}
      		onPress={() => { this.moveToFormPage()
          }}>

      		<View style={styles.press_button}>

      			<View>
      			<Text style={styles.current_location_title}>
      				Use Current Location
      			</Text>
      			</View>

      			<View marginTop = {20}>
      				<Ionicons name="md-locate" size={40} color="white"/>
      			</View>

      		</View>

      	</TouchableHighlight>

      	<TouchableHighlight
      		style={styles.second_button_container}
      		onPress={() => this.props.navigation.navigate('FormPage')}>
      		<View style={styles.press_button}>

      			<View>
      			<Text style={styles.current_location_title}>
      				Drop Pin
      			</Text>
      			</View>

      			<View marginTop = {20}>
      				<Ionicons name="md-pin" size={40} color="white"/>
      			</View>

      		</View>
      	</TouchableHighlight>

      </View>
    );
  }
}


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#40739e',
    alignItems: 'stretch'
  },
  titleContainer: {
  	flex: 3,
    //position: 'absolute',
    marginTop: 205,
    //flexGrow: 1
  },
  title: {
  	color: '#FFF',
  	marginTop: 10,
  	textAlign: 'center',
  	opacity: 0.9,
  	fontSize: 18,
    fontStyle: 'italic'
  },
  current_location_title: {
  	color: '#FFF',
  	marginTop: 15,
  	textAlign: 'center',
  	opacity: 0.9,
  	fontSize: 20
  },
  first_button_container: {
  	flex: 1,
  	//position: 'absolute',
  	//marginTop: 360,
  	backgroundColor: '#c0392b',
  	flexDirection: 'row',
  	justifyContent: 'center',
  	alignItems: 'stretch'
  },
  press_button: {
  	flexDirection: 'column',
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  second_button_container: {
  	flex: 1,
  	backgroundColor: '#535c68'
  }
})
