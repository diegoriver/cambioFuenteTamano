import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

// se importan los estilo.styles desde estilos.js
import * as estilo from '../../../../../../../componentes/estilos';

import Salmos from '../../../textos/salmos.json';


export default function Salmomartes() {
  return (
    <ScrollView style={estilo.styles.container}>
      <Text style={estilo.styles.nombre}>{Salmos.salmo142.nombre}</Text>


      <Text style={estilo.styles.cuerpo}>{Salmos.salmo142.cuerpo}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>Ant. </Text>{Salmos.salmo142.antifona}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>TP. </Text>{Salmos.salmo142.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}
