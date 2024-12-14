import Swiper from 'react-native-swiper';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Animated } from "react-native";
import {useState, useCallback, useEffect, Fragment, useRef} from 'react';
import { Link, Tabs} from 'expo-router';

import globalStyles from "../assets/styles";
import {LogoSection} from "../components/main-logo-section";
import { OpacityScreen } from '../components/global';

import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
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
  const [isVisible, setIsVisible] = useState(false); // State to track button visibility
  const fadeAnim = useRef(new Animated.Value(0)).current; // Animation value for opacity



  // const playerOne = useVideoPlayer(videoSource[0], player => {
  //   player.loop = true;
  //   player.play();
  // });
  // const playerTwo = useVideoPlayer(videoSource[1], player => {
  //   player.loop = true;
  //   player.play();
  // });

  // const { isPlaying } = useEvent(playerOne, 'playingChange', { isPlaying: playerOne.playing });





  // Show the button with animation
  const showButton = () => {
    if (!isVisible) {
      console.log('showButton triggered');
      Animated.timing(fadeAnim, {
        toValue: 1, // Fully visible
        duration: 300, // Animation duration in milliseconds
        useNativeDriver: true,
      }).start();
      setIsVisible(true);
    }
  };

  // Hide the button with animation
  const hideButton = () => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 0, // Fully hidden
        duration: 300, // Animation duration in milliseconds
        useNativeDriver: true,
      }).start(() => setIsVisible(false)); // Update visibility state after animation
    }
  };

  // Handle scroll to toggle button visibility
  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (yOffset > 100) {
      showButton(); // Show button when scrolled down
    } else {
      hideButton(); // Hide button when at the top
    }

    console.log(yOffset)
  };


  // onScroll={handleScroll} scrollEventThrottle={16}

  return (
    <ScrollView >
        {/* <View style={styles.container}>
        <Image source={require('../assets/images/about-hero-parallex2.jpeg')} style={{ width: '100%', height: 280 }} />
        </View> */}
        <View style={styles.container}>
        <OpacityScreen/>
        <View style={{position: 'absolute', top: 0, left: 20, zIndex: 8}}>
          <Text style={[styles.title, {color: '#fff', textAlign: 'left'}]}>Customize Your Ride, Unleash Your Style!</Text>
        </View>
        <View style={{position: 'absolute', top: 125, zIndex: 5, width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)'}}>
          <Swiper showsPagination autoplay height={125} width={100}
          dotStyle={styles.dot} // Style for inactive dots
          activeDotStyle={styles.activeDot}
          style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}
          >
            {images2.map((image, index) => (
              <Image key={index} source={image} style={styles.image2} />
            ))}
          </Swiper>
        </View>
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
          <Text style={styles.title}>Revolutionizing Your Ride, One Detail at a Time!</Text>
          <Text style={styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text>
          <Image source={Headlight} style={styles.image} />
          {/* <VideoView style={styles.video} player={playerTwo} allowsFullscreen allowsPictureInPicture /> */}
          <Text style={styles.title}>Preserve Your Ride, Unleash Its Potential: The Power of Paint Protection Film</Text>
          <Text style={styles.copy}>Transform the way you protect your vehicle with our industry-leading Paint Protection Film (PPF). Engineered to shield your car's paint from the rigors of daily driving, our PPF offers unparalleled protection without compromising on style. Crafted from high-quality materials, our nearly invisible film is designed to keep your car looking newer for longer.</Text>
          <Text style={styles.title}>Benefits of PPF:</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Shield Your Vehicle from the Elements:</Text> Our PPF provides a durable, high-gloss barrier against rocks, road debris, bug splatter, and other environmental hazards, ensuring your paint stays pristine.</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Preserves Resale Value:</Text> Protecting your car's paint with PPF can significantly increase its resale value by maintaining a flawless exterior. Potential buyers will appreciate the care taken to protect the vehicle.</Text>
          {/* <VideoView style={styles.video} player={playerOne} allowsFullscreen allowsPictureInPicture /> */}
          <Text style={styles.copy}><Text style={styles.highlight}>Unobtrusive Protection:</Text> Our high-quality PPF is virtually invisible once applied, maintaining the original aesthetics of your vehicle. Enjoy peace of mind knowing your car is protected without altering its appearance.</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Durable and Reliable:</Text> Engineered with cutting-edge technology, our PPF is designed to withstand daily driving and harsh conditions. It provides long-lasting protection, ensuring your vehicle stays looking newer for longer.</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Easy Maintenance:</Text> PPF makes cleaning easier by repelling dirt, water, and contaminants. Say goodbye to frequent waxing and polishing—maintaining your car's shine is effortless with our protective film.</Text>
          <Text style={styles.copy}><Text style={styles.highlight}>Tailored Solutions:</Text> We offer custom-fit PPF solutions for a wide range of vehicles, ensuring precise coverage and optimal protection. Whether you drive a sedan, SUV, or sports car, we have the right solution for you.</Text>
          <Image source={Map} style={styles.image} />
      <View style={{paddingVertical: 45}}></View>
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
  video: {
    width: '100%',
    height: 230,
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
