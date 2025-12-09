
import { Button } from '@react-navigation/elements';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const MenuOption = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button style={styles.buttonButton}>Sacar Saldo</Button>
      </View>
      <View style={styles.button}>
        <Button style={styles.buttonButton} onPress={() => router.navigate('telaLogin')}>Depositar Saldo</Button>
      </View>
      <View style={styles.button}>
        <Button style={styles.buttonButton}>Informações</Button>
      </View>
      <View style={styles.button}>
        <Button style={styles.buttonButton}>Ajuda</Button>
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