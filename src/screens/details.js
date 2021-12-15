import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, FlatList, TouchableOpacity } from 'react-native';

export default function Details() {
  let [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json.categories))
  }, []);
  
  return (
    <View style={styles.container}>
       <View>
      <Text>é</Text>
    
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
    marginHorizontal: 20,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 80,
     height: 80
     
  },
  img: {
    width: '80%',
    height: '80%',
    padding: 30
  },
  title: {
    fontWeight: 'bold',
    
  },
  text: {
    fontSize: 11
  }
});
