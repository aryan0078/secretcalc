import React, { PureComponent } from 'react';
import { FlatList,Dimensions,AppState, View, Text,StyleSheet, Alert } from 'react-native';
import { TouchableHighlight,TextInput, TouchableOpacity } from 'react-native-gesture-handler';



const WIDTH=Dimensions.get('screen').width
import {db,Home,Firebase} from '../../App'
import { isFrontCameraAvailable } from 'expo/build/AR';
export default class ChatScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    
      cuser:'',
      msg:'',
       appState:AppState.currentState,
      network:true,
     items:[],
  
     
    };
  }
 componentDidMount() {
  this.setState({cuser:this.props.username})
 db.ref('/messages/').on('value',snapshot=>{
  var data=snapshot.val()
  //var user = Firebase.auth().currentUser;
    //var uid = user.uid; 
   var l=Object.values(data)
  this.setState({items:l})
 

 })
 console.log(this.state.data)
  }

  componentWillUnmount() {
    
   
   
  }

 
  send=()=>{
    var currentdate = new Date();
    var ctime=currentdate.getHours()+":"+currentdate.getMinutes()
    db.ref('messages').push({
      'username':this.state.cuser,
      'msg':this.state.msg,
      'time':ctime
});
    //push('username'=this.props.username,'msg'=this.state.msg)
    this.setState({msg:''})
    console.log(this.state.items)
  }
  render() {  
    return(
      <View style={styles.container}>
<View style={styles.chats}>
  <FlatList
  
  data={this.state.items}
  renderItem={({item, index, separators}) => (
    <TouchableHighlight
      key={item['username']}
      
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={styles.chatsbox}>
 
        <Text style={styles.username}>{item['username']+' '}</Text>
      
        <Text style={styles.msg}>{item['msg']}</Text>
  <Text style={styles.time}>{item['time']}</Text>
      </View>
    </TouchableHighlight>
  )}
/>
</View>
      <View style={styles.bottom}>
      <TextInput style={styles.input} placeholder="Enter Message Here" placeholderTextColor="white" onChangeText={(msg) => this.setState({msg})} value={this.state.msg}></TextInput>
             
 
      <TouchableOpacity style={styles.button} onPress={this.send}>
       
<Text style={styles.sendtext}>Send</Text>
      </TouchableOpacity>
     
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 time:{
   fontSize:15,
   position:'absolute',
   right:5,
   bottom:10
 },
  username:{
   
    fontWeight: 'bold',
    fontSize:20,


 top: 2,
 left:10,

 position: 'absolute' 
  },
  msg:{
    position: 'absolute',
    bottom: 20, 
    marginLeft: 10,
    alignSelf: 'flex-start',
    fontSize: 20
  },

  chatsbox:{
    height: 80,
margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
 
   
    
  },
  chats:{
    
    flex:0.8,
  },
  sendtext:{
    alignSelf:  'center' ,
    fontSize: 13,
    color: 'white'
  },
  button:{
    height: 60,
    width: 60,
    marginLeft: 6,
    borderRadius: 34,
alignSelf:  'flex-end',

backgroundColor:'green',
   textAlign:'center',
   alignContent:'center',
   justifyContent:'center'
  },
  input:{
  textAlign:  'center' ,

    width: WIDTH-80,
  height: 60,
    borderRadius: 25,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#282828'
  },
bottom:{
  flexDirection: 'row', 
  
  height: 60,
  
  width: WIDTH,
  position: 'absolute',
  bottom: 0
},
container:{
  backgroundColor:'black',
  alignContent:"center",
  justifyContent:"center",
  flex:1,
  textAlign:'center'
},

   
  });
   