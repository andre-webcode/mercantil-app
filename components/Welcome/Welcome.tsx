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
        backgroundColor: '#FFFFFF',
      
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 60,
    },
    welcome: {
        fontSize: 22,
        marginTop: 20,
        color: '#1565C0',
      },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        color: '#555555',
      },
})