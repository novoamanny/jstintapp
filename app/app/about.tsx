import { View, ScrollView, Text } from 'react-native';

import { Link } from 'expo-router';
import Hero from '../components/hero';

const videoSource = [
  require('../assets/videos/Ceramic-Coating.mp4'),
  require('../assets/videos/Car-Audio-Stage-5-3.mp4'),
];

export default function About() {
  return (
    <ScrollView>
      <Hero videoSource={videoSource[0]}/>
      {/* <Text style={styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text> */}
    </ScrollView>
  );
}
