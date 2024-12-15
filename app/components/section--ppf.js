import { StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity, Linking, Animated } from "react-native";
import {useState, useCallback, useEffect, useRef} from 'react';
import { Styles} from '../assets/styles';

export default PPFSection = ({image}) =>{
    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>Revolutionizing Your Ride, One Detail at a Time!</Text>
            <Text style={Styles.copy}>Driven by a passion for automotive excellence, we are committed to enhancing your driving experience through precision craftsmanship, innovative solutions, and personalized service. Our mission is to inspire confidence and satisfaction in every customer, ensuring that your journey with us is nothing short of exceptional.</Text>
            <Image source={image} style={Styles.image} />
            <Text style={Styles.title}>Preserve Your Ride, Unleash Its Potential: The Power of Paint Protection Film</Text>
            <Text style={Styles.copy}>Transform the way you protect your vehicle with our industry-leading Paint Protection Film (PPF). Engineered to shield your car's paint from the rigors of daily driving, our PPF offers unparalleled protection without compromising on style. Crafted from high-quality materials, our nearly invisible film is designed to keep your car looking newer for longer.</Text>
            <Text style={[Styles.title, Styles.textCenter]}>Benefits of PPF:</Text>
            <Text style={Styles.copy}><Text style={Styles.highlight}>Shield Your Vehicle from the Elements:</Text> Our PPF provides a durable, high-gloss barrier against rocks, road debris, bug splatter, and other environmental hazards, ensuring your paint stays pristine.</Text>
            <Text style={Styles.copy}><Text style={Styles.highlight}>Preserves Resale Value:</Text> Protecting your car's paint with PPF can significantly increase its resale value by maintaining a flawless exterior. Potential buyers will appreciate the care taken to protect the vehicle.</Text>
            <Text style={Styles.copy}><Text style={Styles.highlight}>Unobtrusive Protection:</Text> Our high-quality PPF is virtually invisible once applied, maintaining the original aesthetics of your vehicle. Enjoy peace of mind knowing your car is protected without altering its appearance.</Text>
            <Text style={Styles.copy}><Text style={Styles.highlight}>Durable and Reliable:</Text> Engineered with cutting-edge technology, our PPF is designed to withstand daily driving and harsh conditions. It provides long-lasting protection, ensuring your vehicle stays looking newer for longer.</Text>
            <Text style={Styles.copy}><Text style={Styles.highlight}>Easy Maintenance:</Text> PPF makes cleaning easier by repelling dirt, water, and contaminants. Say goodbye to frequent waxing and polishing—maintaining your car's shine is effortless with our protective film.</Text>
            <Text style={Styles.copy}><Text style={Styles.highlight}>Tailored Solutions:</Text> We offer custom-fit PPF solutions for a wide range of vehicles, ensuring precise coverage and optimal protection. Whether you drive a sedan, SUV, or sports car, we have the right solution for you.</Text>
        </View>
    )
}