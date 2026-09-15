import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useCartStore } from "../../store/cart-store";

export default function Cart() {
    const cart = useCartStore((state) => state.cart);

    const handleBack = () => {
        router.push('/home');
    }

    return (
        <View style={styles.container}>

            <Pressable onPress={handleBack}
                style={styles.backButton}
            >
                <Text style={styles.titleText}>
                    ← Voltar
                </Text>
            </Pressable>

            <Text style={styles.title}>
                Carrinho
            </Text>

            <Text style={styles.empty}>
                Produtos no carrinho: {cart.length}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E7D32',
    },

    empty: {
        marginTop: 30,
        fontSize: 16,
        color: '#777777',
        textAlign: 'center',
    },
    backButton: {
        marginBottom: 15
    },
    titleText: {
        fontSize: 16,
        color: '#2E7D32',
        fontWeight: 'bold',
    }
});