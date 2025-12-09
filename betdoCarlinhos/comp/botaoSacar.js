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
    backgroundColor: '#001122',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});