
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const MenuOption = () => {
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
  },
});

export default MenuOption;