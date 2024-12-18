import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import {useState, useCallback, useEffect, Fragment} from 'react';
import { Link } from 'expo-router';
import { Section, LogoSection, GoogleMap, Space } from '../components/global';
import CarouselSection from '../components/section--carousel-main';

// const videoSource = [
//   require('../assets/videos/Ceramic-Coating.mp4'),
//   require('../assets/videos/Car-Audio-Stage-5-3.mp4'),
// ];


export default function About() {
  const [images, setImages] = useState([
    require('../assets/images/cars-portrait.jpg'),
    require('../assets/images/Cybertruck-hero-4.jpg'),
    require('../assets/images/Cybertruck-cleo.jpg'),
    require('../assets/images/chevy-parallex.jpeg'),
  ]);
  return (
    <ScrollView>
      <LogoSection/>
      <Section 
        title={'Crafting Automotive Excellence!'}
        copy={"At J's Tint, we're more than just a car shop – we're your partners in automotive perfection. Specializing in Paint Protection Film (PPF) and Car Tint, we offer a suite of services to customize and safeguard your vehicle. From flawless car wraps to cutting-edge lighting and accessories installation, we're here to elevate your driving experience. Trust the experts at J's Tint to turn your car into a masterpiece."}
      />
      <CarouselSection images={images} text={undefined}/>
      <Section 
        title={'Revolutionizing Your Ride, One Detail at a Time!'}
        copy={"Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional."}
      />
      <GoogleMap/>
      {/* Meet The Team Section */}
      <Space int={45}/>
      {/* <Text style={styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text> */}
    </ScrollView>
  );
}