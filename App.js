import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);

  const n1 = parseFloat(first);
  const n2 = parseFloat(second);
  const soma = n1 + n2;
  const subtr = parseFloat(n1-n2);
  const div = (n1/n2).toFixed(2);
  const mult = n1*n2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>

      <TextInput 
        keyboardType='decimal-pad'
        style={styles.input}
        value={first}
        onChangeText={setFirst}
      />
      <TextInput
        keyboardType='decimal-pad'
        style={styles.input}
        value={second} 
        onChangeText={setSecond}
      />
      <Text style={styles.finalValue}>Final Value</Text>
      <Text style={styles.resultados}>{`Soma: ${soma}`}</Text>
      <Text style={styles.resultados}>{`Subtração: ${subtr}`}</Text>
      <Text style={styles.resultados}>{`Divisão: ${div}`}</Text>
      <Text style={styles.resultados}>{`Multiplicação: ${mult}`}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize: 36,
    fontWeight: '100',
  },

  input:{
    marginTop: 20,
    fontSize: 30,
    fontWeight: '100',
    textAlign: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 36,
    height: 50,
    backgroundColor: '#DDD',
  },
  finalValue:{
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    fontSize:24,
  },
  resultados:{
    fontWeight:'100',
    fontSize: 20,
  },
});
