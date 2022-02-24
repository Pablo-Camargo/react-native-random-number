import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Style from './styles';
export default props => (
  <TouchableOpacity style={Style.buton} onPress={props.resultado}>
    <Text style={Style.txtButton}>Gerar Numero</Text>
  </TouchableOpacity>
);
