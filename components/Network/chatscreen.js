import React, { PureComponent } from 'react';
import {  View, Text,StyleSheet, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {HEIGHT,WIDTH,} from '../button'
import {db} from '../../App'
export default class ChatScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data:[{username:'',msg:''}],
      cuser:'',
      msg:''
    };
  }
  componentWillUnmount=()=> {
    
  }
  send=()=>{
    db.ref('messages').push({username:this.props.username,msg:this.state.msg})
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.username}</Text>
    <Text>{this.state.data[0].msg}</Text>
      <TextInput style={styles.textinput} onChangeText={(msg) => this.setState({msg})} value={this.state.msg}></TextInput>
      <TouchableOpacity style={styles.send} onPress={this.send}>
        <Text>Send</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  send:{
    backgroundColor:'black',
height:50,
width:50,
textAlign:'center'
  },
 textinput:{
   position:'absolute',
   bottom:0,
   height:100,
   borderWidth:2,
   borderColor:'black',
   width:WIDTH,
 },
container:{
  backgroundColor:'#fff',
  alignContent:"center",
  justifyContent:"center",
  flex:1,
  textAlign:'center'
},

   
  });
   