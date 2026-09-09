import { StyleSheet, Text, View } from "react-native"
import { ProductType } from '../../types/product-type';

type ProductProps = {
    product: ProductType;
};
export const Product = ({ product }: ProductProps) => {
    return (
        <View style={styles.container}>
            <Text>{product.name}</Text>
            <Text>R$ {product.price}</Text>
            <Text>{product.category}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#ffffff'
    }
})