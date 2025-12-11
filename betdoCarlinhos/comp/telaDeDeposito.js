
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Titulo from '../comp/titulo';
import InputValorDeposito from '../comp/inputValorDeposito';
import TipoSelecao from '../comp/tipoSelecao';
import Botao from '../comp/botaoSacar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listarUsers } from '../service/betService';

export default function TelaDeDeposito() {
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState(null);
  const depositarValor = async (valorDeposito, tipoDeposito) => {
    const valorNumerico = parseFloat(valorDeposito);

    // Validações
    if (!valorDeposito || valorNumerico <= 0) {
      alert("Por favor, insira um valor válido!");
      return;
    }

    if (!tipoDeposito) {
      alert("Por favor, selecione um tipo de depósito!");
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
      const saldoAtual = parseFloat(usuarioLogado.saldo) || 0;

      const novoSaldo = saldoAtual + valorNumerico;
      usuarioLogado.saldo = novoSaldo;

      await AsyncStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

      const userIndex = bdArray.findIndex(u => u.email === usuarioLogado.email);
      if (userIndex !== -1) {
        bdArray[userIndex].saldo = novoSaldo;
        await AsyncStorage.setItem("usuarios", JSON.stringify(bdArray));
      }

      alert(`Depósito de R$ ${valorNumerico.toFixed(2)} via ${tipoDeposito} realizado com sucesso!`);
      setValor('');
      setTipo(null);
    } else {
      alert("Erro ao processar depósito. Tente novamente!");
    }
  };

  return (

    <View style={styles.container}>
        <View>
            <Titulo text="Deposite seu dinheiro" />
            
            <View style={styles.collumn}>
              <TipoSelecao label="Pix" selected={tipo === 'pix'} onPress={() => setTipo('pix')} icon="💲" />
              <TipoSelecao label="Cartão" selected={tipo === 'cartao'} onPress={() => setTipo('cartao')} icon="💳" />
              <TipoSelecao label="Boleto" selected={tipo === 'boleto'} onPress={() => setTipo('boleto')} icon="📃" />
              
            </View>
            <View style={{ marginBottom: 20 }}>
                <InputValorDeposito value={valor} onChangeText={setValor} />
            </View>
          <Botao text="Depositar" onPress={() => depositarValor(valor, tipo)} />
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    flex: 1,
    backgroundColor: '#F1F1F1',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'center',
    alignSelf: 'center', 
  },
  collumn: {
    width: "223%",
    gap: 5,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 20,
    bottom: 30,
  },
});