
import * as React from 'react';
import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';


// se importan los estilo.styles desde estilo.js
import * as estilo from '../../../../../componentes/estilos';


//import  de los textos JSON
import  Inicial from '../textos/invocacioninicial.json';



// se importa deacuerdo al día //////////////////////////////////////

import Salmodomingo from './partes/salmosdias/salmodomingo';
import Salmosabado from './partes/salmosdias/salmosabado';
import Salmoviernes from './partes/salmosdias/salmoviernes';
import Salmojueves from './partes/salmosdias/salmojueves';
import Salmomiercoles from './partes/salmosdias/salmomiercoles';
import Salmomartes from './partes/salmosdias/salmomartes';
import Salmolunes from './partes/salmosdias/salmolunes';

/////////////////////////////////////////////////////////////////



export default function CompletasScreen(props) {

  // / AQUI SE PONEN LOS PROPS QUE VIENEN DE DRAWER///////////////
  // mientras tanto se ponen las variables aqui/////

  const diatitulo = props.titulo;

  const partescompl = props.partes;
   


  // let a = 3;
  let a = props.diasemana;
  let Salmodia;

  switch (a) {
  case 'domingo':
    Salmodia = <Salmodomingo />;
    break;
  case 'sabado':
    Salmodia = <Salmosabado />;
    break;
  case 'viernes':
    Salmodia = <Salmoviernes />;
    break;
  case 'jueves':
    Salmodia = <Salmojueves />;
    break;
  case 'miercoles':
    Salmodia = <Salmomiercoles />;
    break;
  case 'martes':
    Salmodia = <Salmomartes />;
    break;
  default:
    Salmodia = <Salmolunes />;
}
  /////////////////////////////////////////////////////////////

  return (
  <ImageBackground source={require('../../../../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>

    <ScrollView style={estilo.styles.container}>
      <View>


      {/* <!-- ----------------------- --> */}
      <Text style={estilo.styles.titulodia}>{diatitulo}</Text>
      {/* <!-- ----------------------- --> */}
      <Text>{" "}</Text>
      

      {/* <!-------------------- INVOCACIÓN INICIAL -----------------------> */}
     
      <Text style={estilo.styles.nombre}>{Inicial.nombre}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{Inicial.v}</Text>
      <Text style={estilo.styles.responsorio}><Text style={{color:'red'}}>R. </Text>{Inicial.r}</Text>
      <Text>{" "}</Text>
      <Text style={estilo.styles.responsorio}>{Inicial.gloria}</Text>
      <Text>{" "}</Text>

      {/* <!-------------------- EXAMEN DE CONCIENCIA -----------------------> */}

      <Text style={estilo.styles.nombre}>EXAMEN DE CONCIENCIA</Text>
 

    </View>



  {/* <!---------------------------------- SALMOS -----------------------------> */}
      <View>
      <Text>{" "}</Text>
      <Text style={estilo.styles.nombre}>SALMOS</Text>

      {/* <!-- ----------------------- --> */}
      {/*<Salmodomingo />*/}
      {Salmodia}
      {/* <!-- ----------------------- --> */}   
      <Text>{" "}</Text>
      </View>
  
  {/* <!---------------------------------- SALMO DIFUNTOS -----------------------------> */}
      {/* <!-- ----------------------- --> */}
      {/* <SalmoDifuntos /> */}
      <View>
      <Text style={estilo.styles.nombre}>ORACIÓN POR LOS DIFUNTOS</Text>
      <Text style={estilo.styles.nombre}>{partescompl[10]}</Text>
      <Text style={estilo.styles.antifona}><Text style={{color:'red'}}>V. </Text>{partescompl[11]}</Text>
      </View>
      {/* <!-- ----------------------- --> */}

      

    </ScrollView>
  </ImageBackground>
  );
}



