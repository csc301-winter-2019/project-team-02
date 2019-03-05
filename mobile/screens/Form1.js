import React, { Component } from 'react';
import {Text, Alert, AppRegistry, Button, StyleSheet, View, TextInput } from 'react-native';

export default class Form1 extends Component {
  _onPressButton1() {
    //const {navigation} = this.props;
    //const coordinates = navigation.getparam('coordinates');
    var coordinates = this.coordinates ? coordinates : [];
    Alert.alert("Thank you for your response.")
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
          <TextInput
            style={{height: 40}}
            placeholder="(Estimate if unknown)"
            onChangeText={(text) => this.setState({age:text})}
          />
        <Text>Appearance:</Text>
          <TextInput
            style={{height: 40}}
            placeholder="What are they wearing"
            onChangeText={(appearance) => this.setState({appearance})}
          />
        <Text>Are they injured?</Text>
          <TextInput
            style={{height: 40}}
            placeholder="If so, please explain the injury"
            onChangeText={(injured) => this.setState({injured})}
          />
        <Text>Reason for help?</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Why does the individual require assistance"
              onChangeText={(why) => this.setState({why})}
            />
        <View style={{padding: 40}}>
          <Button
              onPress={() => this._onPressButton1()}
              title="Submit!"
          />
        </View>
      </View>
    );
  }
}
