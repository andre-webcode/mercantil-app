import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { products } from "../data/products";
import { Product } from "../components/Product/Product";

const Category = () => {
    const { category } = useLocalSearchParams();

    const produtosDaCategoria = products.filter(
        (product) => product.category === category
    )

    const handleBack = () => {
        router.back();
    }

    return (
        <View style={{flex:1}}>

            <Pressable onPress={handleBack} style={styles.backButton}>
                <Text style={styles.backText}>← Voltar</Text>
            </Pressable>

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
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10
    },
    backButton: {
        marginTop:10,
        marginBottom: 15,
        marginLeft:10
      },
      
      backText: {
        fontSize: 16,
        color: '#2E7D32',
        fontWeight: 'bold',
      },
})


export default Category;

