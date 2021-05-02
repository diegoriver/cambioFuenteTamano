import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

// se importan los estilo.styles desde estilo.js
import * as estilo from '../../../../../../../componentes/estilos';

import Salmos from '../../../textos/salmos.json';


export default function Salmomiercoles() {
  return (
    <ScrollView style={estilo.styles.container}>
      <Text style={estilo.styles.nombre}>{Salmos.salmo4.nombre}</Text>
      <Text style={estilo.styles.titulo}>{Salmos.salmo4.titulo}</Text>
    
      <Text style={estilo.styles.titulo}>{Salmos.salmo133.titulo}</Text>
      <Text style={estilo.styles.cuerpo}>{Salmos.salmo133.cuerpo}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>Ant. </Text>{Salmos.salmo133.antifona}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>TP. </Text>{Salmos.salmo133.TP}</Text>
      <Text> </Text>
      <Text> </Text>
    </ScrollView>
  );
}

