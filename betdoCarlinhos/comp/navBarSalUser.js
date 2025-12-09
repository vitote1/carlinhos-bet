import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Imagem = require('../assets/images/setaback.png');
const cavalo = require('../assets/images/iconeCavalo.png');
const NavBar = ({triggerAtt}) => {
  const router = useRouter();
  const [saldo, setSaldo] = useState(0);
  const pegarSaldo = async () => {
    try {
      const user = await AsyncStorage.getItem('usuarioLogado');
      if (user) {
        const usuario = JSON.parse(user); 
        setSaldo(usuario.saldo);
      }
    } catch (e) {
      console.error('Erro ao pegar saldo:', e);
    }
  };


  useEffect(() => {
    pegarSaldo();
  }, []);


  useEffect(() => {
    if (triggerAtt) pegarSaldo();
  }, [triggerAtt]);


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
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
        <Text style={styles.title}>Carlinhos Bet</Text>
      </View>
      <View style={styles.Saldo}>
        <Text style={{ fontSize: 15, color: '#05DB70', fontWeight: '500' }}>R$ {saldo.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.user} onPress={() => router.push('/telaUsuario')} activeOpacity={0.7}>
      </TouchableOpacity>
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
    marginRight: 10,
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
  Saldo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181630',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 20,
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
  }
});

export default NavBar;