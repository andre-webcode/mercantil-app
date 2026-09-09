import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Search, ShoppingCart } from 'lucide-react-native';


const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Mercantil</Text>

                <ShoppingCart
                    size={28}
                    color="#2E7D32"
                />
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
    searchContainer:{
        marginTop: 25,
        height: 50,
        borderWidth: 1,
        borderColor: '#2E7D32',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,

    }
});

export default Home;