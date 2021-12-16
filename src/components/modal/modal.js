import React from 'react';
import { StyleSheet, Text, View,Image, Pressable, Modal } from 'react-native';


export const ModalComponent = (props) => {

return (
  <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
       
          props.setModalVisible(!props.modalVisible);
        }}
      >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.image}>
              <Image source={{uri:props.item?.image}} style={styles.img} />
            </View>
         
          <Text style={styles.title}>
          {props.item?.name}
          </Text>
          
          <Text style={styles.text}>
          {props.item?.glutem}
          </Text>
          <Text style={styles.text}>
          {props.item?.calorias}
          </Text>
          <Text style={styles.text}>
          {props.item?.description}
          </Text>
          <Text style={styles.price}>
          R$ {props.item?.price}
          </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setModalVisible(!props.modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
)

}


const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
  image:{
    width: 280,
    height: 200
     
  },
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
   
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 280,
  },

  buttonClose: {
    backgroundColor: "#FFD384",
    
  },
  textStyle: {
    marginBottom: 2,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    
  },
  text: {
    marginBottom: 7,
  },
});