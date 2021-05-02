import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, View, Text, ImageBackground} from 'react-native';

import * as estilo from "../../componentes/estilos";


const HomePage = ({navigation}) => {
  return (
    <>
    <ImageBackground style={{flex: 1}} source={require('../../assets/Inicio1.jpg')} >
    </ImageBackground>
    </>
  );
};

export default HomePage;