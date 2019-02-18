import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
	//Every component needs a render() function
  render() {
    return (
    	//<View> acts like the way <div> does in JavaScript
    	//style={...} stores properties about where you want the component to be placed
    	//and how you want it to look. It's similar to adding CSS styles to HTML elements
    	//when creating web pages
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
