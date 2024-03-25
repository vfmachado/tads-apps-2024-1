import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Contador } from './src/components/Contador/Contador';

export default function App() {

  const [nome, setNome] = useState('');
  const [quantidadeItems, setQuantidadeItems] = useState(0);
  const [show, setShow] = useState(true);
  // setTimeout(() => {
  //   setCount(count + 1);
  // }, 1000);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>TADS APPs</Text>
      <TextInput style={styles.texto} placeholder="Digite seu nome"
        onChange={(e) => setNome(e.nativeEvent.text)}
      />
      <Text style={styles.texto}>{nome}</Text>

      <Button title="Mostrar/Esconder" onPress={() => setShow(!show)} />
      
      { show &&
      <Contador fnAlteraValor={setQuantidadeItems} valorInicial={quant} />
      }
      <Text>{quantidadeItems}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    borderWidth: 4,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    color: 'blue',
    fontSize: 20,
  }
});
