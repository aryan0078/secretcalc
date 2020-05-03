import React, { PureComponent } from 'react';
import {  View, Text,StyleSheet, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {HEIGHT,WIDTH,} from '../button'
import Firebase from '../../App'
export default class ChatScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data:[{username:'',msg:''}],
      cuser:'',
      msg:''
    };
  }
  componentWillUnmount() {
    let ref = Firebase.database().ref('messages');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState({cuser:this.props.username})
    });
    console.log('DATA RETRIEVED');
  }
  send=()=>{
    Firebase.database().ref('messages').push({username:this.state.cuser,msg:this.state.msg})
    Alert.alert('Msg send')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.username}</Text>
      <TextInput style={styles.textinput} onChangeText={(msg) => this.setState({username})} value={this.state.msg}></TextInput>
      <TouchableOpacity style={styles.send} onPress={this.send}>
        <Text>Send</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  send:{
height:50,
width:50,
textAlign:'center'
  },
 textinput:{
   position:'absolute',
   bottom:0,
   borderWidth:2,
   borderColor:'black',
   width:WIDTH
 },
container:{
  backgroundColor:'#fff',
  alignContent:"center",
  justifyContent:"center",
  flex:1,
  textAlign:'center'
},

   
  });
   