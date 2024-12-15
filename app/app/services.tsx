import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import {useState, useCallback, useEffect, Fragment} from 'react';
import Swiper from 'react-native-swiper';
import { Link } from 'expo-router';
import { OpacityScreen, LogoSection, VideoSection, GoogleMap, Carousel } from '../components/global';
import { Styles, SwipperStyles } from '../assets/styles';


export default function Services() {
  const [images, setImages] = useState([
    require('../assets/images/cars-portrait.jpg'),
    require('../assets/images/Cybertruck-hero-4.jpg'),
    require('../assets/images/Cybertruck-cleo.jpg'),
    require('../assets/images/chevy-parallex.jpeg'),
  ]);
  return (
    <ScrollView>
      <LogoSection/>
      <View>
        <Text style={Styles.title}>Crafting Automotive Excellence!</Text>
        <Text style={Styles.copy}>At J's Tint, we're more than just a car shop – we're your partners in automotive perfection. Specializing in Paint Protection Film (PPF) and Car Tint, we offer a suite of services to customize and safeguard your vehicle. From flawless car wraps to cutting-edge lighting and accessories installation, we're here to elevate your driving experience. Trust the experts at J's Tint to turn your car into a masterpiece.</Text>
      </View>
      <View style={Styles.container}>
        <OpacityScreen/>
        <Carousel
          images={images} height={undefined} width={undefined} style={undefined}
        />
      </View>
      <View>
        <Text style={Styles.title}>Revolutionizing Your Ride, One Detail at a Time!</Text>
        <Text style={Styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text>
      </View>
      <GoogleMap/>
      <View style={{paddingVertical: 45}}></View>
      {/* <Text style={Styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text> */}
    </ScrollView>
  );
}