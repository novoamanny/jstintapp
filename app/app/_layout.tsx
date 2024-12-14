import { View, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Link, Tabs } from 'expo-router';


export default function About() {
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
        {/* <Tabs /> */}
    </>
  );
}
