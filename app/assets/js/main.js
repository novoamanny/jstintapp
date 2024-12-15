import {useState} from 'react';
import {View} from 'react-native';


 // Show the button with animation
    export const showButton = () => {
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
    export const hideButton = () => {
        if (isVisible) {
        Animated.timing(fadeAnim, {
            toValue: 0, // Fully hidden
            duration: 300, // Animation duration in milliseconds
            useNativeDriver: true,
        }).start(() => setIsVisible(false)); // Update visibility state after animation
        }
    };

  // Handle scroll to toggle button visibility
    export const handleScroll = (event) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        if (yOffset > 100) {
        showButton(); // Show button when scrolled down
        } else {
        hideButton(); // Hide button when at the top
        }

        console.log(yOffset)
    };