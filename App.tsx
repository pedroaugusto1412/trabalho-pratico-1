import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { Livro } from './tipos';
import { ItemLivro } from './livroitem';
import { FormularioLivro } from './formulariolivro';

export default function App() {
  const [livros, setLivros] = useState<Livro[]>([]);

  const adicionarLivro = (titulo: string, autor: string, genero: string) => {
    const novoLivro: Livro = {
      id: Math.random().toString(36).substring(2, 9),
      titulo,
      autor,
      genero,
      lido: false,
    };
    
    setLivros((livrosAnteriores) => [novoLivro, ...livrosAnteriores]); 
  };

  const alternarStatusLivro = (id: string) => {
    setLivros((livrosAnteriores) =>
      livrosAnteriores.map((livro) =>
        livro.id === id ? { ...livro, lido: !livro.lido } : livro
      )
    );
  };

  const excluirLivro = (id: string) => {
    setLivros((livrosAnteriores) => livrosAnteriores.filter((livro) => livro.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.appTitle}> Minha Biblioteca</Text>
        <Text style={styles.appSubtitle}>Controle de leitura pessoal</Text>
      </View>

      <FormularioLivro aoAdicionarLivro={adicionarLivro} />

      <Text style={styles.listTitle}>Meus Livros ({livros.length})</Text>
      
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemLivro 
            livro={item} 
            aoAlternarStatus={alternarStatusLivro} 
            aoExcluir={excluirLivro} 
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum livro cadastrado ainda.</Text>}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8F4F8', padding: 15, paddingTop: 40 },
  header: { marginBottom: 20, alignItems: 'center' },
  appTitle: { fontSize: 26, fontWeight: 'bold', color: '#1A237E' },
  appSubtitle: { fontSize: 14, color: '#546E7A', marginTop: 5 },
  listTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  emptyText: { textAlign: 'center', color: '#888', marginTop: 20, fontStyle: 'italic' },
});