import 'react-native-gesture-handler';

import React from 'react';
import { Text, ScrollView, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';


import Cantos from './cantos/textos/listaCantos.json';

import Botones, {styles, a} from "../../componentes/estilos";


const CantoralP = ({navigation}) => {
  
  return (

  <ImageBackground source={require('../../assets/Marca_agua_escudo_OP.jpg')} style={styles.imagebg}>
  <>
 
    <View>
      <Text>{a}</Text>
    </View>
    <ScrollView>
     
    <View style={ styles.container}>
      <Text style={styles.titulodia}>CANTORAL DOMINICANO</Text>
    </View>
      <View style={ styles.containerList2}>
        <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto1.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.cuerpo}>{Cantos.canto1.estrofa1}</Text>
            <Text style={styles.antifona}>{Cantos.canto1.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto1.estrofa2}</Text>
            <Text style={styles.antifona}>{Cantos.canto1.coro2}</Text>
          </CollapseBody>
        </Collapse>

        
     <Collapse>       
          <CollapseHeader>
            <View style={ styles.containerList2}>   
              <Text style={styles.enlace}>{Cantos.canto11.nombre}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text style={styles.antifona}>{Cantos.canto11.coro1}</Text>
            <Text style={styles.cuerpo}>{Cantos.canto11.estrofa1}</Text>
          </CollapseBody>
      </Collapse>
        
      </View>
    </ScrollView>
  </>
  </ImageBackground>  
  );
};



const Stacko = createStackNavigator();

export default function CantoralPage() {
  return (
  <Stacko.Navigator headerMode= "none" >
    <Stacko.Screen name="Cantoral" component={CantoralP} />
  </Stacko.Navigator>
 

    );
}

