import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import {useState, useCallback, useEffect, Fragment} from 'react';
import Swiper from 'react-native-swiper';
import { Link } from 'expo-router';
import Hero from '../components/hero';
import { LogoSection } from '../components/main-logo-section';
import { OpacityScreen } from '../components/global';

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
      {/* <Hero videoSource={videoSource[0]}/> */}
      <View style={styles.container}>
        <OpacityScreen/>
          <Swiper showsPagination autoplay height={250}
              dotStyle={styles.dot} // Style for inactive dots
              activeDotStyle={styles.activeDot} // Style for active dots
          >
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
          </Swiper>
        </View>
      <LogoSection/>
      <View>
        <Text style={styles.title}>Crafting Automotive Excellence!</Text>
        <Text style={styles.copy}>At J's Tint, we're more than just a car shop – we're your partners in automotive perfection. Specializing in Paint Protection Film (PPF) and Car Tint, we offer a suite of services to customize and safeguard your vehicle. From flawless car wraps to cutting-edge lighting and accessories installation, we're here to elevate your driving experience. Trust the experts at J's Tint to turn your car into a masterpiece.</Text>
      </View>
      {/* <Text style={styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text> */}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  dot: {
    backgroundColor: '#90A4AE', // Color for inactive dots
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    display: 'none'
  },
  activeDot: {
    backgroundColor: '#B62025', // Color for active dot
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
    display: 'none'
  },
  container: {
      width: '100%',
      height: 'auto'
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: 'center',
    marginHorizontal: 10,
    lineHeight: 48,
    marginVertical: 20
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  copy: {
    // color: '#fff',
    fontSize: 21,
    paddingHorizontal: 25,
    paddingVertical: 25,
    // backgroundColor: '#303030',
    lineHeight: 36
  },
  highlight:{
    color: '#B62025',
    fontWeight: 'bold'
  }
});