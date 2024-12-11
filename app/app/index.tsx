import Swiper from 'react-native-swiper';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import {useState, useCallback, useEffect} from 'react';
import { Link, Tabs} from 'expo-router';
import globalStyles from "../assets/styles";

export default function Page() {
  const [images, setImages] = useState([
    require('../assets/images/about-hero-parallex2.jpeg'),
    require('../assets/images/Cybertruck-cleo.jpg'),
    require('../assets/images/Double-Tesla.jpg'),
    require('../assets/images/Tesla-Rear.jpg'),
  ]);
  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={globalStyles.container}>
        {/* <View style={styles.container}>
        <Image source={require('../assets/images/about-hero-parallex2.jpeg')} style={{ width: '100%', height: 280 }} />
        </View> */}
        <View style={styles.container}>
        <Swiper showsPagination autoplay height={250}
              dotStyle={styles.dot} // Style for inactive dots
              activeDotStyle={styles.activeDot} // Style for active dots
        >
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
        </Swiper>
        </View>
        {/* <Link href="/about" asChild>
          <Pressable>
            <Text>About</Text>
          </Pressable>
        </Link>
        <Link href="/services">services</Link>
        <Link href="/contact">Contact</Link> */}
      </ScrollView>
    </View>
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
    backgroundColor: '#fff'
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
});
