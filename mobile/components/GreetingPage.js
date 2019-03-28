import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet, Button, AppRegistry, Navigator, TouchableHighlight, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Location, Permissions, Constants } from 'expo';

export default class GreetingPage extends Component {
  state = {
    isLoading: true,
    errorMessage: null,
    locationResult: null,
  };

  // runs as soon as page is loaded
  componentDidMount() {
      // immediately attempt to get the location
      this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    // ask location services to allow location access to THIS app.
    // Note: location services itself must still be enabled for this!
    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      // try to actually get the location asynchronously - a Promise
      Location.getCurrentPositionAsync({enableHighAccuracy: true}).then((position) => {
        this.setState({locationResult: position.coords});
        // since we are guaranteed to have the location here, its safe to load the full view
        this.setState({isLoading: false});
      }).catch((e) => {
        alert(e + ' Please make sure your location (GPS) is turned on.');
      });

    } else {
      // if the user pressed "Deny" or something on the promt
      throw new Error('Location permission not granted');
    }
  };

  moveToFormPage = () => {
    this.props.navigation.navigate('FormPage',
      {coordinates : [
          this.state.locationResult.longitude,
          this.state.locationResult.latitude]
      });
  };


  render() {
    //<View> acts like the way <div> does in JavaScript
    //style={...} stores properties about where you want the component to be placed
    //and how you want it to look. It's similar to adding CSS styles to HTML elements
    //when creating web pages

    // initialy show a loading screen when trying to get location on load
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Trying to get location...
            </Text>
          </View>
        </View>
      )
    }

    return (

      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Welcome to Helpthehome!
          </Text>
        </View>

        <TouchableHighlight
          style={styles.first_button_container}
          onPress={() => { this.moveToFormPage() }}>

          <View style={styles.press_button}>

            <View padding={15}>
            <Text style={styles.current_location_title}>
              Use Current Location
            </Text>
            </View>

            <View marginTop = {5}>
              <Ionicons name="md-locate" size={40} color="white"/>
            </View>

          </View>

        </TouchableHighlight>

        <TouchableHighlight disabled style={styles.second_button_container}>
          <View style={styles.press_button}>

            <View padding={15}>
             <Text style={styles.current_location_title}>
              Drop Pin
             </Text>
            </View>

            <View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding:5,
    alignItems: 'center'
  },
  second_button_container: {
    flex: 1,
    backgroundColor: '#535c68',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
})
