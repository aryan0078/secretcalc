import React, { PureComponent } from 'react';
import { AppState, View, Text, StyleSheet, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from 'react-native-elements';
import {db} from '../../App'
import ChatScreen from './chatscreen'

export default class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);
this.username=this.username.bind(this)
    this.state = {
      username:'',
      appState:AppState.currentState,
      network:true,
      login:false,
    };
  }
  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    
   
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
    this.setState({network:false})
    }
    this.setState({ appState: nextAppState });
  };
username=()=>{
  
    
 db.ref('users').push({username:this.state.username})
 this.setState({login:true})
}

  render() 
 
  {
    if(this.state.login){
      return(<ChatScreen username={this.state.username}/>)
    }
    if (this.state.network==false){
      return <Home/>
    }
    if(AppState.currentState=="inactive"||AppState.currentState=="background"){
      Alert.alert(AppState.currentState)
      this.setState({network:true})
      return <Home/>
    }
    return (
      <View style={styles.container}>
<Text></Text>
        <Text style={styles.label}>Username</Text>
        <TextInput placeholder="Username" style={styles.input} onChangeText={(username) => this.setState({username})} value={this.state.username}></TextInput>
        <TouchableOpacity style={styles.button} onPress={this.username}>
          <Text style={styles.btext}>></Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btext:{
    alignSelf:'center',
    color:'#fff'
  },
 button:{
   borderRadius:25,
   margin:10,
   alignSelf:'center',
   justifyContent:"center",
   alignContent:"center",
textAlign:'center',
  height:40,
  width:40,
   backgroundColor:'black'
 },
container:{
  backgroundColor:'#fff',
  alignContent:"center",
  justifyContent:"center",
  flex:1,
},
input:{
  borderRadius:25,
  borderWidth:3,
  height:40,
  width:150,
  alignSelf:"center",
  textAlign:"center",
  borderColor:"black"
},
label:{
  alignSelf:"center",
  fontSize:30
}
   
  });
   
  