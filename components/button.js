import React, { Component } from 'react';

import { TouchableOpacity,AppRegistry, Dimensions,StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';
import LoginScreen from './Network/loginscreen';

const HEIGHT=Dimensions.get('screen').height
const WIDTH=Dimensions.get('screen').width

export default class CalcButton extends Component {
 
 constructor(props)
 {
   super(props);
 
   this.state = { GridViewItems: [
     {key: '1'},
     {key: '2'},
     {key: '3'},
     {key: '4'},
     {key: '5'},
     {key: '6'},
     {key: '7'},
     {key: '8'},
     {key: '9'},
     {key:'0'},
     {key: '+'},
     {key: '-'},
     {key: '/'},
     {key: '*'},
     {key: 'AC'},
     {key: 'del'},
     {key:'='}
     
   ],calculation:'',result:'',network:false}
 }
 
 GetGridViewItem= (item)=> {
   if (this.state.calculation=="959"){
   
   
   }
   if(item=="="){
    if (this.state.calculation=="959"){
      this.setState({network:true})
    
    }
    this.setState({result:eval(this.state.calculation)})
   }
   else if(item=="del"){
    this.setState({calculation:this.state.calculation.slice(0,this.state.calculation["length"]-1)})
   }
   else if (item=="AC"){
    this.setState({calculation:''})
   }
   else{
     if(this.state.calculation.slice(-2,)=='//'||this.state.calculation.slice(-1)=='++'||this.state.calculation.slice(-1)=='--'||this.state.calculation.slice(-1)=='**'){
      this.setState({calculation:this.state.calculation.slice(0,this.state.calculation["length"]-2)})
     }
     else{
  this.setState({calculation:this.state.calculation+item})
   }}
 }
 

 render() {
  if(this.state.network){
    return (<LoginScreen/>)
  }
   return (
 
<View style={styles.MainContainer}>

<Text style={styles.rtext}>{this.state.result}</Text>
   <Text style={styles.ctext}>{this.state.calculation}</Text>
      <FlatList
      
         data={ this.state.GridViewItems }
 
         renderItem={({item,index}) =>
         
         <TouchableOpacity style={styles.GridViewBlockStyle} onPress={this.GetGridViewItem.bind(this, item.key)}>
 
            <Text style={styles.GridViewInsideTextItemStyle}  > {item.key} </Text>
            
            </TouchableOpacity>}
 
         numColumns={4}
 
        />
   
   
</View>
           
   );
 }
}
let colors = ['#123456', '#654321', '#fdecba', '#abcdef']
const styles = StyleSheet.create({
 
MainContainer :{
    width: '100%',
   
    
    justifyContent: 'center',
   
    position: 'absolute', //Here is the trick
    bottom: 0,
},
 
GridViewBlockStyle: {
backgroundColor:'#282828',

  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 100,
  margin: 2,
  borderRadius:25,

 
}
,
 
GridViewInsideTextItemStyle: {

   color: '#fff',
   padding: 10,
   fontSize: 18,
   justifyContent: 'center',
   
 },
 ctext:{
  textAlign:'right',
   fontSize:40,
   color:"white",
  
  
 },
 rtext:{
  textAlign:'right',
   fontSize:24,
   color:"white",
  
  
 }
 
});
 
