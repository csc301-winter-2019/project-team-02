import React, { Component } from 'react';
import {Text, Alert, AppRegistry, Button, StyleSheet, View, TextInput } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('Thanks for letting us know!')
  }
  constructor(props) {
    super(props);
    this.state = {age: '',
		name: '',
		appearance: '',
		injured: false,
		why: ''};
  }

  render() {
    return (
      

        <View style={{padding: 40}}>
          <Text>Age:</Text>
          <TextInput
            style={{height: 40}}
            placeholder="(Estimate if unknown)"
            onChangeText={(age) => this.setState({age})}
          />
          
          
          <Text>Name:</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type the name here"
            onChangeText={(name) => this.setState({name})}
          />
          <Text>Appearance:</Text>
          <TextInput
            style={{height: 40}}
            placeholder="What are they Wearing"
            onChangeText={(appearance) => this.setState({appearance})}
          />
          <Text>Injured?</Text>
          {/* insert radio button???*/}
          <Text>Please let us know why do you think they need help</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Reason"
            onChangeText={(why) => this.setState({why})}
          />

          {/*additional questions*/}

          <Button
            onPress={this._onPressButton}
            title="Submit!"
          />
        </View>



    );
  }
}




