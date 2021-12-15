import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, FlatList, TouchableOpacity } from 'react-native';

export default function Home({  navigation }) {
  let [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json.categories))
  }, []);
  
  return (
    <View style={styles.container}>
       <View>
       <FlatList
          numColumns={2}
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({ item }) => ( 
           <TouchableOpacity onPress={() => navigation.navigate('GenericList', {menu: item.apiLabel})} style={styles.item}>
            <View style={styles.image}>
              <Image source={{uri:item.icon}} style={styles.img} />
            </View>
            <Text style={styles.title}>
            {item.name}
            </Text>
            <Text  style={styles.text}>
            {item.short}
            </Text>
          </TouchableOpacity>
        )} 
       />
    
    </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginVertical: 10,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
  },
  image:{
    width: 59,
    height: 61.8,

     
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: 'bold',
    
  },
  text: {
    fontSize: 11
  }
});
