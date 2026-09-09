import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Search, ShoppingCart } from 'lucide-react-native';
import { products } from '../data/products';
import { Product } from '../components/Product/Product';


const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Mercantil</Text>

                <View style={styles.cart}>
                    <ShoppingCart
                        size={28}
                        color="#2E7D32"
                    />

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>2</Text>
                    </View>
                </View>

            </View>


            <Text style={styles.welcome}>Olá! 👋</Text>
            <Text style={styles.description}>
                Encontre tudo o que você precisa.
            </Text>

            <View style={styles.searchContainer}>
                <Search
                    size={20}
                    color="#2E7D32"
                />

                <TextInput
                    placeholder='Buscar produtos...'
                    style={styles.search}

                />
            </View>

            <FlatList
                data={products}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item})=>(
                    <Product product={item} />
                )}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
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
    },

    welcome: {
        fontSize: 22,
        marginTop: 40,
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        marginTop: 8,
        color: '#555555',
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
        borderColor: '#2E7D32',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,

    },
    cart:{
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
    }
});

export default Home;