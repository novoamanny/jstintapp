import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import {useState, useCallback, useEffect} from 'react';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';


export default Hero = ({videoSource}) =>{

    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
      });
      const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
    return(
        <View style={styles.container}>
            <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
        </View>
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
});