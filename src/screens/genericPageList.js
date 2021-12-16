import React from 'react';
import { StyleSheet, Text, View,Image, FlatList, TouchableOpacity, Modal, Alert, Pressable } from 'react-native';
import {ModalComponent} from '../components/modal/modal'

export default function GenericList({ route, navigation }) {
  const [menu, setMenu] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [itemsValue, setItemsValue] = React.useState();
  
  const menuType = route.params.menu;

    React.useEffect(() => {
    fetch(`/api/${menuType}`)
      .then((res) => res.json())
      .then((json) => setMenu(json.menu))
  }, []);

 function countador(num){

 }


  
  return (
    <View style={styles.container}>
     <ModalComponent  modalVisible={modalVisible} item={itemsValue} setModalVisible={setModalVisible} />
     <FlatList
       data={menu}
       keyExtractor={item => item.id}
       renderItem={({ item }) => {
         let num;
         return (         
        <View style={styles.containerFoodAndCounter}>
          <View  style={styles.item}>
          <TouchableOpacity onPress={() =>  { setItemsValue(item), setModalVisible(!modalVisible) }}>
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
        <View style={styles.containerCounter}>
        <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => countador(num)}>
        <Image source={require('../../assets/moreicon.png')}  style={{width:30, height:30}}/>
        </Pressable>
        <Text style={styles.counter}>{num}</Text>
        <Image source={require('../../assets/lessicon.png')} style={{width:30, height:30}} />
        </View>
       </View>
     
     )}} 
    />
   
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
     
  },
  item: {
    padding: 30,
    // flex: 2,
 
    width: 200 ,
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
  },
  containerFoodAndCounter:{
   
    flexDirection: 'row',
    borderBottomWidth: 1.2,
    borderBottomColor: 'black',
    justifyContent: 'space-between',
   
    paddingVertical: 5,
  },
  containerCounter:{
    display: 'flex',
    paddingTop: 80,
    paddingRight: 30,
  },
  counter:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: '15%',
    marginTop: 13
    
  }
});
