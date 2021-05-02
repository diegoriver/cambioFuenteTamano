import * as React from 'react';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';

// se importan los estilo.styles desde estilos.js
import * as estilo from '../../../../../../../componentes/estilos';

import Salmos from '../../../textos/salmos.json';


export default function Salmodomingo() {
  return (
    <ScrollView style={estilo.styles.container}>
      <Text style={estilo.styles.nombre}>{Salmos.salmo90.nombre}</Text>
      <Text style={estilo.styles.titulo}>{Salmos.salmo90.titulo}</Text>

    </ScrollView>
  );
}
