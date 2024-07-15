import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";


export function Contador({ fnAlteraValor, valorInicial }) {
    const [count, setCount] = useState(valorInicial);
    
    useEffect(() => {
        console.log("EXECUTANDO... " + count);
        fnAlteraValor(count);


    }, [count, fnAlteraValor]);

    return (
        <>
            <Text style={styles.texto}>{count}</Text>
            <Text style={styles.texto} onPress={() => setCount(count + 1)}>Incrementar</Text>
            <Text style={styles.texto} onPress={() => setCount(count - 1)}>Decrementar</Text>
            <Text style={styles.texto} onPress={() => setCount(0)}>Zerar</Text>
        </>
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