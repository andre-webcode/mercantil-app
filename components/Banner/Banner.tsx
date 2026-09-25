
import { useEffect, useRef, useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text} from 'react-native';

const banners = [
    {
        id: 1,
        image: require('../../assets/img1.jpg'),
        title: 'Ofertas da semana',
    },
    {
        id: 2,
        image: require('../../assets/img2.jpg'),
        title: 'Bebidas em promoção',
    },
    {
        id: 3,
        image: require('../../assets/img3.jpg'),
        title: 'Tudo para sua casa',
    },
];

export const Banner = () => {
    const bannerRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % banners.length;

                bannerRef.current?.scrollToOffset({
                    offset: nextIndex * 320,
                    animated: true,
                });

                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <FlatList
            ref={bannerRef}
            data={banners}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (

                <ImageBackground
                    source={item.image}
                    style={styles.container}
                    imageStyle={styles.image}
                >
                  
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                  
                </ImageBackground >

            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        height: 160,
        width: 320,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.10,
        shadowRadius: 8,
      
        elevation: 3,
    },

    image: {
        borderRadius: 10,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.35)',
        textShadowOffset: {
            width: 0,
            height: 1,
          },
          textShadowRadius: 4,
    },
    
});

