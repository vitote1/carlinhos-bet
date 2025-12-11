import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const MenuOption = () => {
  const router = useRouter();

  function sair() {
    // aqui você coloca a lógica de logout
    router.replace('/telaLogin');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sacar Saldo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/telaLogin')}
      >
        <Text style={styles.buttonText}>Depositar Saldo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Informações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ajuda</Text>
      </TouchableOpacity>

      {/* Botão de sair */}
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
