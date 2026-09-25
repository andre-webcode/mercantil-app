import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { ProductType } from '../../types/product-type';
import { useCartStore } from "../../store/cart-store";
import { useEffect, useRef, useState } from "react";
import { router } from "expo-router";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

type ProductProps = {
    product: ProductType;
};
export const Product = ({ product }: ProductProps) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(15);
    const AnimatedCardPressable = Animated.createAnimatedComponent(Pressable);
    const AnimatedButtonPressable = Animated.createAnimatedComponent(Pressable);

    const scale = useSharedValue(1);

    const [adicionado, setAdicionado] = useState(false);

    const handleProductPress = () => {
        router.push(`/product?id=${product.id}&category=${product.category}`);

    };

    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = () => {
        addToCart(product);

        scale.value = withSpring(0.95);

        setAdicionado(true);

        setTimeout(() => {
            setAdicionado(false);
            scale.value = withSpring(1);
        }, 2000);
    };

    useEffect(() => {
        opacity.value = withTiming(1, {
            duration: 500,
        });

        translateY.value = withTiming(0, {
            duration: 500,
        });
    }, []);

    const animatedButtonStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value, },]
    }));

    const animatedCardStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    return (

        <AnimatedCardPressable onPress={handleProductPress} style={[styles.container, {
           animatedCardStyle
        },]}>

            <View style={styles.imageContainer}>
                <Image
                    source={product.image}
                    style={styles.image}
                />
            </View>

            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>R$ {product.price}</Text>
            <Text style={styles.category}>{product.category}</Text>

            <AnimatedButtonPressable
                onPress={handleAddToCart}
                style={[styles.button, adicionado && styles.buttonAdded]}
            >
                <Text style={styles.buttonText}>
                    {adicionado ? '✓ Adicionado' : 'Adicionar'}
                </Text>
            </AnimatedButtonPressable>

        </AnimatedCardPressable>

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