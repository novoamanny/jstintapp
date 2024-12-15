import {useState, useCallback, useEffect, Fragment, useRef} from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Animated } from "react-native";

import { Carousel, OpacityScreen } from './global';
import { Styles } from '../assets/styles';

export default CarouselSection = ({text, images}) =>{
    return(
        <View style={Styles.container}>
          <OpacityScreen/>
          <View style={{position: 'absolute', top: 0, left: 20, zIndex: 8}}>
            <Text style={[Styles.title, {color: '#fff', textAlign: 'left'}]}>{text}</Text>
          </View>
          <Carousel
            images={images} height={undefined} width={undefined} style={undefined}
          />
        </View>
    )
}