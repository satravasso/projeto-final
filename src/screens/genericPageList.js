import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, FlatList, TouchableOpacity } from 'react-native';

export default function GenericList({ route }) {
  let [menu, setMenu] = React.useState([]);
  const data = route.params.menu;

  React.useEffect(() => {
    fetch(`/api/${data}`)
      .then((res) => res.json())
      .then((json) => setMenu(json.menu))
  }, []);
  
  return (
    <View style={styles.container}>
    <View>
    <FlatList
       data={menu}
       keyExtractor={item => item.id}
       renderItem={({ item }) => ( 
         <View  style={styles.item}>
        <TouchableOpacity onPress={() => console.log('')}>
         <View style={styles.image}>
            <Image source={{uri:item.image}} style={styles.img} />
          </View>
          </TouchableOpacity>
          <Text style={styles.title}>
         {item.name}
         </Text>
         <Text style={styles.text}>
         {item.price}
         </Text>
         <Text style={styles.text}>
         {item.glutem}
         </Text>
         <Text style={styles.text}>
         {item.calorias}
         </Text>
         <Text style={styles.text}>
         {item.description}
         </Text>
       </View>
     )} 
    />
 
 </View>
  
   <StatusBar style="auto" />
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  item: {
    // marginHorizontal: 20,
    padding: 30,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  image:{
    width: 140,
    height: 100
     
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    
  },
  text: {
    fontSize: 11
  }
});
