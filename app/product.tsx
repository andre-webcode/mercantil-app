import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { products } from "../data/products";
import { useCartStore } from "../store/cart-store";

export default function ProductDetails() {
    const { id, category } = useLocalSearchParams();

    const product = products.find((item) => item.id === Number(id));
    const addToCart = useCartStore((state) => state.addToCart);

    const handleBack = () => {
        router.replace(`/category?category=${category}`);
    };
    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
        }
    };

    return (
        <View style={styles.container}>
            <Pressable
                onPress={handleBack}
                style={styles.backButton}
            >
                <Text style={styles.backText}>
                    ← Voltar
                </Text>
            </Pressable>


            <View style={styles.imageContainer}>
                <Image
                    source={product?.image}
                    style={styles.image}
                />
            </View>

            <Text style={styles.name}>{product?.name}</Text>
            <Text style={styles.price}>
                R$ {product?.price.toFixed(2)}
            </Text>
            <Text style={styles.category}>{product?.category}</Text>
            <Text style={styles.description}>{product?.description}</Text>

            <Pressable
                onPress={handleAddToCart}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Adicionar ao carrinho
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  '#FAF6EE',
        padding: 15,
    },
    image: {
        width: 160,
        height: 160,
        alignSelf: 'center',
        marginTop: 30,

    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0B6645',
        textAlign: 'center',
        marginTop: 20,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0B6645',
        textAlign: 'center',
        marginTop: 10,
    },
    category: {
        fontSize: 15,
        color: '#666666',
        textAlign: 'center',
        marginTop: 8,
    },
    description: {
        fontSize: 16,
        color: '#555555',
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 20,
    },
    button: {
        backgroundColor:  '#10B981',
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
    backButton: {
        marginBottom: 15,
    },
    backText: {
        fontSize: 16,
        color: '#0B6645',
        fontWeight: 'bold',
    },
    imageContainer:{
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    }
});