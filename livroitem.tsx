import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Livro } from './tipos';

interface PropriedadesItemLivro {
  livro: Livro;
  aoAlternarStatus: (id: string) => void;
  aoExcluir: (id: string) => void;
}

export const ItemLivro: React.FC<PropriedadesItemLivro> = ({ livro, aoAlternarStatus, aoExcluir }) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{livro.titulo}</Text>
        <Text style={styles.details}>Autor: {livro.autor}</Text>
        <Text style={styles.details}>Gênero: {livro.genero}</Text>
        <Text style={[styles.status, livro.lido ? styles.statusRead : styles.statusUnread]}>
          {livro.lido ? '✓ Lido' : '⏳ Não Lido'}
        </Text>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={[styles.button, livro.lido ? styles.buttonSecondary : styles.buttonPrimary]} 
          onPress={() => aoAlternarStatus(livro.id)}
        >
          <Text style={styles.buttonText}>{livro.lido ? 'Marcar Pendente' : 'Marcar Lido'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonDelete} onPress={() => aoExcluir(livro.id)}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoContainer: { marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  details: { fontSize: 14, color: '#666', marginTop: 2 },
  status: { marginTop: 8, fontWeight: 'bold', fontSize: 14 },
  statusRead: { color: '#2e7d32' },
  statusUnread: { color: '#f57c00' },
  actionContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  button: { padding: 10, borderRadius: 5, flex: 1, marginRight: 5, alignItems: 'center' },
  buttonPrimary: { backgroundColor: '#1976d2' },
  buttonSecondary: { backgroundColor: '#757575' },
  buttonDelete: { backgroundColor: '#d32f2f', padding: 10, borderRadius: 5, flex: 1, marginLeft: 5, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
});