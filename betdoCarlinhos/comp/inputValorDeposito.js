import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default function InputValor({ value, onChangeText }) {
  return (
    <View>
      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        placeholder="Inserir Valor"
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    fontSize: 16,
  },
});