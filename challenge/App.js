import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, TextInput, Alert } from 'react-native';
import Contacts from 'react-native-contacts'
// import CheckBox from 'react-native-checkbox';
import { CheckBox } from 'react-native-elements'

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      spinner: true,
      checked: false,
      contactBackground: '#fff',
      contactName: 'blank',
      contactNumber: 'blank',
    };
  }

  render() {

    // issues with react-native-contacts
    // undefined is not an object (evaluating '_reactNativeContacts2.default.getAll')

    // need to do something in xcode maybe
      // can't figure out how to open this xcode projects
    // tried linking and that messed everything up
      // linking doesn't work
    // might need to degrade npm version

    const contacts = {
      "Kabir":"Virji",
    }

    // Contacts.getAll((err, contacts) => {
    //   if(err === 'denied'){
    //     // error
    //   } else {
    //     // contacts returned in []
    //   }
    // })
    let spinner = true;

    // when contacts finish loading
    // setTimeout(() => { this.setState({spinner: false}); }, 5000);
    function errorCheck(name, number) {
      if (name === 'blank'){
        console.warn("name")
      }
      if (number == 'blank'){
        console.warn("number")
      }
    }

    return (
      <View>
        <View style={[styles.box, {backgroundColor: this.state.contactBackground}]}>
          <CheckBox
            // Title will be contact information
            title='Kabir Virji #4'
            onPress={() => {
              this.setState({checked: !this.state.checked})
              if (this.state.contactBackground === '#fff') {
                this.setState({contactBackground: 'skyblue'})
              } else {
                this.setState({contactBackground: '#fff'})
              }
            }}
            checked={this.state.checked} 
            checkedColor={'green'}
            uncheckedColor={'red'}
          />
        </View>
        <ActivityIndicator
          animating={spinner}
        />
        <Text>Kabir Virji</Text>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.contactName}
            placeholder={"contact name"}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.contactNumber}
            placeholder={"contact number"}
            keyboardType={'numeric'}
          />
          <Button
            onPress={errorCheck(this.state.contactName, this.state.contactNumber)}
            // need to error check name and number
            title="Create New Contact"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: 50,
    // height: 50,
    // backgroundColor: 'skyblue',
    backgroundColor:'#fff',
    marginTop: 50,
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection:'row',
    justifyContent: 'center',
  }
});
