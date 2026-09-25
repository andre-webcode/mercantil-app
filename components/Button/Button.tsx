import { Pressable, StyleSheet, Text } from "react-native"

type Props = {
    onPress: () => void;
}
export const Button = ({ onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>Começar</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#10B981',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginTop: 40,
    },

    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});