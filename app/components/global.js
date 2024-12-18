import { StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity, Linking, Animated } from "react-native";
import {useState, useCallback, useEffect, useRef} from 'react';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Styles, MainCTAStyles, SwipperStyles } from '../assets/styles';
import Swiper from 'react-native-swiper';
import { handleCall } from "../assets/js/main";

// M A I N   L O G O
const MAIN_LOGO = require('../JsTint-Logo-NOVATEK.png');
const Map = require('../assets/images/map.png');

// S P A C E
export const Space = ({int}) =>{
    return <View style={{paddingVertical: int}}></View>
}
// S E C T I O N
export const Section = ({title, copy}) =>{
    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>{title}</Text>
            <Text style={Styles.copy}>{copy}</Text>
        </View>
    );
}
// V I D E O   S E C T I O N
export const VideoSection = ({videoSource}) =>{
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });
    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
    return(
        <View style={Styles.container}>
            <VideoView style={Styles.video} player={player} allowsFullscreen allowsPictureInPicture />
        </View>
    );
}
// M A I N   C T A
export const MainCTA = () =>{
    return(
        <TouchableOpacity style={MainCTAStyles.callButton} onPress={handleCall}>
        <Text style={MainCTAStyles.buttonText}>Get A Quote!</Text>
        </TouchableOpacity>
    );
}
// L O G O   S E C T I O N
export const LogoSection = () =>{
    return(
        <View style={Styles.center}>
          <Image source={MAIN_LOGO} style={{ width: '90%', height: 280 }} />
        </View>
    )
}
// O P A C I T Y   S C R E E N
export const OpacityScreen = () =>{
    return(
        <View style={Styles.opacityScreen}></View>
    )
}
// C A R O U S E L
export const Carousel = ({images, height, width, style}) =>{
    return(
        <Swiper showsPagination autoplay height={height ? height : 250} width={width && width}
            dotStyle={SwipperStyles.dot} // Style for inactive dots
            activeDotStyle={SwipperStyles.activeDot} // Style for active dots
            style={style && style}
        >
            {images.map((image, index) => (
                <Image key={index} source={image} style={Styles.image} />
            ))}
        </Swiper>
    )
}
// G O O G L E   M A P
export const GoogleMap = () =>{
    return <Image source={Map} style={Styles.image} />
}