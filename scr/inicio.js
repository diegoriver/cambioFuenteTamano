
import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useNavigation } from '@react-navigation/native';


import HomePage from './pages/Home';
import LiturgiaPage from './pages/Liturgia';
import OracionesPage from './pages/Oraciones';
import MartirologioPage from './pages/Martirologio';
import CantosPage from './pages/Cantos';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

//import files to Letter Fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Botones, {styles} from "../componentes/estilos";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image source={require('../assets/drawerWhite.png')}  style={{width: 25, height: 25, marginLeft: 5}} />
      </TouchableOpacity>
    </View>
  );
};


const HeaderButtonsAmarillo  = (props) => {

  let navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
    <Botones/> 
      {/*Home Button Image */}
      <TouchableOpacity onPress={() => {navigation.navigate('HomePage')}}>
        <Image source={require('../assets/botones/Boton_Home_Amarillo.png')}  style={{width: 30, height: 30, margin: 5}} />
      </TouchableOpacity>
      {/*Back Button Image */}
      <TouchableOpacity onPress={() => {navigation.pop()}}>
        <Image source={require('../assets/botones/Boton_Regreso_Amarillo.png')}  style={{width: 30, height: 30, margin: 5}} />
      </TouchableOpacity>
    </View>

  );
};


const HeaderButtonsNegro  = (props) => {

  let navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
    <Botones/> 
      {/*Home Button Image */}
      <TouchableOpacity onPress={() => {navigation.navigate('HomePage')}}>
        <Image source={require('../assets/botones/Boton_Home_Negro.png')}  style={{width: 30, height: 30, margin: 5}} />
      </TouchableOpacity>
      {/*Back Button Image */}
      <TouchableOpacity onPress={() => {navigation.pop()}}>
        <Image source={require('../assets/botones/Boton_Regreso_Negro.png')}  style={{width: 30, height: 30, margin: 5}} />
      </TouchableOpacity>
    </View>

  );
};

function homeScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomePage} 
      options={{
          title: ' ', //Set Header Title
          headerLeft: () => ( <NavigationDrawerStructure navigationProps={navigation} />),
          headerStyle: {backgroundColor: '#eab62c', /*Set Header color*/ },
          headerTintColor: '#fff', /*Set Header text color*/
          headerTitleStyle: { fontWeight: 'bold', /*Set Header text style*/ },
        }}
      />
    </Stack.Navigator>
  );
}

function liturgiaScreenStack({navigation}) {
  
  return (
    <Stack.Navigator initialRouteName="LiturgiaPage">
      <Stack.Screen name="LiturgiaPage" component={LiturgiaPage} 
      options={{
          title: 'Liturgia', //Set Header Title
          headerLeft: () => ( <NavigationDrawerStructure navigationProps={navigation} />),
          headerStyle: {backgroundColor: '#000000', /*Set Header color*/ },
          headerTintColor: '#fff', /*Set Header text color*/
          headerTitleStyle: { fontWeight: 'bold', /*Set Header text style*/ },
          headerRight: () => ( <HeaderButtonsAmarillo navigationProps={navigation}/>),
        }}
      />
    </Stack.Navigator>
  );
}

function oracionesScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="OracionesPage">
      <Stack.Screen name="OracionesPage" component={OracionesPage} 
      options={{
          title: 'Oraciones', //Set Header Title
          headerLeft: () => ( <NavigationDrawerStructure navigationProps={navigation} />),
          headerStyle: {backgroundColor: '#eab62c', /*Set Header color*/ },
          headerTintColor: '#fff', /*Set Header text color*/
          headerTitleStyle: { fontWeight: 'bold', /*Set Header text style*/ },
          headerRight: () => (<HeaderButtonsNegro navigationProps={navigation}/> ),
        }}
      />
    </Stack.Navigator>
  );
}

function martirologioScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="MartirologioPage">
      <Stack.Screen name="MartirologioPage" component={MartirologioPage} 
      options={{
          title: 'Martirologio', //Set Header Title
          headerLeft: () => ( <NavigationDrawerStructure navigationProps={navigation} />),
          headerStyle: {backgroundColor: '#000000', /*Set Header color*/ },
          headerTintColor: '#fff', /*Set Header text color*/
          headerTitleStyle: { fontWeight: 'bold', /*Set Header text style*/ },
          headerRight: () => ( <HeaderButtonsAmarillo navigationProps={navigation}/>),
        }}
      />
    </Stack.Navigator>
  );
}

function cantosScreenStack({navigation}) {
  
  return (
    <Stack.Navigator initialRouteName="CantosPage">
      <Stack.Screen name="CantosPage" component={CantosPage} 
      options={{
          title: 'Cantoral', //Set Header Title
          headerLeft: () => ( <NavigationDrawerStructure navigationProps={navigation} />),
          headerStyle: {backgroundColor: '#eab62c', /*Set Header color*/ },
          headerTintColor: '#fff', /*Set Header text color*/
          headerTitleStyle: { fontWeight: 'bold', /*Set Header text style*/ },
          headerRight: () => ( <HeaderButtonsNegro navigationProps={navigation}/>),
        }}
      />
    </Stack.Navigator>

  );
}



function App() {
let [fontsLoaded] = useFonts({'Euphorigenic': require('../assets/fonts/euphorigenic.ttf') });


  return (
    <NavigationContainer >
      <Drawer.Navigator
        drawerContentOptions={{  activeTintColor: '#eab62c', itemStyle: {marginVertical: 5}, labelStyle: {fontSize: 19, fontFamily:'Euphorigenic'} }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>

        <Drawer.Screen name="HomePage" options={{drawerLabel: '' }}  component={homeScreenStack} />
        <Drawer.Screen name="LiturgiaPage" options={{ drawerLabel: 'Liturgia y Oficio de lectura'}} component={liturgiaScreenStack} />
        <Drawer.Screen name="OracionesPage" options={{drawerLabel: 'Oraciones y textos espirituales'}} component={oracionesScreenStack} />
        <Drawer.Screen name="MartirologioPage" options={{drawerLabel: 'Martirologio Dominicano'}} component={martirologioScreenStack} />
        <Drawer.Screen name="CantosPage" options={{drawerLabel: 'Cantoral dominicano'}} component={cantosScreenStack} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;