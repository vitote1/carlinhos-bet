
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const MenuOption = () => {
const sair = () => {
    Alert.alert(
      "Confirmar saída",
      "Deseja realmente sair?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sair",
          style: "destructive",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('usuarioLogado'); 
              router.push('/teaLogin');
            } catch (e) {
              console.error('Erro ao sair:', e);
            }
          }
        }
      ]
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Sacar Saldo</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Depositar Saldo</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Informações</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Ajuda</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  // Se alguém colocar flex nessa bosta eu mato, e eu não estou brincando
  padding: 10,
  backgroundColor: '#060B15',
  marginHorizontal: 10,
  borderRadius: 10,
},
  button: {
    backgroundColor: '#081A62',
    padding: 12,
    borderRadius: 6,
    marginVertical: 4,
    
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
});

export default MenuOption;