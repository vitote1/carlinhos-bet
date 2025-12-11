
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Titulo from '../comp/titulo';
import InputValor from '../comp/inputValorDeposito';
import TipoSelecao from '../comp/tipoSelecao';
import Botao from '../comp/botaoSacar';

export default function TelaDeSaque() {
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState(null);

  return (
    <View style={styles.container}>
      <Titulo text="Saque seu Dinheiro" />
      <InputValor value={valor} onChangeText={setValor} />
      <View style={styles.row}>
        <TipoSelecao label="Pix" selected={tipo === 'pix'} onPress={() => setTipo('pix')} icon="💲" />
        <TipoSelecao label="Banco" selected={tipo === 'banco'} onPress={() => setTipo('banco')} icon="📋" />
      </View>
      <Botao text="Sacar" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    padding: 20,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});