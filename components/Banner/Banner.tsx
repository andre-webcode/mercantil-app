import { ImageBackground, StyleSheet, Text, View } from "react-native"

export const Banner = () => {
  return (
    <ImageBackground
      source={require('../../assets/img1.jpg')}
      style={styles.container}
      imageStyle={styles.image}
    >
      <Text style={styles.title}>Ofertas da semana</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  image: {
    borderRadius: 10
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  }
});