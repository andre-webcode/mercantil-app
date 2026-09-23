import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { useCartStore } from "../../store/cart-store"
import { router } from "expo-router";
import { useState } from "react";

export const Checkout = () => {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);
    const [finalizado, setFinalizado] = useState(false);

    const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    const handleBack = () => {
        router.back();
    };

    const handleFinishPurchase = () => {
        clearCart();
        setFinalizado(true);
    };

    const handleGoHome = () => {
        router.replace('/home');
    }

    return (
        <View style={styles.container}>
            {finalizado ? (
                <View style={styles.successContainer}>
                    <Text style={styles.successTitle}>
                        ✓
                    </Text>

                    <Text style={styles.successMessage}>
                        Compra realizada com sucesso!
                    </Text>

                    <Text style={styles.successDescription}>
                        Obrigado pela sua compra.
                        {'\n'}
                        Seu pedido foi finalizado.
                    </Text>

                    <Pressable
                        onPress={handleGoHome}
                        style={[styles.button, styles.homeButton]}
                    >
                        <Text style={styles.buttonText}>
                            Voltar para o início
                        </Text>
                    </Pressable>
                </View>
            ) : (
                <>
                    <Pressable
                        onPress={handleBack}
                        style={styles.backButton}
                    >
                        <Text style={styles.backText}>
                            ← Voltar
                        </Text>
                    </Pressable>

                    <Text style={styles.title}>
                        Finalizar compra
                    </Text>

                    <FlatList
                        data={cart}
                        keyExtractor={(item) => item.product.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.name}>{item.product.name}</Text>

                                <Text style={styles.price}>
                                    R$ {item.product.price.toFixed(2)}
                                </Text>

                                <Text style={styles.quantity}>
                                    Quantidade: {item.quantity}
                                </Text>

                                <Text style={styles.subtotal}>
                                    Subtotal: R$ {(item.product.price * item.quantity).toFixed(2)}
                                </Text>
                            </View>
                        )}

                    />

                    <Text style={styles.total}>
                        Total: R$ {total.toFixed(2)}
                    </Text>


                    <Pressable
                        onPress={handleFinishPurchase}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            Finalizar compra
                        </Text>
                    </Pressable>
                </>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        marginBottom: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E8F5E9',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 8,
    },
    price: {
        fontSize: 15,
        color: '#2E7D32',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    quantity: {
        fontSize: 14,
        color: '#555555',
        marginBottom: 5,
    },
    subtotal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2E7D32',
    },
    backButton: {
        marginBottom: 15,
    },
    backText: {
        fontSize: 16,
        color: '#2E7D32',
        fontWeight: 'bold',
    },
    total: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'right',
    },
    button: {
        backgroundColor: '#2E7D32',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    successContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    successTitle: {
        fontSize: 60,
        color: '#2E7D32',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    successMessage: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E7D32',
        textAlign: 'center',
        marginBottom: 15,
    },
    successDescription: {
        fontSize: 16,
        color: '#555555',
        textAlign: 'center',
        lineHeight: 24,
    },
    homeButton: {
        paddingHorizontal: 30,
      },




})