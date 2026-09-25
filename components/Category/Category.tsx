import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type CategoryProps = {
  category: {
    id: number;
    name: string;
    image: any;
  };
};

export const Category = ({ category }: CategoryProps) => {

  const handlePress = () => {
    router.push(`/category?category=${category.name}`)
  }



  return (
    <Pressable
    onPress={handlePress}
     style={styles.container}>
      
        <Image
          source={category.image}
          style={styles.image}
        />

        <Text style={styles.name}>
          {category.name}
        </Text>
     
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 220,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 12,
    margin: 6,
    padding: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  
    elevation: 3,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  name: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B6645',
  },
});