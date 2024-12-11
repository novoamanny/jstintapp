import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from './assets/styles';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

import { Link } from 'expo-router';




export default function App() {

  return (
    <View style={globalStyles.container}>
      {/* <LinearGradient
        colors={['rgb(229, 27, 27)', '#B62025']}
        style={globalStyles.bgPrimary}
      /> */}
      {/* <Text style={globalStyles.text}>J's Tint and Car Audio</Text> */}
{/* 
        <Image
          style={globalStyles.tinyLogo}
          source={require('./JsTint-Logo-NOVATEK.png')}
        /> */}
      

      <StatusBar style="auto" />
    </View>
  );
}

