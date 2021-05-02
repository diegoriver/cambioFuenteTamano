import React from 'react';
import { View, StyleSheet } from 'react-native';
import Drawer from './completorio/drawer';

import * as estilo from "../../../componentes/estilos";


export default function Completorio() {
  return (
   <View style={estilo.styles.containerCompl}>
       <Drawer />
    </View>
    );
}
