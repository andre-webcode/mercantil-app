import { Image, StyleSheet, Text, View } from 'react-native';

type CategoryProps = {
  category: {
    id: number;
    name: string;
    image: any;
  };
};

export const Category = ({ category }: CategoryProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={category.image}
        style={styles.image}
      />

      <Text style={styles.name}>
        {category.name}
      </Text>
    </View>
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