import React, { Component } from 'react';
import { StyleSheet, Button, View, KeyboardAvoidingView } from 'react-native';
import { Constants } from 'expo';
import t from 'tcomb-form-native';

const Form = t.form.Form;

var Gender = t.enums({
  "Male"  : "Male",
  "Female": "Female",
  "Unsure": "Can't say for sure",
});

var AgeRanges = t.enums({
  "0-20" : "Under 20 years",
  "20-30": "20 - 30 years",
  "30-50": "30 - 50 years",
  "50+"  : "Over 50 years",
});

var Races = t.enums({
  "White"     : "European or White",
  "eAsian"    : "East Asian",
  "sAsian"    : "South Asian",
  "Black"     : "Black or African American",
  "Aboriginal": "Aboriginal",
  "Other"     : "Other",
});

const Report = t.struct({
  gender    : Gender,
  age       : AgeRanges,
  race      : Races,
  longhair  : t.Boolean,
  longbeard : t.Boolean,
  extra     : t.maybe(t.String)
});

const options = {
  label: "Help us identify them!",
  fields: {
    gender: {
      auto: 'none',
      nullOption: {value: '', text: "Gender"},
      error: "Please pick an option for this field",
    },
    age: {
      auto: 'none',
      nullOption: {value: '', text: "Guess their age"},
      error: "Please pick an option for this field"
    },
    race: {
      auto: 'none',
      nullOption: {value: '', text: "Race"},
      error: "Please pick an option for this field",
    },
    longhair: {
      label: "Long hair?"
    },
    longbeard: {
      label: "Long beard?"
    },
    extra: {
      label: "Distinctive features",
      help: "How would you identify them in a crowd? Tattoos, peircings, holding a sign etc.",
    },
  },
};

export default class Form1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  getApiUrl() {
    var releaseChannel = Constants.manifest.releaseChannel;
    if (releaseChannel === undefined) return Constants.manifest.extra.apiUrl.dev
    if (releaseChannel.indexOf('prod') !== -1) return Constants.manifest.extra.apiUrl.prod
    if (releaseChannel.indexOf('staging') !== -1) return Constants.manifest.extra.apiUrl.staging
  }

  _onSubmitPress(values) {
    const { navigation } = this.props;
    const coordinates = navigation.getParam('coordinates');
    var url = this.getApiUrl();
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type        : "Point",
        coordinates : coordinates,
        gender      : values.gender,
        age         : values.age,
        race        : values.race,
        longhair    : values.longhair,
        longbeard   : values.longbeard,
        extra       : (values.extra) ? values.extra : "",
		status      : "new"
      }),
    });
    //// TODO: handle the response from the serve and decide what to display
    //// based on that
    //// for now just to back to the home page
    alert("Thank you for your contribution.");
    this.props.navigation.navigate('GreetingPage');
  }

  handleSubmit() {
     var value = this.refs.form.getValue();
     if (value) {
       this._onSubmitPress(value);
       this.clearForm();
     }
  }

  onChange(value) {
    this.setState({ value });
  }

  clearForm() {
    this.setState({ value: null });
  }

  render() {
    return (
      <KeyboardAvoidingView
            style={styles.container}
            behavior="position"
      >
        <Form
            ref="form" // assign a reference
            type={Report}
            options={options}
            value={this.state.value}
            onChange={this.onChange.bind(this)}
        />
        <View style={{flexDirection: 'row'}}>
            <View style={{flex:1 , marginRight:10}} >
                <Button title="Back" onPress={() => this.props.navigation.navigate('GreetingPage')} />
            </View>
            <View style={{flex:1}} >
                <Button title="Submit" color="#841584" onPress={() => this.handleSubmit()} />
            </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
