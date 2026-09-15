import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { ProductType } from '../../types/product-type';

type ProductProps = {
    product: ProductType;
};
export const Product = ({ product }: ProductProps) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.imageContainer}>
                <Image
                    source={product.image}
                    style={styles.image}
                />
            </View>

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
        fontSize: 17,
        fontWeight: 'bold',
        color: '#222222',
        marginTop:5
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#2e7d32',
        marginTop: 6,
    },
    category: {
        fontSize: 13,
        color: '#777777',
        marginTop: 3,
    },
    imageContainer: {
        backgroundColor: '#F5F5F5',
        width:'100%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#2E7D32',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
    image:{
        width:100,
        height:100,
        resizeMode:'contain',
    }
})