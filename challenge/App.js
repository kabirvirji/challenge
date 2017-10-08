import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Contacts from 'react-native-contacts'

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      spinner: true
    };
  }

  render() {

    // issues with react-native-contacts
    // undefined is not an object (evaluating '_reactNativeContacts2.default.getAll')

    // need to do something in xcode maybe
    // tried linking and that messed everything up
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

    // when contacts finish loading
    setTimeout(() => { this.setState({spinner: false}); }, 5000);

    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.spinner}
        />
        <Text>Kabir Virji</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
