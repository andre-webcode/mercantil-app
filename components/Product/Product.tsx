import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { ProductType } from '../../types/product-type';
import { useCartStore } from "../../store/cart-store";
import { useState } from "react";
import { router } from "expo-router";

type ProductProps = {
    product: ProductType;
};
export const Product = ({ product }: ProductProps) => {
    const [adicionado, setAdicionado] = useState(false);

    const handleProductPress = () => {
        router.push(`/product?id=${product.id}&category=${product.category}`);

    };

    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = () => {
        addToCart(product);
        setAdicionado(true);

        setTimeout(() => {
            setAdicionado(false);
        }, 2000);
    }

    return (
        <Pressable onPress={handleProductPress} style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    source={product.image}
                    style={styles.image}
                />
            </View>

            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>R$ {product.price}</Text>
            <Text style={styles.category}>{product.category}</Text>

            <Pressable
                onPress={handleAddToCart}
                style={[styles.button, adicionado && styles.buttonAdded]}
            >
                <Text style={styles.buttonText}>
                    {adicionado ? '✓ Adicionado' : 'Adicionar'}
                </Text>
            </Pressable>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#ffffff',
        borderRadius: 24,
        marginBottom: 12,
        marginTop: 20,
        margin: 6,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#0B6645',
        marginTop: 5
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0B6645',
        marginTop: 6,
    },
    category: {
        fontSize: 13,
        color: '#777777',
        marginTop: 3,
    },
    imageContainer: {
        backgroundColor: '#FAF6EE',
        width: '100%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#10B981',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    buttonAdded: {
        backgroundColor: '#0B6645'
    }
})