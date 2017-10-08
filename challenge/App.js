import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import Contacts from 'react-native-contacts'
// import CheckBox from 'react-native-checkbox';
import { CheckBox } from 'react-native-elements'

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      spinner: true,
      checked: false
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

    return (
      <View style={styles.box}>
        <CheckBox
          // label=''
          // checked={false}
          // onChange={(checked) => console.warn("checkbox works", checked)}
          title='Kabir Virji'
          onPress={() => {
            this.setState({checked: !this.state.checked})
          }}
          checked={this.state.checked} 
          checkedColor={'green'}
          uncheckedColor={'red'}
        />
        <ActivityIndicator
          animating={spinner}
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
