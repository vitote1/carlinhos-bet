import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

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
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollViewInner}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.gridContainer}>
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
            <Pressable 
              style={({ pressed }) => [
                styles.selecionarButton,
                pressed && styles.selecionarButtonPressed
              ]}
              onPress={() => console.log('Cavalo', cavalo.id, 'selecionado')}
            >
              <Text style={styles.selecionarText}>SELECIONAR</Text>
            </Pressable>
          </View>
        </View>
        ))}
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1740',
  },
  scrollContent: {
    padding: 12,
    paddingBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  card: {
    backgroundColor: '#1A1F3E',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#2A2F4E',
    width: '31%',
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
    marginBottom: 6,
  },
  cavaloNome: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  multiplicadorContainer: {
    backgroundColor: '#6C63FF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    minWidth: 35,
    alignItems: 'center',
  },
  multiplicadorText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  precoContainer: {
    marginBottom: 6,
    marginTop: 8,
  },
  preco: {
    color: '#4CAF50',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardFooter: {
    alignItems: 'center',
  },
  selecionarButton: {
    backgroundColor: '#6C63FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
  },
  selecionarButtonPressed: {
    backgroundColor: '#5A54D4',
    opacity: 0.9,
  },
  selecionarText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 0.1,
  },
});

export default BotoesCavalosAposta;