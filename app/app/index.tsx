import {useState, useCallback, useEffect, Fragment, useRef} from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Animated } from "react-native";


import {Styles} from "../assets/styles";

import { LogoSection, Space, GoogleMap } from '../components/global';
import PPFSection from '../components/section--ppf';
import CarouselSection from '../components/section--carousel-main';

const Headlight = require('../assets/images/Car-Headlight-on.jpg');
// const videoSource = [
// require('../assets/videos/Ceramic-Coating.mp4'),
// require('../assets/videos/Car-Audio-Stage-5-3.mp4'),
// ];
export default function Page() {
  const [images, setImages] = useState([
    require('../assets/images/black-tesla-three.jpg'),
    require('../assets/images/Viper-2.jpeg'),
    require('../assets/images/Tesla-Rear.jpg'),
    require('../assets/images/Double-Tesla.jpg'),
  ]);
  const [images2, setImages2] = useState([
    require('../assets/images/tesla-logo.png'),
    require('../assets/images/Lamborghini_Logo.png'),
    require('../assets/images/Jaguar-Logo.png'),
    require('../assets/images/Ford-Motor-Company-Logo.png'),
    require('../assets/images/vw-logo.png'),
    require('../assets/images/chevy-logo.png'),
  ]);


  // onScroll={handleScroll} scrollEventThrottle={16}

  return (
    <ScrollView >
        <CarouselSection images={images} text={'Customize Your Ride, Unleash Your Style!'}/>
        <LogoSection/>
        <PPFSection image={Headlight}/>
        <GoogleMap/>
        <Space int={45}/>
    </ScrollView>
  );
}