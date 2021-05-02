import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import * as estilo from "../../componentes/estilos";

import FiestasSolemnidades from './liturgia/FiestasSolemnidades';
import Celebraciones from './liturgia/Celebraciones';
import Completas from './liturgia/Completas';


function Liturgiap ({ navigation }) {


  return (
  <ImageBackground style={{flex: 1}} source={require('../../assets/Marca_agua_escudo_OP.jpg')} >
  <ScrollView>
  <>

      <View style={estilo.styles.container}>
        <View style={estilo.styles.contenidoList}>
        <>
          <TouchableOpacity onPress={() => navigation.navigate('FiestasSolemnidades')} >                
            <View style={estilo.styles.button2} >
              <Text style={estilo.styles.buttonText2}>Fiestas y Solemnidades</Text>
            </View>
          </TouchableOpacity>
          <Text> </Text> 
          

          <TouchableOpacity onPress={() => navigation.navigate('Celebraciones')} >
            <View style={estilo.styles.button2} >
              <Text style={estilo.styles.buttonText2}>Celebraciones del jubileo</Text>
            </View>
          </TouchableOpacity>
          <Text> </Text> 

          <TouchableOpacity onPress={() => navigation.navigate('Completas')} >
            <View style={estilo.styles.button2} >
              <Text style={estilo.styles.buttonText2} >Completorio dominicano</Text>
            </View>
          </TouchableOpacity>
          <Text> </Text> 
        </>
        </View>
      </View>

  </>
  </ScrollView>
  </ImageBackground>  
    
  );
}

function FiestasSolemnidadesp ({ navigation }) { return (<FiestasSolemnidades />);}
function Celebracionesp ({ navigation }) { return (<Celebraciones />);}
function Completasp ({ navigation }) { return (<Completas />);}

const Stacko = createStackNavigator();

export default function LiturgiaPage() {
  return (
  <Stacko.Navigator headerMode= "none" >
    <Stacko.Screen name="Conoce nuestra liturgia" component={Liturgiap} />
    <Stacko.Screen name="FiestasSolemnidades" component={FiestasSolemnidadesp} />
    <Stacko.Screen name="Celebraciones" component={Celebracionesp} />
    <Stacko.Screen name="Completas" component={Completasp} />
  </Stacko.Navigator>
 
    );
}


