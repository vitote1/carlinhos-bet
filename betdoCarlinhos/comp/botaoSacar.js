import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BotaoSacar({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    backgroundColor: '#2E58B9',
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});