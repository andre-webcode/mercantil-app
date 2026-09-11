import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { products } from "../data/products";
import { Product } from "../components/Product/Product";

const Category = () => {
    const { category } = useLocalSearchParams();

    const produtosDaCategoria = products.filter(
        (product) => product.category === category
    )

    return (
        <View>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 10,
        alignItems:'center',
        textAlign:'center',
        marginTop:10
    },
})


export default Category;

