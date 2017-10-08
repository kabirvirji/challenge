import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from 'react-native-contacts'

export default class App extends React.Component {
  render() {

    // issues with react-native-contacts
    // undefined is not an object (evaluating '_reactNativeContacts2.default.getAll')

    // need to do something in xcode maybe
    // tried linking and that messed everything up

    const contacts = {
      "Kabir":"Virji",
    }

    Contacts.getAll((err, contacts) => {
      if(err === 'denied'){
        // error
      } else {
        // contacts returned in []
      }
    })

    return (
      <View style={styles.container}>
        <Text>Kabir</Text>
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
