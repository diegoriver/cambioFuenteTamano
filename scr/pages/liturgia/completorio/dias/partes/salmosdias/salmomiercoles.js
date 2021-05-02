import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

// se importan los estilo.styles desde estilo.js
import * as estilo from '../../../../../../../componentes/estilos';

import Salmos from '../../../textos/salmos.json';


export default function Salmomiercoles() {
  return (
    <ScrollView style={estilo.styles.container}>
      <Text style={estilo.styles.nombre}>{Salmos.salmo30.nombre}</Text>
      <Text style={estilo.styles.titulo}>{Salmos.salmo30.titulo}</Text>
  
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>Ant. </Text>{Salmos.salmo129.antifona}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>TP. </Text>{Salmos.salmo129.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}
