import {useState, useCallback, useEffect, Fragment, useRef} from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Animated } from "react-native";
import { useEvent } from 'expo';
import { Link, Tabs} from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';

import {Styles, SwipperStyles} from "../assets/styles";

import { OpacityScreen, LogoSection, Carousel, Space } from '../components/global';

const Headlight = require('../assets/images/Car-Headlight-on.jpg');
const Map = require('../assets/images/map.png');
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
        <View style={styles.container}>
          <OpacityScreen/>
          <View style={{position: 'absolute', top: 0, left: 20, zIndex: 8}}>
            <Text style={[styles.title, {color: '#fff', textAlign: 'left'}]}>Customize Your Ride, Unleash Your Style!</Text>
          </View>
          <Carousel
            images={images} height={undefined} width={undefined} style={undefined}
          />
        </View>
        <LogoSection/>
          <Text style={styles.title}>Revolutionizing Your Ride, One Detail at a Time!</Text>
          <Text style={styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text>
          <Image source={Headlight} style={styles.image} />
          <Text style={styles.title}>Preserve Your Ride, Unleash Its Potential: The Power of Paint Protection Film</Text>
          <Text style={styles.copy}>Transform the way you protect your vehicle with our industry-leading Paint Protection Film (PPF). Engineered to shield your car's paint from the rigors of daily driving, our PPF offers unparalleled protection without compromising on style. Crafted from high-quality materials, our nearly invisible film is designed to keep your car looking newer for longer.</Text>
          <Text style={[styles.title, Styles.textCenter]}>Benefits of PPF:</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Shield Your Vehicle from the Elements:</Text> Our PPF provides a durable, high-gloss barrier against rocks, road debris, bug splatter, and other environmental hazards, ensuring your paint stays pristine.</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Preserves Resale Value:</Text> Protecting your car's paint with PPF can significantly increase its resale value by maintaining a flawless exterior. Potential buyers will appreciate the care taken to protect the vehicle.</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Unobtrusive Protection:</Text> Our high-quality PPF is virtually invisible once applied, maintaining the original aesthetics of your vehicle. Enjoy peace of mind knowing your car is protected without altering its appearance.</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Durable and Reliable:</Text> Engineered with cutting-edge technology, our PPF is designed to withstand daily driving and harsh conditions. It provides long-lasting protection, ensuring your vehicle stays looking newer for longer.</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Easy Maintenance:</Text> PPF makes cleaning easier by repelling dirt, water, and contaminants. Say goodbye to frequent waxing and polishing—maintaining your car's shine is effortless with our protective film.</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Tailored Solutions:</Text> We offer custom-fit PPF solutions for a wide range of vehicles, ensuring precise coverage and optimal protection. Whether you drive a sedan, SUV, or sports car, we have the right solution for you.</Text>
          <Image source={Map} style={styles.image} />
        <Space int={45}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  callButtonContainer: {
    position: 'absolute',
    bottom: 0, // Distance from the bottom of the screen
    // backgroundColor: '#B62025', // Customize the button color
    // padding: 15,
    // borderRadius: 5, // Makes the button circular
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.7,
    // shadowRadius: 5,
    // elevation: 5, // Adds shadow for Android
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',

},
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  image2: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  container: {
    width: '100%',
    alignItems: "center",
    minHeight: 250,
    justifyContent: 'center',
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
