// comp/userHeader.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circleImageContainer}>
        <Image
          source={require('../assets/images/cavalo.jpg')}
          style={styles.cavaloImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>Usuario</Text>
        <Text style={styles.email}>usuario@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20, //Duas horas para ser essa merda
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
});

export default UserHeader;