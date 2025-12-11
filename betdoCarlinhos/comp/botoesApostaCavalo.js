import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const BotoesCavalosAposta = () => {
  const cavalos = [
    { id: 1, nome: 'Cavalo 1', preco: 'R$40,00', multiplicador: '2x' },
    { id: 2, nome: 'Cavalo 2', preco: 'R$40,00', multiplicador: '1,5x' },
    { id: 3, nome: 'Cavalo 3', preco: 'R$40,00', multiplicador: '2,4x' },
    { id: 4, nome: 'Cavalo 4', preco: 'R$40,00', multiplicador: '3x' },
    { id: 5, nome: 'Cavalo 5', preco: 'R$40,00', multiplicador: '0,6x' },
    { id: 6, nome: 'Cavalo 6', preco: 'R$40,00', multiplicador: '1,2x' },
  ];

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {cavalos.map((cavalo) => (
        <View key={cavalo.id} style={styles.card}>

          <View style={styles.cardHeader}>
            <Text style={styles.cavaloNome}>{cavalo.nome}</Text>
            <View style={styles.multiplicadorContainer}>
              <Text style={styles.multiplicadorText}>{cavalo.multiplicador}</Text>
            </View>
          </View>
          
          <View style={styles.precoContainer}>
            <Text style={styles.preco}>{cavalo.preco}</Text>
          </View>
          
          <View style={styles.cardFooter}>
            <View style={styles.selecionarButton}>
              <Text style={styles.selecionarText}>SELECIONAR</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1740',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#1A1F3E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2A2F4E',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cavaloNome: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  multiplicadorContainer: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    minWidth: 50,
    alignItems: 'center',
  },
  multiplicadorText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  precoContainer: {
    marginBottom: 16,
  },
  preco: {
    color: '#4CAF50',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardFooter: {
    alignItems: 'center',
  },
  selecionarButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  selecionarText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default BotoesCavalosAposta;