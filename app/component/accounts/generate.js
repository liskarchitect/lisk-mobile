import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class Generate extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Generate new wallet here
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

export default Generate;
