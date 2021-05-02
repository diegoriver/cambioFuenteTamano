import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { Text, ScrollView, View, ImageBackground, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import Martires from './martirologio/textos/listaMartirologio.json';

import * as estilo from "../../componentes/estilos";

import CalendarPicker from 'react-native-calendar-picker';

import moment from 'moment';



var fechaCalendario;
var selectedStartDate1;

let customDatesStyles = [
 { date: "Jan 01 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 03 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 04 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 07 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 10 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 15 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 18 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 23 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jan 28 2021", style: {backgroundColor: '#eab62c40'} },
 
 { date: "Feb 04 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Feb 07 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Feb 12 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Feb 13 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Feb 18 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Feb 19 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Mar 25 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Apr 02 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Apr 04 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Apr 05 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Apr 20 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Apr 29 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Apr 30 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "May 01 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 08 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 10 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 19 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 21 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 24 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "May 26 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Jun 04 2021", style: {backgroundColor: '#eab62c40'} }, 
 { date: "Jun 06 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 10 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 19 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 23 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 25 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 27 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jun 29 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Jul 01 2021", style: {backgroundColor: '#eab62c40'} }, 
 { date: "Jul 07 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jul 09 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jul 20 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jul 22 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jul 24 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Jul 28 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Aug 01 2021", style: {backgroundColor: '#eab62c40'} }, 
 { date: "Aug 02 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 08 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 12 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 14 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 15 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 17 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 18 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 23 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Aug 28 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Sep 05 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Sep 10 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Sep 18 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Sep 24 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Sep 28 2021", style: {backgroundColor: '#eab62c40'} },
 
 { date: "Oct 04 2021", style: {backgroundColor: '#eab62c40'} }, 
 { date: "Oct 05 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 06 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 07 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 09 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 14 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 15 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 19 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Oct 22 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Nov 01 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Nov 03 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Nov 07 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Nov 08 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Nov 15 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Nov 24 2021", style: {backgroundColor: '#eab62c40'} },

 { date: "Dec 01 2021", style: {backgroundColor: '#eab62c40'} },
 { date: "Dec 08 2021", style: {backgroundColor: '#eab62c40'} },


];


class MartirologioP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }


  onDateChange(date) {
    fechaCalendario = moment(date).format('DDMM');
    
    switch (fechaCalendario) {
  case '0101':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0101.fecha, Martires.fecha0101.nombre, Martires.fecha0101.fiesta, Martires.fecha0101.resena ];
    break;
  case '0301':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0301.fecha, Martires.fecha0301.nombre, Martires.fecha0301.fiesta, Martires.fecha0301.resena ];
    break;
  case '0401':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0401.fecha, Martires.fecha0401.nombre, Martires.fecha0401.fiesta, Martires.fecha0401.resena ];
    break;
  case '0701':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0701.fecha, Martires.fecha0701.nombre, Martires.fecha0701.fiesta, Martires.fecha0701.resena ];
    break;
  case '1001':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1001.fecha, Martires.fecha1001.nombre, Martires.fecha1001.fiesta, Martires.fecha1001.resena ];
    break;
  case '1501':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1501.fecha, Martires.fecha1501.nombre, Martires.fecha1501.fiesta, Martires.fecha1501.resena ];
    break;
  case '1801':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1801.fecha, Martires.fecha1801.nombre, Martires.fecha1801.fiesta, Martires.fecha1801.resena ];
    break;
  case '2301':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2301.fecha, Martires.fecha2301.nombre, Martires.fecha2301.fiesta, Martires.fecha2301.resena ];
    break;
    case '2801':
    selectedStartDate1 = [fechaCalendario, Martires.fecha2801.fecha, Martires.fecha2801.nombre, Martires.fecha2801.fiesta, Martires.fecha2801.resena ];
    break;
  
  case '0402':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0402.fecha, Martires.fecha0402.nombre, Martires.fecha0402.fiesta, Martires.fecha0402.resena ];
    break;
  case '0702':
    selectedStartDate1 = [fechaCalendario, Martires.fecha0702.fecha, Martires.fecha0702.nombre, Martires.fecha0702.fiesta, Martires.fecha0702.resena ];
    break;
  case '1302':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1302.fecha, Martires.fecha1302.nombre, Martires.fecha1302.fiesta, Martires.fecha1302.resena ];
    break;
  case '1802':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1802.fecha, Martires.fecha1802.nombre, Martires.fecha1802.fiesta, Martires.fecha1802.resena ];
    break;
  case '1902':
    selectedStartDate1 = [fechaCalendario, Martires.fecha1902.fecha, Martires.fecha1902.nombre, Martires.fecha1902.fiesta, Martires.fecha1902.resena ];
    break;

  default:
    selectedStartDate1 = null;
}


    this.setState({      
      //moment(date).format('DDMM') deja solo el formato'DDMMYYYY' or'DDMM'
      selectedStartDate : selectedStartDate1,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate : '';

    return (
    <ImageBackground source={require('../../assets/Marca_agua_escudo_OP.jpg')} style={estilo.styles.imagebg}>
      <>
      <ScrollView style={estilo.container}>
      
      <Text> </Text>
      <Text> </Text>
      <Text style={estilo.styles.titulodiaTab}>MARTIROLÓGIO</Text>
      <Text style={estilo.styles.titulodiaTab}>DOMINICANO</Text>
      <Text> </Text>
      <Text> </Text>
        <CalendarPicker
          onDateChange={this.onDateChange}
          // Optional. Default first day of week will be Sunday. You can set start of week with number from 0 to 6. Default is 0 or Sunday
          firstDay={1}
          // Optional. Title of button for previous month. Default is Previous
          previousTitle={'atrás'}
          // Optional. Title of button for next month. Default is Next
          nextTitle={'siguiente'}

          selectedDayColor={'#eab62c'}
          todayBackgroundColor={'transparent'}
          headingLevel={1}
          weekdays={['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM']}
          months={['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',          'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE' ]}
          scaleFactor={355}
          customDatesStyles={customDatesStyles}


        />

        <View  style={estilo.styles.container}>
          <Text>{" "}</Text>
          <Text style={estilo.styles.enlace}>{startDate[1]}</Text>
          <Text style={estilo.styles.cuerpoColor}>{startDate[2]}</Text>
          <Text style={estilo.styles.cita}>{startDate[3]}</Text>
          <Text style={estilo.styles.cuerpo}>{startDate[4]}</Text>
          
          </View>
       
      </ScrollView>
      </>
  </ImageBackground>
    );
  }
}


const Stacko = createStackNavigator();

export default function MartirologioPage() {
  return (
  <Stacko.Navigator headerMode= "none" >
    <Stacko.Screen name="Martirologio" component={MartirologioP} />
  </Stacko.Navigator>
 

    );
}

