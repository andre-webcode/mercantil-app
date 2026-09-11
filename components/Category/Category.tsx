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
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 5,
  },

  image: {
    width: 120,
    height: 100,
    borderRadius: 10,
  },

  name: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
});