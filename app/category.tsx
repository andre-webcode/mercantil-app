import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { products } from "../data/products";
import { Product } from "../components/Product/Product";
import { useCartStore } from '../store/cart-store';
import { ShoppingCart } from "lucide-react-native";

const Category = () => {
    const { category } = useLocalSearchParams();
    const cart = useCartStore((state) => state.cart);

    const produtosDaCategoria = products.filter(
        (product) => product.category === category
    )

    const handleBack = () => {
        router.back();
    }

    const handleCart = () => {
        router.push('/cart');
    }

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.header}>
                <Pressable onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backText}>← Voltar</Text>
                </Pressable>

                <Pressable
                onPress={handleCart}
                 style={styles.cart}>

                    <ShoppingCart
                        size={28}
                        color="#2E7D32"
                    />

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            {cart.length}
                        </Text>
                    </View>
                </Pressable>

            </View>
            <Text style={styles.title}>{category}</Text>

            <FlatList
                data={produtosDaCategoria}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Product product={item} />
                )}
                numColumns={2}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E8F5E9',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
    },

    backButton: {
        marginLeft: 10,
    },

    backText: {
        fontSize: 16,
        color: '#2E7D32',
        fontWeight: 'bold',
    },

    cart: {
        position: 'relative',
        marginRight: 10,
    },

    badge: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: 'red',
        width: 18,
        height: 18,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },

    badgeText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'bold',
    },
});


export default Category;