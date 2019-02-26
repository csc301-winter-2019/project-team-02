import React, { Component } from 'react';
import {Text, Alert, AppRegistry, Button, StyleSheet, View, BackHandler } from 'react-native';


export default class Success extends Component {
  _onPressButton() {
    BackHandler.exitApp()
  }


  render() {
    return (

        <View style={{padding: 40}}>
          <Text>Thanks for letting us know.</Text>
          <Text>We will try our best to find help for this individual ASAP.</Text>


          {/*additional questions*/}
          <View style={{padding: 100}}>
            <Button
              onPress={this._onPressButton}
              title="Exit"
            />
          </View>

        </View>



    );
  }
}




