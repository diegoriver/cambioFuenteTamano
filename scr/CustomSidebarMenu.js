import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, View, StyleSheet, Image, Text, ImageBackground} from 'react-native';
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

//import files to Letter Fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const CustomSidebarMenu = (props) => {

let [fontsLoaded] = useFonts({'Euphorigenic': require('../assets/fonts/euphorigenic.ttf') });

  return (

    <SafeAreaView style={styles.fondoMenu}>
      {/*Top Large Image */}
      <Image source={require('../assets/Logo_Dies_Natalis.png')} style={styles.sideMenuProfileIcon1}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
      </DrawerContentScrollView>
      <Image source={require('../assets/EscOrden.png')} style={styles.sideMenuProfileIcon2}
      />
      <Text style={{ fontSize: 15, fontFamily:'Euphorigenic', textAlign: 'right', color: 'grey' }}>DROp</Text>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  fondoMenu: {
    flex: 1,
    backgroundColor: "#d9d9d9",
  },

  sideMenuProfileIcon1: {
    resizeMode: 'center',
    width: 200,
    height: 150,
    alignSelf: 'center'
  },
    sideMenuProfileIcon2: {
    resizeMode: 'center',
    width: 70,
    height: 70,
    alignSelf: 'center'
  }

});

export default CustomSidebarMenu;