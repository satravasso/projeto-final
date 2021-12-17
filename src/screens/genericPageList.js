import React from 'react';
import { StyleSheet, Text, View,Image, FlatList, TouchableOpacity,ToastAndroid } from 'react-native';
import {ModalComponent} from '../components/modal/modal'

export default function GenericList({ route }) {
  const [menu, setMenu] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [itemsValue, setItemsValue] = React.useState();
  const [visibleToast, setvisibleToast] = React.useState(false);
  const [toastMessage, setToastMessage]= React.useState();

  const menuType = route.params.menu;

    React.useEffect(() => {
    fetch(`/api/${menuType}`)
      .then((res) => res.json())
      .then((json) => setMenu(json.menu))
  }, []);

 function countadorSoma(index){
   const menuItem = [...menu]
   menuItem[index].quantity += 1
    setMenu(menuItem);
    setToastMessage(`${menuItem[index].quantity} adicionados no carrinho!`)
    
 }

 function countadorDiminui(index){
  const menuItem = [...menu]
  menuItem[index].quantity -= 1
   setMenu(menuItem);
   setToastMessage()
   setToastMessage(`${menuItem[index].quantity} removidos no carrinho!`)

   
}

const handleButtonPress = () => {
  setvisibleToast(true);
};


const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

React.useEffect(() => setvisibleToast(false), [visibleToast]);
  
  return (
    <View style={styles.container}>
     <ModalComponent  modalVisible={modalVisible} item={itemsValue} setModalVisible={setModalVisible} />
     <Toast visible={visibleToast} message={toastMessage} />
     <FlatList
       data={menu}
       keyExtractor={item => item.id}
       renderItem={({ item, index }) => {
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
        <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {countadorSoma(index), handleButtonPress()}}>
        <Image source={require('../../assets/moreicon.png')}  style={{width:30, height:30}}/>
        </TouchableOpacity>
        <Text style={styles.counter}>{item.quantity}</Text>
        <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {countadorDiminui(index), handleButtonPress()}}>
        <Image source={require('../../assets/lessicon.png')} style={{width:30, height:30}} />
        </TouchableOpacity>
        </View>
       </View>
     
     )}} 
    />
   
 </View>
  );
}

const styles = StyleSheet.create({
   item: {
    padding: 30,
 
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
    left: '30%',
    marginTop: 13
    
  }
});
