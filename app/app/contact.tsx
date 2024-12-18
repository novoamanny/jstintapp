import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import {useState, useCallback, useEffect, Fragment} from 'react';
import Swiper from 'react-native-swiper';
import { Link } from 'expo-router';
import { LogoSection, GoogleMap, Space, Section } from '../components/global';
import { Styles } from '../assets/styles';
import CarouselSection from '../components/section--carousel-main';

export default function Contact() {
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
        title={"Contact Us"}
        copy={"We're here to make your experience as seamless as possible. If you have any questions or need assistance, please don't hesitate to reach out to us using the form below. Our dedicated team is ready to assist you with any inquiries or concerns you may have. Your satisfaction is our top priority, and we look forward to helping you with your automotive needs."}
      />
      <CarouselSection images={images} text={undefined}/>
      <View style={Styles.container}>
        <Text style={Styles.title}>Meet Us!</Text>
        <Text style={Styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text>
      </View>
      <GoogleMap/>
      <Space int={45}/>
      {/* <Text style={Styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text> */}
    </ScrollView>
  );
}