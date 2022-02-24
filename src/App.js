import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, TextInput} from 'react-native';
import Botao from './components/Button';
import Aleatorio from './components/Aleatorio';
import Display from './components/Display';
import Style from './components/styles';

export default () => {
  const [inputMin, setMin] = useState(0);
  const [inputMax, setMax] = useState(0);
  const [input, setResult] = useState(0);
  const calculo = () => {
    setResult(
      Math.floor(
        Math.random() * (parseInt(inputMax) - parseInt(inputMin) + 1) +
          parseInt(inputMin),
      ),
    );
  };
  return (
    <SafeAreaView style={style.App}>
      <View style={Style.card}>
        <Aleatorio />
        <View style={style.display}>
          <TextInput
            keyboardType="numeric"
            placeholder="Digite um numero minimo"
            value={inputMin}
            onChangeText={inputMin => setMin(inputMin)}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Digite um numero maximo"
            value={inputMax}
            onChangeText={val => setMax(val)}
          />
        </View>
        <Display result={input} />
        <Botao resultado={() => calculo()} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5372F0',
  },
  display: {
    flexDirection: 'row',
  },
});

//const getRandomIntergerInclusive = (min, max) =>
///Math.floor(Math.random() * (max - min + 1)) + min;

//console.log(getRandomIntergerInclusive(3, 8));
