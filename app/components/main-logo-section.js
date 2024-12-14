import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';


export const LogoSection = () =>{
    return(
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../JsTint-Logo-NOVATEK.png')} style={{ width: '90%', height: 280 }} />
        </View>
    )
}