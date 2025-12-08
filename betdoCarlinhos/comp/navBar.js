import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Imagem = require('../assets/images/setaback.png');
const cavalo = require('../assets/images/iconeCavalo.png');
const NavBar = () => {
  const router = useRouter();

  return (
    <View style={styles.divNavBar}>
      <TouchableOpacity 
        style={styles.botaoVoltar} 
        onPress={() => router.back()}
        activeOpacity={0.7}
      >
       <Image
          source={Imagem} 
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.divTitle}>
        <Image
          source={cavalo} 
          style={{ width: 40, height: 40}}
          resizeMode="contain"
        />
        <Text style={styles.title}>Carlinhos Bet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divNavBar: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#335FC8',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  botaoVoltar: {
    marginLeft: 8,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 48, 
    flexDirection: 'row',
    gap: 7,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavBar;