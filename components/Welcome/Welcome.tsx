import { Image, StyleSheet, Text, View, Animated } from "react-native";
import { Button } from "../Button/Button";
import { router } from "expo-router";
import { useEffect, useRef } from "react";

export const Welcome = () => {
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const titleOpacity = useRef(new Animated.Value(0)).current;

    const handleStart = () => {
        router.replace('/home');
    }

    useEffect(() => {
        Animated.timing(logoOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();

        Animated.timing(titleOpacity, {
            toValue: 1,
            duration: 600,
            delay: 300,
            useNativeDriver: true,
          }).start();
    }, []);


    return (
        <View style={styles.container}>
            <Animated.Image source={require('../../assets/logo.png')}
                style={[styles.logo, { opacity: logoOpacity }]}
            />

            <Text style={[styles.welcome,{opacity:titleOpacity,}]}>
                Bem-vindo! 👋
            </Text>
            <Text style={styles.description}>
                Tudo que você precisa

            </Text>

            <Button
                onPress={handleStart}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FAF6EE',

    },
    logo: {
        width: 220,
        height: 220,
        marginTop: 40,
    },
    welcome: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#0B6645',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 12,
        color: '#666666',
        lineHeight: 24,
    },
})