import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Search, ShoppingCart } from 'lucide-react-native';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import { Category } from '../../components/Category/Category';
import { useState } from 'react';
import { Banner } from '../../components/Banner/Banner';
import { useCartStore } from '../../store/cart-store';
import { Product } from '../../components/Product/Product';


const Home = () => {
    const [search, setSearch] = useState('');
    const cart = useCartStore((state) => state.cart);

    const produtosFiltrados = products.filter((product) => (
        product.name.toLowerCase().includes(search.toLowerCase())
    ));

    const buscando = search.trim() !== '';

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Mercantil</Text>

            </View>


            <Text style={styles.welcome}>Olá! 👋</Text>
            <Text style={styles.description}>
                Encontre tudo o que você precisa.
            </Text>

            <View style={styles.content}>
                <View style={styles.searchContainer}>
                    <Search
                        size={20}
                        color="#0B6645"
                    />

                    <TextInput
                        placeholder='Buscar produtos...'
                        style={styles.search}
                        value={search}
                        onChangeText={setSearch}

                    />
                </View>

                {!buscando && <Banner />}

                {buscando ? (
                    produtosFiltrados.length === 0 ? (
                        <Text style={styles.noResults}>
                            Nenhum produto encontrado.
                        </Text>
                    ) : (
                        <FlatList
                            data={produtosFiltrados}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <Product product={item} />
                            )}
                            numColumns={2}
                            scrollEnabled={false}
                        />
                    )
                ) : (
                    <>
                        <Text style={styles.categoriesTitle}>
                            Categorias
                        </Text>

                        <FlatList
                            data={categories}
                            key="categories-2"
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <Category category={item} />
                            )}
                            numColumns={2}
                            columnWrapperStyle={{
                                justifyContent: 'center',
                              }}
                            contentContainerStyle={{
                                paddingTop: 10,
                            }}
                            scrollEnabled={false}
                        />
                    </>
                )}

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FAF6EE',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5EDE8',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0B6645',
    },

    welcome: {
        fontSize: 22,
        marginTop: 40,
        fontWeight: 'bold',
        color: '#0B6645',
    },

    description: {
        fontSize: 16,
        marginTop: 8,
        color: '#666666',
    },
    content: {
        width: '100%',
        maxWidth: 1200,
        alignSelf: 'center',
    },
    search: {
        flex: 1,
        marginLeft: 10,
        paddingHorizontal: 0,

    },
    searchContainer: {
        marginTop: 25,
        height: 50,
        borderWidth: 1,
        borderColor: '#D8E5DE',
        borderRadius: 26,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        backgroundColor: '#FFFFFF',

    },
    cart: {
        position: 'relative',
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
    categoriesTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color:  '#0B6645',
        marginTop: 20,
        marginBottom: 15,
    },
    noResults:{
        fontSize:20,
        marginTop:20,
        color:'#0B6645',
        textAlign:'center'
    }
});

export default Home;