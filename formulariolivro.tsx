import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

interface PropriedadesFormularioLivro {
  aoAdicionarLivro: (titulo: string, autor: string, genero: string) => void;
}

export const FormularioLivro: React.FC<PropriedadesFormularioLivro> = ({ aoAdicionarLivro }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const enviarFormulario = () => {
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    aoAdicionarLivro(titulo, autor, genero);
    
    setTitulo('');
    setAutor('');
    setGenero('');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Adicionar Novo Livro</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Título do Livro "
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Autor "
        value={autor}
        onChangeText={setAutor}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero (ex: Fantasia, Ficção) "
        value={genero}
        onChangeText={setGenero}
      />

      <TouchableOpacity style={styles.addButton} onPress={enviarFormulario}>
        <Text style={styles.addButtonText}>Cadastrar Livro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 8, marginBottom: 20 },
  formTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  input: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#CCC', borderRadius: 5, padding: 10, marginBottom: 10, fontSize: 16 },
  addButton: { backgroundColor: '#4CAF50', padding: 12, borderRadius: 5, alignItems: 'center' },
  addButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});