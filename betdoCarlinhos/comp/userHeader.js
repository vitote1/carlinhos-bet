
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserHeader = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('')

  const router = useRouter();

  async function carregarInfo() {
  try {
    const userLogadoStr = await AsyncStorage.getItem('usuarioLogado');

    if (!userLogadoStr) return;

    const usuario = JSON.parse(userLogadoStr);

    setNome(usuario.nome);
    setEmail(usuario.email);

  } catch (e) {
    console.error("Erro ao carregar usuarioLogado:", e);
  }
}

useEffect(() => {
  carregarInfo();
}, []);
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.circleImageContainer}>
          <Image
            source={require('../assets/images/cavalo.jpg')}
            style={styles.cavaloImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{nome}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={()=> router.push('/telaEditarUsuario')}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20, 
    marginHorizontal: 16,
    marginBottom: 30,
    marginTop: 20,
    backgroundColor: '#6e6e6eff',
    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, 
  },
  circleImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#848484',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#000000ff',
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  cavaloImage: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },    
  email: {
    fontSize: 14,
    color: '#aaa',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#6d6c6c',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  }
});

export default UserHeader;