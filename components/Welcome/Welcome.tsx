import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../Button/Button";
import { router } from "expo-router";

export const Welcome = () => {

    const handleStart = () => {
        router.replace('/home');
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')}
                style={styles.logo}
            />

            <Text style={styles.welcome}>Bem-vindo! 👋</Text>
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