import { StyleSheet, Text, View } from 'react-native';
export default function Labelhidden() {
    return (
        <View style={styles.container}>
            <Text>label Hidden</Text>
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