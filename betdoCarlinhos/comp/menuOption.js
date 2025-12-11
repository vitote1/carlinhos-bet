import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MenuOption = () => {
  const router = useRouter();

  function sair() {
    AsyncStorage.removeItem('usuarioLogado');
    router.replace('/telaLogin');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
      onPress={() => router.push('/telaSaque')}>
        <Text style={styles.buttonText}>Sacar Saldo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/telaDeposito')}
      >
        <Text style={styles.buttonText}>Depositar Saldo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Informações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ajuda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={sair}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    textAlign: 'center',
  },
});

export default MenuOption;
