import React,{Component} from 'react';
import CalcButton from './components/button'
import AppNavigator from './components/Network/main'
import {  TouchableOpacity,Dimensions,TextInput,Button,StyleSheet,View,FlatList,Text} from 'react-native';
import * as firebase from 'firebase'
const firebaseConfig={
  apiKey: "AIzaSyCAxuU_AVIJsEQIKwNVGuqM8RbJRVm_Hr4",
  authDomain: "secret-calculator-4a636.firebaseapp.com",
  databaseURL: "https://secret-calculator-4a636.firebaseio.com",
  projectId: "secret-calculator-4a636",
  storageBucket: "secret-calculator-4a636.appspot.com",
  messagingSenderId: "1060275214273",
  appId: "1:1060275214273:web:b0a8df66fdfd3f38960140",
  measurementId: "G-W0QVXGRKZB"
}


export const Firebase = firebase.initializeApp(firebaseConfig);
Firebase.auth().signInAnonymously()

export default class Home extends Component {
 
  constructor(props: Props) {
    super(props);

    this.state = {result:'',operation:''};
  }
  buttonpress=()=>{
    this.setState({operation:'hi'})
  }
  
  render() {
      
    return (
<View style={styles.container}>
<CalcButton/>
</View>
    );
  }
}
const styles = StyleSheet.create({

  container:{
  backgroundColor:"black",
    flex: 1,
 
 
   

  },

 
  
});

