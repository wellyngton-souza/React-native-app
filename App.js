import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () =>{
  const [valor1, setValor1] = useState();
  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState("");

  const adicionar = (e) =>{
    setResultado(resultado + "" + e);
  }

  const limpar = () =>{
    setResultado("");
  }

  const limparTudo = () =>{
    setValor1("");
    setResultado("");
  }

  const setarVal = () =>{
    setValor1(resultado);
    setResultado("");
  }

  const soma = () =>{
    setOperacao("soma");
    setarVal();
  }

  const subtrair = () =>{
    setOperacao("subtrair");
    setarVal();
  }

  const multiplicar = () =>{
    setOperacao("multiplicar");
    setarVal();
  }

  const dividir = () =>{
    setOperacao("dividir");
    setarVal();
  }

  const porcentagem = () =>{
    setOperacao("porcentagem");
    setarVal();
  }

  const igual = () =>{
    switch(operacao){
      case "soma":
        setResultado(Number(valor1) + Number(resultado));
        break;

      case "subtrair":
        setResultado(Number(valor1) - Number(resultado));
        break;

      case "multiplicar":
        setResultado(Number(valor1) * Number(resultado));
        break;

      case "dividir":
        setResultado(Number(valor1) / Number(resultado));
        break;

      case "porcentagem":
        setResultado((Number(valor1) * Number(resultado)) / 100);
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.calculadora}>
        <View style={styles.leitor}>
          <Text style={styles.textLeitor}>{resultado}</Text>
          <Text>{valor1}</Text>
        </View>
        <View style={styles.spaceButton}>
          <Text style={styles.button} onPress={limparTudo}>AC</Text>
          <Text style={styles.button} onPress={limpar}>C</Text>
          <Text style={styles.button} onPress={porcentagem}>%</Text>
          <Text style={styles.button} onPress={dividir}>/</Text>
        </View>
        <View style={styles.spaceButton}>
          <Text style={styles.button} onPress={()=>adicionar(7)}>7</Text>
          <Text style={styles.button} onPress={()=>adicionar(8)}>8</Text>
          <Text style={styles.button} onPress={()=>adicionar(9)}>9</Text>
          <Text style={styles.button} onPress={multiplicar}>x</Text>
        </View>
        <View style={styles.spaceButton}>
          <Text style={styles.button} onPress={()=>adicionar(4)}>4</Text>
          <Text style={styles.button} onPress={()=>adicionar(5)}>5</Text>
          <Text style={styles.button} onPress={()=>adicionar(6)}>6</Text>
          <Text style={styles.button} onPress={subtrair}>-</Text>
        </View>
        <View style={styles.spaceButton}>
          <Text style={styles.button} onPress={()=>adicionar(1)}>1</Text>
          <Text style={styles.button} onPress={()=>adicionar(2)}>2</Text>
          <Text style={styles.button} onPress={()=>adicionar(3)}>3</Text>
          <Text style={styles.button} onPress={()=>soma()}>+</Text>
        </View>
        <View style={styles.spaceButton}>
          <Text style={styles.button2} onPress={()=>adicionar(0)}>0</Text>
          <Text style={styles.button} onPress={()=>adicionar(".")}>.</Text>
          <Text style={styles.button} onPress={igual}>=</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  calculadora: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
    paddingBottom: 0
  },
  button: {
    width: 60,
    height: 60,
    textAlign: "center",
    fontSize: 20
  },
  leitor: {
    width: 240,
    padding: 20,
    display: "flex",
    justifyContent: "center"
  },
  textLeitor: {
    fontSize: 30,
    textAlign: "right"
  },
  spaceButton: {
    display: "flex",
    flexDirection: "row"
  },
  button2: {
    width: 120,
    height: 60,
    textAlign: "center",
    fontSize: 20
  }
});

export default App;