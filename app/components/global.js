import { StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity, Linking } from "react-native";
import {useState, useCallback, useEffect} from 'react';
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
        position: 'absolute',
        bottom: 50, // Distance from the bottom of the screen
        right: 25,  // Distance from the right of the screen
        backgroundColor: '#B62025', // Customize the button color
        padding: 15,
        borderRadius: 5, // Makes the button circular
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // Adds shadow for Android
        width: '30%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // Text color
        fontWeight: 'bold',
    },
});