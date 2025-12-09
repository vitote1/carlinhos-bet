
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Cabecalho = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.leftSection}>
        <View style={styles.setaContainer}>
          <Image
            source={require('../assets/images/seta.png')}
            style={styles.setaIcon}
          />
        </View>
        <Text style={styles.logo}>Carlinhos Bet</Text>
        <Image
          source={require('../assets/images/iconeCavalo.png')} // Sua imagem do logo
          style={styles.logoImage}
        />
      </View>
      
      <View style={styles.rightSection}>
        <Text style={styles.saldo}>R$ 1.250,00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1a237e',
    backgroundColor: '#335FC8',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  setaContainer: {
    backgroundColor: '#6e6e6eff',
    borderRadius: 10,
    padding: 4,
    marginRight: 10,
  },
  setaIcon: {
    width: 20,
    height: 20,
  },
  logoImage: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 10,
    color: '#fff',
  },
  saldo: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    color: '#1e9800ff',
    borderColor: '#1e9800ff',
    borderWidth: 1,
    padding: 5,
    borderRadius: 4,
  },
});

export default Cabecalho;