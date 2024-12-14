import { View, Image, Text, Animated, StyleSheet  } from 'react-native';
import {useState, useCallback, useEffect, Fragment, useRef} from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Link, Tabs } from 'expo-router';

import { FloatCTA } from '../components/global';


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
        <Animated.View style={[ styles.callButtonContainer, { backgroundColor }]}>
          <FloatCTA/>
        </Animated.View>
        {/* <Tabs /> */}
    </>
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
})