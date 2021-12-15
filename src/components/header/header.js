import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';


export default function Header(){

return (
  <View style={styles.header}>
      <Text style={styles.text}>the bee.  ミツバチ</Text>
      <Image source={require('../../../assets/menu.png')} style={styles.image}/>
  </View>
)

}


const styles = StyleSheet.create({
  header: {
   display: 'flex',
   width: '100%',
   height: 85,
   flexDirection: 'row',
   backgroundColor: '#ffdfaf',
   paddingTop: 38,
  
  
  },
  text:{
    fontWeight: 'bold',
    fontSize: 17,
    color: '#333',
    paddingLeft: 20,
  },
  image: {
    // width: 20,
    //  height: 50%'',
  }
});