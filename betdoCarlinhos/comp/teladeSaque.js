
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Titulo from '../comp/titulo';
import InputValor from '../comp/inputValorDeposito';
import TipoSelecao from '../comp/tipoSelecao';
import Botao from '../comp/botaoSacar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listarUsers } from '../service/betService';

export default function TelaDeSaque() {
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState(null);

  const sacarValor = async (valorSaque, tipoSaque) => {
    const valorNumerico = parseFloat(valorSaque);

    // Validações
    if (!valorSaque || valorNumerico <= 0) {
      alert("Por favor, insira um valor válido!");
      return;
    }

    if (!tipoSaque) {
      alert("Por favor, selecione um tipo de saque!");
      return;
    }

    const usuarioLogadoStr = await AsyncStorage.getItem("usuarioLogado");
    const bd = await listarUsers();
    let bdArray = [];
    if (bd) {
      bdArray = Array.isArray(bd) ? bd : [bd];
    }

    if (usuarioLogadoStr && bd) {
      const usuarioLogado = JSON.parse(usuarioLogadoStr);
      const saldoAtual = parseFloat(usuarioLogado.saldo);

      if (saldoAtual < valorNumerico) {
        alert("Saldo insuficiente para saque!");
        return;
      }

      const novoSaldo = saldoAtual - valorNumerico;
      usuarioLogado.saldo = novoSaldo;


      await AsyncStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));


      const userIndex = bdArray.findIndex(u => u.email === usuarioLogado.email);
      if (userIndex !== -1) {
        bdArray[userIndex].saldo = novoSaldo;
        await AsyncStorage.setItem("usuarios", JSON.stringify(bdArray));
      }

      alert(`Saque de R$ ${valorNumerico.toFixed(2)} via ${tipoSaque} realizado com sucesso!`);
      setValor('');
      setTipo(null);
    } else {
      alert("Erro ao processar saque. Tente novamente!");
    }
  };

  return (

    <View style={styles.container}>
      <Titulo text="Saque seu Dinheiro" />
      <InputValor value={valor} onChangeText={setValor} />
      <View style={styles.row}>
        <TipoSelecao label="Pix" selected={tipo === 'pix'} onPress={() => setTipo('pix')} icon="💲" />
        <TipoSelecao label="Banco" selected={tipo === 'banco'} onPress={() => setTipo('banco')} icon="📋" />
      </View>
      <View style={styles.botao}>
        <Botao text="Sacar" onPress={() => sacarValor(valor, tipo)} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flex: 1,
    backgroundColor: '#F1F1F1',
    padding: 40,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  botao: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});