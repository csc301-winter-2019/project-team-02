import React, { Component } from 'react';
import {Text, Alert, AppRegistry, StyleSheet, View } from 'react-native';
import { Button, Input, CheckBox } from 'react-native-elements';

export default class Form1 extends Component {
  _onPressButton1() {
    const { navigation } = this.props;
    const coordinates = navigation.getParam('coordinates');
    //var coordinates = this.coordinates ? coordinates : [];
    fetch('https://helpthehome-qa.herokuapp.com/mobilerequest', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'coordinates': coordinates,
        'type': "Point",
        'isInjured': this.state.injured,
        'reasonForHelp': this.state.why,
        'ageRange': this.state.age,
        'clothingDescription': this.state.appearance
    }),
  });
  // TODO: handle the response from the serve and decide what to display
  // based on that
  // for now just to back to the home page
  Alert.alert("You will now be redirected to the main page");
  this.props.navigation.navigate('GreetingPage');
}
  _onPressButton2() {
    Alert.alert('Continue:')
  }
  constructor(props) {
    super(props);
      this.state = {
        age: '',
        appearance: '',
        injured: false,
        why: ''
      };
  }

  render() {
    return (
      <View style={{padding: 40}}>
        <Text>Age:</Text>
          <Input
            style={{height: 40}}
            placeholder="Estimate is fine"
            onChangeText={(age) => this.setState({age})}
          />
        <Text>Appearance:</Text>
          <Input
            style={{height: 40}}
            placeholder="What are they wearing?"
            onChangeText={(appearance) => this.setState({appearance})}
          />
        <CheckBox
            center
            title="Are they injured?"
            checked={this.state.injured}
            onPress={() => this.setState({ injured: !this.state.injured })}
          />
        <Text>Reason for help?</Text>
            <Input
              style={{height: 40}}
              placeholder="Please keep it short"
              onChangeText={(why) => this.setState({why})}
            />
        <View style={{padding: 40}}>
          <Button
              buttonStyle={{backgroundColor:"green"}}
              onPress={() => this._onPressButton1()}
              title="Submit!"
          />
          <Button
              containerStyle={{paddingTop: 10}}
              onPress={() =>  this.props.navigation.navigate('GreetingPage')}
              title="Go Back"
          />
        </View>
      </View>
    );
  }
}
