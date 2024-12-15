import { StyleSheet } from 'react-native';

// Main Style Colors
export const COLORS = {
    primary: '#B62025',
    secondary: '#303030',
    black: '#000',
    white: '#fff'
}

// Main Style Sheet
export const Styles = StyleSheet.create({
    BGColors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        black: COLORS.black,
        white: COLORS.white
    },
    container: {
        width: '100%',
        height: 'auto'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 450,
        height: 400
    },
    opacityScreen:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 5,
        backgroundColor: '#000',
        opacity: 0.45
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
    textLeft:{
        textAlign: 'left'
    },
    textCenter: {
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right'
    }
});

// Main CTA Styles
export const MainCTAStyles = StyleSheet.create({
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
})

// Swipper Styles
export const SwipperStyles = StyleSheet.create({
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
})