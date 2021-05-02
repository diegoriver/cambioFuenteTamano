import * as React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import * as estilo from "../../../../componentes/estilos";

// se importa el archivo día el cual se le tiene que enviar los parámetros específicos
import DiaCompletasp from './dias/diaCompletas';

// se importa el archivo contenido.js el cual tiene el contenido de cada día
import * as contenido from '../../componentes/contenidoCompletas';



function CompleScreen({ navigation }) {
  let colorbtn1= estilo.colorbtn1.color;
  let colorbtn2= estilo.colorbtn2.color;
  return (
<ImageBackground source={require('../../../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>
    <>
 
  <View style={estilo.styles.containerDraw}>
    
      <Text> </Text>
      <Text style={estilo.styles.titulodiaTab}>COMPLETORIO DOMINICANO</Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={estilo.styles.semana}>Semana 1</Text>
     <View style={estilo.styles.contenido}>
            <Button title="Lun" color={colorbtn1} onPress={() => navigation.navigate('Lunes 1')} />
            <Button title="Mar" color={colorbtn1} onPress={() => navigation.navigate('Martes 1')} />
            <Button title="Mie" color={colorbtn1} onPress={() => navigation.navigate('Miercoles 1')}  />
            <Button title="Jue" color={colorbtn1} onPress={() => navigation.navigate('Jueves 1')}  />
            <Button title="Vie" color={colorbtn1} onPress={() => navigation.navigate('Viernes 1')}  />
            <Button title="Sab" color={colorbtn1} onPress={() => navigation.navigate('Sábado 1')}  />
            <Button title="Dom" color={colorbtn1} onPress={() => navigation.navigate('Domingo 1')}  />
      </View>

      <Text> </Text>
      <Text style={estilo.styles.semana}>Semana 2</Text>
      <View style={estilo.styles.contenido}>
            <Button title="Lun" color={colorbtn2}  onPress={() => navigation.navigate('Lunes 2')} />
            <Button title="Mar" color={colorbtn2}  onPress={() => navigation.navigate('Martes 2')} />
            <Button title="Mie" color={colorbtn2}  onPress={() => navigation.navigate('Miercoles 2')}  />
            <Button title="Jue" color={colorbtn2}  onPress={() => navigation.navigate('Jueves 2')}  />
            <Button title="Vie" color={colorbtn2}  onPress={() => navigation.navigate('Viernes 2')}  />
            <Button title="Sab" color={colorbtn2}  onPress={() => navigation.navigate('Sábado 2')}  />
            <Button title="Dom" color={colorbtn2}  onPress={() => navigation.navigate('Domingo 2')}  />
      </View>
      <Text> </Text>
      <Text style={estilo.styles.semana}>Semana 3</Text>
      <View style={estilo.styles.contenido}>
            <Button title="Lun" color={colorbtn1}  onPress={() => navigation.navigate('Lunes 3')} />
            <Button title="Mar" color={colorbtn1}  onPress={() => navigation.navigate('Martes 3')} />
            <Button title="Mie" color={colorbtn1}  onPress={() => navigation.navigate('Miercoles 3')}  />
            <Button title="Jue" color={colorbtn1}  onPress={() => navigation.navigate('Jueves 3')}  />
            <Button title="Vie" color={colorbtn1}  onPress={() => navigation.navigate('Viernes 3')}  />
            <Button title="Sab" color={colorbtn1}  onPress={() => navigation.navigate('Sábado 3')}  />
            <Button title="Dom" color={colorbtn1}  onPress={() => navigation.navigate('Domingo 3')}  />
      </View>
      <Text> </Text>
      <Text style={estilo.styles.semana}>Semana 4</Text>
      <View style={estilo.styles.contenido}>
            <Button title="Lun" color={colorbtn2}  onPress={() => navigation.navigate('Lunes 4')} />
            <Button title="Mar" color={colorbtn2}  onPress={() => navigation.navigate('Martes 4')} />
            <Button title="Mie" color={colorbtn2}  onPress={() => navigation.navigate('Miercoles 4')}  />
            <Button title="Jue" color={colorbtn2}  onPress={() => navigation.navigate('Jueves 4')}  />
            <Button title="Vie" color={colorbtn2}  onPress={() => navigation.navigate('Viernes 4')}  />
            <Button title="Sab" color={colorbtn2}  onPress={() => navigation.navigate('Sábado 4')}  />
            <Button title="Dom" color={colorbtn2}  onPress={() => navigation.navigate('Domingo 4')}  />
      </View>  
    </View>
    </>
    </ImageBackground>  

  );
}

function Lunes1() {return (<DiaCompletasp diasemana= 'lunes' titulo= {contenido.lunes1.diatitulo} partes={contenido.lunes1.partescompl}  />);}
function Martes1() {return (<DiaCompletasp diasemana= 'martes' titulo= {contenido.martes1.diatitulo} partes={contenido.martes1.partescompl} />);}
function Miercoles1() {return (<DiaCompletasp diasemana= 'miercoles' titulo= {contenido.miercoles1.diatitulo} partes={contenido.miercoles1.partescompl} />);}
function Jueves1() {return (<DiaCompletasp diasemana= 'jueves' titulo= {contenido.jueves1.diatitulo} partes={contenido.jueves1.partescompl}  />);}
function Viernes1() {return (<DiaCompletasp diasemana= 'viernes' titulo= {contenido.viernes1.diatitulo} partes={contenido.viernes1.partescompl} />);}
function Sabado1() {return (<DiaCompletasp diasemana= 'sabado' titulo= {contenido.sabado1.diatitulo} partes={contenido.sabado1.partescompl} />);}
function Domingo1() {return (<DiaCompletasp diasemana= 'domingo' titulo= {contenido.domingo1.diatitulo} partes={contenido.domingo1.partescompl} />);}

function Lunes2() {return (<DiaCompletasp diasemana= 'lunes' titulo= {contenido.lunes2.diatitulo} partes={contenido.lunes2.partescompl}  />);}
function Martes2() {return (<DiaCompletasp diasemana= 'martes' titulo= {contenido.martes2.diatitulo} partes={contenido.martes2.partescompl} />);}
function Miercoles2() {return (<DiaCompletasp diasemana= 'miercoles' titulo= {contenido.miercoles2.diatitulo} partes={contenido.miercoles2.partescompl} />);}
function Jueves2() {return (<DiaCompletasp diasemana= 'jueves' titulo= {contenido.jueves2.diatitulo} partes={contenido.jueves2.partescompl}  />);}
function Viernes2() {return (<DiaCompletasp diasemana= 'viernes' titulo= {contenido.viernes2.diatitulo} partes={contenido.viernes2.partescompl} />);}
function Sabado2() {return (<DiaCompletasp diasemana= 'sabado' titulo= {contenido.sabado2.diatitulo} partes={contenido.sabado2.partescompl} />);}
function Domingo2() {return (<DiaCompletasp diasemana= 'domingo' titulo= {contenido.domingo2.diatitulo} partes={contenido.domingo2.partescompl} />);}

function Lunes3() {return (<DiaCompletasp diasemana= 'lunes' titulo= {contenido.lunes3.diatitulo} partes={contenido.lunes3.partescompl}  />);}
function Martes3() {return (<DiaCompletasp diasemana= 'martes' titulo= {contenido.martes3.diatitulo} partes={contenido.martes3.partescompl} />);}
function Miercoles3() {return (<DiaCompletasp diasemana= 'miercoles' titulo= {contenido.miercoles3.diatitulo} partes={contenido.miercoles3.partescompl} />);}
function Jueves3() {return (<DiaCompletasp diasemana= 'jueves' titulo= {contenido.jueves3.diatitulo} partes={contenido.jueves3.partescompl}  />);}
function Viernes3() {return (<DiaCompletasp diasemana= 'viernes' titulo= {contenido.viernes3.diatitulo} partes={contenido.viernes3.partescompl} />);}
function Sabado3() {return (<DiaCompletasp diasemana= 'sabado' titulo= {contenido.sabado3.diatitulo} partes={contenido.sabado3.partescompl} />);}
function Domingo3() {return (<DiaCompletasp diasemana= 'domingo' titulo= {contenido.domingo3.diatitulo} partes={contenido.domingo3.partescompl} />);}

function Lunes4() {return (<DiaCompletasp diasemana= 'lunes' titulo= {contenido.lunes4.diatitulo} partes={contenido.lunes4.partescompl}  />);}
function Martes4() {return (<DiaCompletasp diasemana= 'martes' titulo= {contenido.martes4.diatitulo} partes={contenido.martes4.partescompl} />);}
function Miercoles4() {return (<DiaCompletasp diasemana= 'miercoles' titulo= {contenido.miercoles4.diatitulo} partes={contenido.miercoles4.partescompl} />);}
function Jueves4() {return (<DiaCompletasp diasemana= 'jueves' titulo= {contenido.jueves4.diatitulo} partes={contenido.jueves4.partescompl}  />);}
function Viernes4() {return (<DiaCompletasp diasemana= 'viernes' titulo= {contenido.viernes4.diatitulo} partes={contenido.viernes4.partescompl} />);}
function Sabado4() {return (<DiaCompletasp diasemana= 'sabado' titulo= {contenido.sabado4.diatitulo} partes={contenido.sabado4.partescompl} />);}
function Domingo4() {return (<DiaCompletasp diasemana= 'domingo' titulo= {contenido.domingo4.diatitulo} partes={contenido.domingo4.partescompl} />);}

const Stack = createStackNavigator();

export default function Drawer() {
  return (
    
      <Stack.Navigator initialRouteName="Completorio"  headerMode= "none" >
        <Stack.Screen name="Completorio" component={CompleScreen} />

        <Stack.Screen name="Lunes 1" component={Lunes1} />
        <Stack.Screen name="Martes 1" component={Martes1} />
        <Stack.Screen name="Miercoles 1" component={Miercoles1} />
        <Stack.Screen name="Jueves 1" component={Jueves1} />
        <Stack.Screen name="Viernes 1" component={Viernes1} />
        <Stack.Screen name="Sábado 1" component={Sabado1} />
        <Stack.Screen name="Domingo 1" component={Domingo1} />

        <Stack.Screen name="Lunes 2" component={Lunes2} />
        <Stack.Screen name="Martes 2" component={Martes2} />
        <Stack.Screen name="Miercoles 2" component={Miercoles2} />
        <Stack.Screen name="Jueves 2" component={Jueves2} />
        <Stack.Screen name="Viernes 2" component={Viernes2} />
        <Stack.Screen name="Sábado 2" component={Sabado2} />
        <Stack.Screen name="Domingo 2" component={Domingo2} />

        <Stack.Screen name="Lunes 3" component={Lunes3} />
        <Stack.Screen name="Martes 3" component={Martes3} />
        <Stack.Screen name="Miercoles 3" component={Miercoles3} />
        <Stack.Screen name="Jueves 3" component={Jueves3} />
        <Stack.Screen name="Viernes 3" component={Viernes3} />
        <Stack.Screen name="Sábado 3" component={Sabado3} />
        <Stack.Screen name="Domingo 3" component={Domingo3} />

        <Stack.Screen name="Lunes 4" component={Lunes4} />
        <Stack.Screen name="Martes 4" component={Martes4} />
        <Stack.Screen name="Miercoles 4" component={Miercoles4} />
        <Stack.Screen name="Jueves 4" component={Jueves4} />
        <Stack.Screen name="Viernes 4" component={Viernes4} />
        <Stack.Screen name="Sábado 4" component={Sabado4} />
        <Stack.Screen name="Domingo 4" component={Domingo4} />

      </Stack.Navigator>
  );
}

