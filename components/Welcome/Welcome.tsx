import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../Button/Button";
import { router } from "expo-router";
import { useEffect, useRef } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";

export const Welcome = () => {
    const logoOpacity = useSharedValue(0);
    const titleOpacity = useSharedValue(0);
    const descriptionOpacity = useSharedValue(0);

    const handleStart = () => {
        router.replace('/home');
    }

    useEffect(() => {
        logoOpacity.value = withTiming(1, {
            duration: 800,
        });

        titleOpacity.value = withDelay(
            300,
            withTiming(1, {
                duration: 600,
            })
        );

        descriptionOpacity.value = withDelay(
            500,
            withTiming(1, {
                duration: 600,
            })
        );

    }, []);

    const animatedLogoStyle = useAnimatedStyle(() => ({
        opacity: logoOpacity.value,
    }));

    const animatedTitleStyle = useAnimatedStyle(() => ({
        opacity: titleOpacity.value,
    }));

    const animatedDescriptionStyle = useAnimatedStyle(() => ({
        opacity: descriptionOpacity.value,
    }));

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../assets/logo.png')}
                style={[styles.logo, animatedLogoStyle]}
            />

            <Animated.Text
                style={[styles.welcome, animatedTitleStyle]}
            >
                Bem-vindo! 👋
            </Animated.Text>

            <Animated.Text
                style={[styles.description, animatedDescriptionStyle]}
            >
                Tudo o que você precisa{'\n'}
            </Animated.Text>

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