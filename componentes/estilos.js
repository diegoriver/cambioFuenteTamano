import 'react-native-gesture-handler';

import React, { useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';


//variable para ajustar tamaño de letra, normalmente el valor base de las fuentes es 20 para esto se recomienda que este el valor de a en 25
 
var a=27;

const Botones = () => {  

  const [count, setCount] = useState(25);

  a= count; 

    return (
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress = {() => {setCount(count - 1);}}>
                <Image source={require('../assets/botones/Boton_Bajar_Amarillo.png')}  style={{width: 30, height: 30}} />
            </TouchableOpacity>

            <Text>{a}</Text>

            <TouchableOpacity onPress = {() => {setCount(count + 1);}}>
                <Image source={require('../assets/botones/Boton_Subir_Amarillo.png')}  style={{width: 30, height: 30}} />
            </TouchableOpacity>
        </View>
    );

}

export default Botones;




////////////////////////// estilos de los botones /////////////////////////////
let color1 = '#eab62c';
let color2 = '#000000';


export const colorbtn1 = {
  color: color1
}
//color: '#eab62c'  '#B1840D'
export const colorbtn2 = {
  color: color2 
}


export const styles = StyleSheet.create({
////// estilos botones de pantalla oraciones //////
  button1: {
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
    borderColor: color1,
    borderWidth: 2
  },
  buttonText1: {
    alignItems: "center",
    padding: 0,
    color: color1,
    fontSize: a-5,   
  },
  button2: {
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
    borderColor: color2,
    borderWidth: 2
  },
  buttonText2: {
    alignItems: "center",
    padding: 0,
    color: color2,
    fontSize: a-5,  
  },

////////////////// estilos varios ///////////////////

  semana: {
    fontSize: 20+8,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
  contenido : {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contenidoList : {
    flexDirection: 'column',
    justifyContent: 'space-between',
    //padding: 20,
  },


  titulodiaTab: { // de las pantallas de tabfouter
    fontWeight: 'bold',
    fontSize: 20+10,
    textAlign: 'center',
  },
  titulodia: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20+10,
    textAlign: 'center',
  },
  paragraph: {
    //flex: 1,
    fontSize: 20+18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding : 10,
  },
   subtitulo: {
    //flex: 1,
    fontSize: 20+8,
    fontWeight: 'bold',
    textAlign: 'center',
    padding : 10,
  },
  nombre: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: a,
    textAlign: 'center',
  },
  titulo: {
    color: 'red',
    fontSize: a-5,
    textAlign: 'center',
  },
  cuerpo: {
    fontSize: a-5,
  },
  cuerpoColor: {
    fontSize: a-2,
    backgroundColor: '#eab62c70',
    fontWeight: 'bold',
  },
  cita: {
    color: 'red',
    fontSize: a-5,
  },
  enlace: {
    fontWeight: 'bold',
    fontSize: a-5,
    marginLeft: 30,
    textDecorationLine: 'underline',
  },
  antifona: {
    fontWeight: 'bold',
    fontSize: a-5,
    marginLeft: 15,    
  },
  responsorio: {
    fontSize: a-5,
    marginLeft: 15,
  },


///////////// estilos contenedores //////////////////

  container: {//container de dias y lista de oraciones y partes
    marginTop: 20,
    padding: 10,
  },
  containerDraw: {// de drawer 
    //flex: 1,
    padding: 25,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  containerCompl: {// de completorio 
    flex: 1,
    //justifyContent: 'center',
    //padding: 0,
  },

  containerEnt: {// de entrada
    flex: 1,
    paddingTop: 25,
    
  },

  containerList: {// de listaoraciones
    marginTop: 20,
    padding: 25,
  },

  containerList2: {// de listaoraciones
    marginTop: 5,
    padding: 10,
    marginLeft: 10,
  },

////////////////////////////// estilos de imagenes de fondo de pantallas /////////////////////////////
  imagebg: {
    flex: 1,
    resizeMode: "cover",
    //justifyContent: "center"
  },

////////////////////////////// estilos de imagenes de los componentes /////////////////////////////

  imageEnt: {
    justifyContent: "flex-end",
     width: '100%',    
  },
  image2Ent: {
    alignSelf: 'center',
     width: '25%',    
     height: '15%',
  },
  imageCan1: {
    height: 200,
    width: '100%',
    resizeMode : 'contain',
 },
 imageCan2: {
  height: 200,
  width: '100%',
  resizeMode : 'contain',
},
imageCan3: {
  height: 200,
  width: '100%',
  resizeMode : 'contain',
},
imageCan4: {
  height: 250,
  width: '100%',
  resizeMode : 'contain',
},

imageHim2: {
  height: 200,
  width: '100%',
  resizeMode : 'contain',
},
imageHim3: {
  height: 250,
  width: '100%',
  resizeMode : 'contain',
},
imageHim4: {
  height: 320,
  width: '100%',
  resizeMode : 'contain',
},
imageHim5: {
  height: 220,
  width: '100%',
  resizeMode : 'contain',
},
imageHim6: {
  height: 320,
  width: '100%',
  resizeMode : 'contain',
},
imageResp1: {
  height: 150,
  width: '100%',
  resizeMode : 'contain',
},
imageResp2: {
  height: 200,
  width: '100%',
  resizeMode : 'contain',
},
imageResp3: {
  height: 320,
  width: '100%',
  resizeMode : 'contain',
},
imageResp4: {
  height: 220,
  width: '100%',
  resizeMode : 'contain',
},

imageSalmDom: {
  height: 250,
  width: '100%',
  resizeMode : 'contain',
},
imageSalmJue: {
  height: 120,
  width: '100%',
  resizeMode : 'contain',
},
imageSalmLun: {
  height: 120,
  width: '100%',
  resizeMode : 'contain',
},
imageSalmMar: {
  height: 120,
  width: '100%',
  resizeMode : 'contain',
},
imageSalmMie: {
  height: 200,
  width: '100%',
  resizeMode : 'contain',
},
imageSalmVie: {
  height: 120,
  width: '100%',
  resizeMode : 'contain',
},
imageSalmSab: {
  height: 120,
  width: '100%',
  resizeMode : 'contain',
},

imageSalve1: {
  height: 500,
  width: '100%',
  resizeMode : 'contain',
},
imageSalve2: {
  height: 400,
  width: '100%',
  resizeMode : 'contain',
},

imageStodom1a: {
  height: 550,
  width: '100%',
  resizeMode : 'contain',
},
imageStodom1b: {
height: 300,
width: '100%',
resizeMode : 'contain',
},
imageStodom2: {
  height: 700,
  width: '100%',
  resizeMode : 'contain',
},
imageStodom3: {
  height: 360,
  width: '100%',
  resizeMode : 'contain',
},
imageStodom4: {
  height: 450,
  width: '100%',
  resizeMode : 'contain',
},
imageStodom5: {
  height: 300,
  width: '100%',
  resizeMode : 'contain',
},
imageStodom6: {
  height: 300,
  width: '100%',
  resizeMode : 'contain',
},


});

