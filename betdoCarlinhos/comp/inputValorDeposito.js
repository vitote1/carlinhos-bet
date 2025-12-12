import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default function InputValor({ value: valorInicial = '', onChangeText }) {
  const [valorSaque, setValorSaque] = useState(valorInicial);

  useEffect(() => {
    setValorSaque(valorInicial);
  }, [valorInicial]);

  const handleChange = (text) => {
    const apenasNumeros = text.replace(/[^0-9.]/g, '');
    setValorSaque(apenasNumeros);
    if (typeof onChangeText === 'function') onChangeText(apenasNumeros);
  };

  return (
    <View>
      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        placeholder="Inserir Valor"
        value={valorSaque}
        onChangeText={handleChange}
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