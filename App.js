import React,{Component} from 'react';
import CalcButton from './components/button'
import AppNavigator from './components/Network/main'
import {  TouchableOpacity,Dimensions,TextInput,Button,StyleSheet,View,FlatList,Text} from 'react-native';
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

