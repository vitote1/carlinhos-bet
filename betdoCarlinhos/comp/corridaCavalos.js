import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listarUsers } from '../service/betService';

const CorridaCavalos = ({ setTriggerAtt }) => {
  
  const baseCavalos = [
    { id: 1, nome: 'Cavalo 1', posicao: 0 },
    { id: 2, nome: 'Cavalo 2', posicao: 0 },
    { id: 3, nome: 'Cavalo 3', posicao: 0 },
    { id: 4, nome: 'Cavalo 4', posicao: 0 },
    { id: 5, nome: 'Cavalo 5', posicao: 0 },
    { id: 6, nome: 'Cavalo 6', posicao: 0 },
  ];
  const imagemCavalo = require('../assets/images/cavaloMontado.png');
  const gerarOddAleatoria = () => {
    const min = 1.2;
    const max = 6.0;
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  };

  const [cavalos, setCavalos] = useState(
    baseCavalos.map((c) => ({ ...c, odds: gerarOddAleatoria() }))
  );

  const [posicoes, setPosicoes] = useState(cavalos.map((c) => c.posicao));
  const [correndo, setCorrendo] = useState(false);
  const [apostaSelecionada, setApostaSelecionada] = useState(null);
  const [valorAposta, setValorAposta] = useState('');
  const [saldo, setSaldo] = useState(0);
  const [resultadoCorrida, setResultadoCorrida] = useState(null);

  const LARGURA_PISTA = 300;
  const VELOCIDADE_ANIMACAO = 50;

  useEffect(() => {
    const buscarSaldo = async () => {
      const usuarioLogadoStr = await AsyncStorage.getItem('usuarioLogado');
      if (usuarioLogadoStr) {
        const usuario = JSON.parse(usuarioLogadoStr);
        setSaldo(parseFloat(usuario.saldo) || 0);
      }
    };
    buscarSaldo();
  }, []);

  const iniciarCorrida = async () => {
    if (!apostaSelecionada) {
      alert('Selecione um cavalo para apostar!');
      return;
    }

    if (!valorAposta || parseFloat(valorAposta) <= 0) {
      alert('Insira um valor de aposta válido!');
      return;
    }

    const valor = parseFloat(valorAposta);
    if (valor > saldo) {
      alert('Saldo insuficiente!');
      return;
    }

    setCorrendo(true);
    setResultadoCorrida(null);
    setPosicoes(cavalos.map(() => 0));

    let intervalo;
    const rodarCorrida = () => {
      intervalo = setInterval(() => {
        setPosicoes(pos => {
          const novasPosicoes = pos.map((p) => {
            const velocidade = Math.random() * 5;
            return p + velocidade;
          });

          const cavaloVencedor = novasPosicoes.findIndex(p => p >= LARGURA_PISTA);
          if (cavaloVencedor !== -1) {
            clearInterval(intervalo);
            finalizarCorrida(cavaloVencedor, valor);
          }

          return novasPosicoes;
        });
      }, VELOCIDADE_ANIMACAO);
    };

    rodarCorrida();
  };

  const finalizarCorrida = async (cavaloVencedorIdx, valorAposta) => {
    setCorrendo(false);

    setPosicoes(pos => {
      const final = [...pos];
      if (cavaloVencedorIdx >= 0) {
        final[cavaloVencedorIdx] = LARGURA_PISTA;
      }
      return final;
    });

    let mensagem = '';
    let ganho = 0;

    if (cavaloVencedorIdx === apostaSelecionada - 1) {
      ganho = valorAposta * cavalos[cavaloVencedorIdx].odds;
      const novoSaldo = saldo - valorAposta + ganho;
      setSaldo(novoSaldo);
      
      mensagem = `${cavalos[cavaloVencedorIdx].nome} venceu!\nVocê ganhou R$ ${ganho.toFixed(2)}!`;
      
      await atualizarSaldo(novoSaldo, true, ganho, valorAposta);
    } else if (cavaloVencedorIdx >= 0) {
      const novoSaldo = saldo - valorAposta;
      setSaldo(novoSaldo);
      if (setTriggerAtt) setTriggerAtt(prev => !prev);
      
      mensagem = `${cavalos[cavaloVencedorIdx].nome} venceu.\nVocê perdeu R$ ${valorAposta.toFixed(2)}.`;
      
      await atualizarSaldo(novoSaldo, false, 0, valorAposta);
    }

    setResultadoCorrida(mensagem);
    setValorAposta('');
    setApostaSelecionada(null);
    setCavalos(baseCavalos.map(c => ({ ...c, odds: gerarOddAleatoria() })));
  };

  const atualizarSaldo = async (novoSaldo) => {
    try {
      const usuarioLogadoStr = await AsyncStorage.getItem('usuarioLogado');
      const bd = await listarUsers();
      
      if (usuarioLogadoStr && bd) {
        const usuario = JSON.parse(usuarioLogadoStr);
        usuario.saldo = novoSaldo;
        
        const bdArray = Array.isArray(bd) ? bd : [bd];
        const idx = bdArray.findIndex(u => u.email === usuario.email);
        
        if (idx !== -1) {
          bdArray[idx].saldo = novoSaldo;
          await AsyncStorage.setItem('usuarioLogado', JSON.stringify(usuario));
          await AsyncStorage.setItem('usuarios', JSON.stringify(bdArray));
          if (setTriggerAtt) setTriggerAtt(prev => !prev);
        }
      }
    } catch (error) {
      console.error('Erro ao atualizar saldo:', error);
    }
  };

  return (
    <ScrollView style={styles.conteudoContainer} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/sbr.png")} style={{ height:60, width:290}}/>
      </View>

      <View style={styles.pistasContainer}>
        {cavalos.map((cavalo, idx) => (
          <View key={cavalo.id} style={styles.pista}>
            <View style={styles.numeroCavaloContainer}>
              <Text style={styles.numeroCavalo}>{cavalo.id}</Text>
            </View>

            <View style={[styles.linhaCorrida]}>
              <View
                style={[
                  styles.cavalo,
                  {
                    left: (posicoes[idx] / LARGURA_PISTA) * 100 + '%',
                  },
                ]}
              >
                <View style={styles.emojiCavalo}>
                  <Image source={imagemCavalo} style={styles.imagemCavalo}></Image>
                </View>
              </View>
            </View>

            <View style={styles.linhaChegada} />
          </View>
        ))}
      </View>

      {resultadoCorrida && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoText}>{resultadoCorrida}</Text>
        </View>
      )}

      <View style={styles.apostasContainer}>
        <Text style={styles.titulo}>Escolha um Cavalo para Apostar:</Text>

        <View style={styles.botoesApostas}>
          {cavalos.map((cavalo) => (
            <TouchableOpacity
              key={cavalo.id}
              style={[
                styles.botaoAposta,
                apostaSelecionada === cavalo.id && styles.botaoApostaSelecionado,
              ]}
              onPress={() => setApostaSelecionada(cavalo.id)}
              disabled={correndo}
            >
              <Text style={styles.nomeApostaCavalo}>{cavalo.nome}</Text>
              <Text style={styles.oddsTaxa}>{cavalo.odds.toFixed(2)}x</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelInput}>Valor da Aposta (R$):</Text>
        <TextInput
          style={styles.input}
          placeholder="0.00"
          keyboardType="decimal-pad"
          value={valorAposta}
          onChangeText={setValorAposta}
          editable={!correndo}
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity
        style={[styles.botaoIniciar, correndo && styles.botaoDesabilitado]}
        onPress={iniciarCorrida}
        disabled={correndo}
      >
        <Text style={styles.textoBotaoIniciar}>
          {correndo ? 'Correndo...' : 'Iniciar Corrida'}
        </Text>
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignSelf:'center',
    flex: 1,
    height:900,
    width:412,
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 15,
    
  },
  logoContainer: {
    backgroundColor: '#0f3460',
    borderRadius: 10,
    height:85,
    width:400,
    justifyContent: 'center',
    alignContent:'center',
    marginBottom: 20,
    alignItems: 'center',
    alignSelf:'center'
  },
  tituloText: {
    color: '#59cc59ff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  pistasContainer: {
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#FF9F1C',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  pista: {
    height: 80,
    backgroundColor: '#00CC00',
    borderBottomWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    position: 'relative',
  },
  numeroCavaloContainer: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -15 }],
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  numeroCavalo: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linhaCorrida: {
    flex: 1,
    position: 'relative',
  },
  cavalo: {
    width: 40,
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
  },
  emojiCavalo: {
    width:140,
    height: 120,
  },
  imagemCavalo: {
    width: '100%',
    height: '100%',
  },
  linhaChegada: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 3,
    height: '100%',
    backgroundColor: '#000',
    zIndex: 10,
  },
  resultadoContainer: {
    backgroundColor: '#0f3460',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  resultadoText: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  apostasContainer: {
    marginBottom: 20,
  },
  titulo: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  botoesApostas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  botaoAposta: {
    width: '48%',
    backgroundColor: '#0f3460',
    borderWidth: 2,
    borderColor: '#444',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoApostaSelecionado: {
    borderColor: '#FFD700',
    backgroundColor: '#1a4d7d',
  },
  nomeApostaCavalo: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  odds: {
    color: '#FFD700',
    fontSize: 13,
    marginTop: 5,
  },
  oddsTaxa: {
    color: '#00ff15ff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },
  inputContainer: {
    marginBottom: 20,
  },
  labelInput: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#0f3460',
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: '#FFF',
    fontSize: 16,
  },
  botaoIniciar: {
    backgroundColor: '#E63946',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoDesabilitado: {
    backgroundColor: '#666',
    opacity: 0.6,
  },
  textoBotaoIniciar: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    
    alignItems: 'center',
    height: '130%',
  },
   conteudoContainer: {
    position:'absolute',
    alignSelf:'center',
    height:'400%'
  },
});

export default CorridaCavalos;
