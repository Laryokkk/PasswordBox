import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, TextInput, Item } from "react-native";
import { Picker } from '@react-native-picker/picker';

const AddAccountModal = ({ isModalVisible, setModalVisible }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setModalVisible(!isModalVisible)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.inputWrapper}>
            <Picker
              mode="dropdown"
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Item label="Java" value="java" />
              <Item label="JavaScript" value="js" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="email"
              onChangeText={text => setEmail(text)}
              defaultValue={email}
            />
            <TextInput
              style={styles.input}
              placeholder="password"
              onChangeText={text => setPassword(text)}
              defaultValue={password}
            />
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!isModalVisible)}>
            <Text style={styles.textStyle}>Create</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10, 10, 10, 0.8)'
  },
  modalView: {
    height: 300,
    width: 300,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    margin: 20,
    borderRadius: 20,
    padding: 35,

    backgroundColor: '#323232',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  picker: {
    // backgroundColor: '#171717',
    width: '100%'
  },
  input: {
    backgroundColor: '#171717',
    width: '100%',
    fontSize: 16,
    padding: 8,
    paddingStart: 12,
    borderRadius: 15,
    color: '#fff',
  },
  button: {
    width: '100%',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#25D8D8',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AddAccountModal;
