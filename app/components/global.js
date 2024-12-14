import { StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity, Linking, Animated } from "react-native";
import {useState, useCallback, useEffect, useRef} from 'react';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';


export const FloatCTA = () =>{


    const handleCall = () => {
        const phoneNumber = 'tel:+12143917077'; // Replace with the desired phone number
        Linking.openURL(phoneNumber).catch((err) => {
          console.error('Failed to make a call:', err);
        });
      };

    return(
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
        <Text style={styles.buttonText}>Get A Quote!</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto'
    },
    video: {
        width: '100%',
        height: 230,
    },
    callButton: {
        // backgroundColor: '#B62025', // Customize the button color
        padding: 15,
        // borderRadius: 5, // Makes the button circular
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5, // Adds shadow for Android
        width: '100%',
        height: 90,
        alignItems: 'center',
        // borderColor: '#fff',
        // borderWidth: 1,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff', // Text color
        fontWeight: 'bold',
        fontSize: 20,
        // textDecorationStyle: 'solid',
        // textDecorationLine: 'underline'
    },
});