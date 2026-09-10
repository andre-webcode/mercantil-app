import { useEffect, useRef, useState } from "react";
import { FlatList, ImageBackground, StyleSheet, Text } from "react-native"

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
	const [currentIndex, setCurrentIndex] = useState(0);

	const bannerRef = useRef<FlatList>(null);

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

		return () => clearInterval(interval)
	}, [])


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
				</ImageBackground>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 120,
		width: 320,
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