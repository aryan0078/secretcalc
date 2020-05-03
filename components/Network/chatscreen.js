import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';

export default class chatscreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> This is chat screen </Text>
      </View>
    );
  }
}
