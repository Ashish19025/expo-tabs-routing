
import { StyleSheet, Text, View } from 'react-native';
export default function Four() {
    return (
        <View style={styles.container}>
            <Text>Four</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        justifyContent: "center",
        alignItems: "center",
    },
});