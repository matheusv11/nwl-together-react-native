import { StatusBar } from 'expo-status-bar';
import { useState }from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  
  const [contador, useContador] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.contador}> Contador: {contador}</Text>

      <TouchableOpacity style={styles.button} onPress={()=> useContador(contador + 1)}>
        <Text> Incrementar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=> useContador(contador - 1)}>
        <Text> Decrementar </Text>
      </TouchableOpacity>


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
  button: {
    backgroundColor: "#09bbe8",
    padding: 12,
    marginTop: 20,
  },
  contador: {
    fontSize: 30
  }
});
