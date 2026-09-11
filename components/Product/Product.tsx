import { Pressable, StyleSheet, Text, View } from "react-native"
import { ProductType } from '../../types/product-type';

type ProductProps = {
    product: ProductType;
};
export const Product = ({ product }: ProductProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.imageContainer}>FOTO</Text>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>R$ {product.price}</Text>
            <Text style={styles.category}>{product.category}</Text>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#E8F5E9',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 20,
        margin:5
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2E7D32',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    category: {
        fontSize: 14,
        color: '#666666',
        marginTop: 4,
    },
    imageContainer: {
        backgroundColor: '#F5F5F5',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#2E7D32',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
    }
})