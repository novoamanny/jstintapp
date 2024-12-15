import { View, Image, Text, Animated, StyleSheet  } from 'react-native';
import {useState, useCallback, useEffect, Fragment, useRef} from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Link, Tabs } from 'expo-router';

import { MainCTA } from '../components/global';
import { COLORS, MainCTAStyles } from '../assets/styles';


export default function About() {
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the glowing animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1000, // Time to brighten
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1000, // Time to dim
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [glowAnim]);

  // Interpolate the background color
  const backgroundColor = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#8B0000', '#B62025'], // From dark red to bright orange
  });

  return (
    <>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
{/* Homepage Options */}
              <Drawer.Screen
                name="index" // This is the name of the page and must match the url from root
                options={{
                  // Replace the title with an image
                  headerTitle: () => (
                    <Image
                      source={require('../JsTint-Logo-NOVATEK.png')} // Path to your image
                      style={{ width: 50, height: 50 }} // Adjust dimensions as needed
                    />
                  ),
                  drawerLabel: 'Home', // Optional, used elsewhere if needed
                }}
              />
{/* About Page Options */}
              <Drawer.Screen
                name="about" // This is the name of the page and must match the url from root
                options={{
                  // Replace the title with an image
                  headerTitle: () => (
                    <Image
                      source={require('../JsTint-Logo-NOVATEK.png')} // Path to your image
                      style={{ width: 50, height: 50 }} // Adjust dimensions as needed
                    />
                  ),
                  drawerLabel: 'About Us!', // Optional, used elsewhere if needed
                }}
              />

{/* Contact Page Options */}
              <Drawer.Screen
                name="contact" // This is the name of the page and must match the url from root
                options={{
                  // Replace the title with an image
                  headerTitle: () => (
                    <Image
                      source={require('../JsTint-Logo-NOVATEK.png')} // Path to your image
                      style={{ width: 50, height: 50 }} // Adjust dimensions as needed
                    />
                  ),
                  drawerLabel: 'Contact Us!', // Optional, used elsewhere if needed
                }}
              />

{/* Services Page Options */}
              <Drawer.Screen
                name="services" // This is the name of the page and must match the url from root
                options={{
                  // Replace the title with an image
                  headerTitle: () => (
                    <Image
                      source={require('../JsTint-Logo-NOVATEK.png')} // Path to your image
                      style={{ width: 50, height: 50 }} // Adjust dimensions as needed
                    />
                  ),
                  drawerLabel: 'Services', // Optional, used elsewhere if needed
                }}
              />
            </Drawer>
        </GestureHandlerRootView>
        <Animated.View style={[ MainCTAStyles.callButtonContainer, { backgroundColor }]}>
          <MainCTA/>
        </Animated.View>
        {/* <Tabs /> */}
    </>
  );
}