import 'react-native-gesture-handler';

import React from 'react';

import { Text, ScrollView, View, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import * as estilo from '../../componentes/estilos';



import Estudiop from './oraciones/estudio';


function ListScreen({ navigation }) {

  let colorbtn1= estilo.colorbtn1.color;
  let colorbtn2= estilo.colorbtn2.color;

  return (
  <ImageBackground source={require('../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>
  <>
    <ScrollView style={estilo.styles.containerList}>


      <Text style={estilo.styles.titulodiaTab}>ORACIONES DEL COMPLETORIO DOMINICANO</Text>
      <Text> </Text>
      <View style={estilo.styles.contenidoList}>
            
        <TouchableOpacity onPress={() => navigation.navigate('Estudio')} >
          <View style={estilo.styles.button1} >
            <Text style={estilo.styles.buttonText1} >ORACIÓN PARA ANTES DEL ESTUDIO (Santo Tomás de Aquino)</Text>
          </View>
        </TouchableOpacity>
        <Text> </Text>  


            <Text> </Text>
            <Text> </Text>
            <Text> </Text>

      </View>

    </ScrollView>
  </>
  </ImageBackground>  
    
  );
}


function Estudio({ navigation }) { return (<Estudiop />);}


const Stacko = createStackNavigator();

export default function oraciones() {
  return (
  <Stacko.Navigator headerMode= "none" >
    <Stacko.Screen name="Oraciones y textos espírituales" component={ListScreen} />
    <Stacko.Screen name="Estudio" component={Estudio} />

  </Stacko.Navigator>
 

    );
}
