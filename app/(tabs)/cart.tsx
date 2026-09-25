import { router } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useCartStore } from "../../store/cart-store";
import { ProductType } from "../../types/product-type";

export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const decreaseCart = useCartStore((state) => state.decreaseCart);
    const addToCart = useCartStore((state) => state.addToCart);

    const handleBack = () => {
        router.push('/home');
    }

    const handleIncrease = (product: ProductType) => {
        addToCart(product);
    };

    const handleDecrease = (producId: number) => {
        decreaseCart(producId);
    }

    const total = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)


    const handleCheckout = () => {
        router.push('/checkout');
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

            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <View style={styles.item}>

                        <View style={styles.productInfo}>
                            <Image
                                source={item.product.image}
                                style={styles.image}
                            />

                            <View>
                                <Text style={styles.name}>
                                    {item.product.name}
                                </Text>

                                <Text style={styles.price}>
                                    R$ {item.product.price.toFixed(2)}
                                </Text>

                                <Text style={styles.subtotal}>
                                    Subtotal: R$ {(item.product.price * item.quantity).toFixed(2)}
                                </Text>

                            </View>
                            <View style={styles.quantityContainer}>

                                <Pressable
                                    style={styles.quantityButton}
                                    onPress={() => handleDecrease(item.product.id)}
                                >
                                    <Text style={styles.quantityButtonText}>−</Text>
                                </Pressable>

                                <Text style={styles.quantity}>
                                    {item.quantity}
                                </Text>

                                <Pressable
                                    style={styles.quantityButton}
                                    onPress={() => handleIncrease(item.product)}
                                >
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </Pressable>
                            </View>
                        </View>

                    </View>

                )}
            />

            <Text style={styles.total}>
                Total: R$ {total.toFixed(2)}
            </Text>

            <Pressable
                style={styles.checkoutButton}
                onPress={handleCheckout}
            >
                <Text style={styles.checkoutButtonText}>
                    Ir para checkout
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FAF6EE',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0B6645',
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
        color: '#0B6645',
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        marginBottom: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E5EDE8',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.06,
        shadowRadius: 8,

        elevation: 3,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,


    },
    quantityButton: {
        width: 35,
        height: 35,
        borderRadius: 8,
        backgroundColor:  '#10B981',
        alignItems: 'center',

    },
    quantityButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        color: '#333333',
    },
    productInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',


    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
        marginRight: 15,
    },
    price: {
        marginTop: 5,
        fontSize: 15,
        color:  '#0B6645',
        fontWeight: 'bold',
    },
    subtotal: {
        marginTop: 4,
        fontSize: 13,
        fontWeight: 'bold',
        color:  '#0B6645',
    },
    total: {
        fontSize: 22,
        fontWeight: 'bold',
        color:  '#0B6645',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'right',
    },
    checkoutButton: {
        backgroundColor:  '#10B981',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    checkoutButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }

});