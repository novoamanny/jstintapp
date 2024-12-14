import Swiper from 'react-native-swiper';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import {useState, useCallback, useEffect} from 'react';
import { Link, Tabs} from 'expo-router';

import globalStyles from "../assets/styles";

import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
const videoSource = [
require('../assets/videos/Ceramic-Coating.mp4'),
require('../assets/videos/Car-Audio-Stage-5-3.mp4'),
];
export default function Page() {
  const [images, setImages] = useState([
    require('../assets/images/about-hero-parallex2.jpeg'),
    require('../assets/images/Cybertruck-cleo.jpg'),
    require('../assets/images/Double-Tesla.jpg'),
    require('../assets/images/Tesla-Rear.jpg'),
  ]);


  const playerOne = useVideoPlayer(videoSource[0], player => {
    player.loop = true;
    player.play();
  });
  const playerTwo = useVideoPlayer(videoSource[1], player => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(playerOne, 'playingChange', { isPlaying: playerOne.playing });

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <ScrollView contentContainerStyle={''}>
        {/* <View style={styles.container}>
        <Image source={require('../assets/images/about-hero-parallex2.jpeg')} style={{ width: '100%', height: 280 }} />
        </View> */}
        <View style={styles.container}>
        <VideoView style={styles.video} player={playerOne} allowsFullscreen allowsPictureInPicture />
        </View>
          <Image source={require('../JsTint-Logo-NOVATEK.png')} style={{ width: '90%', height: 280 }} />
      
          <Text style={styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text>
          <Swiper showsPagination autoplay height={250}
              dotStyle={styles.dot} // Style for inactive dots
              activeDotStyle={styles.activeDot} // Style for active dots
        >
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
        </Swiper>
          <Text style={styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text>
          <VideoView style={styles.video} player={playerTwo} allowsFullscreen allowsPictureInPicture />
          <Text style={styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 230,
  },
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
  },
  activeDot: {
    backgroundColor: '#B62025', // Color for active dot
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  container: {
    width: '100%',
    alignItems: "center",
    minHeight: 250,
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  copy: {
    // color: '#fff',
    fontSize: 21,
    paddingHorizontal: 25,
    paddingVertical: 35,
    // backgroundColor: '#303030',
    lineHeight: 36
  }
});
