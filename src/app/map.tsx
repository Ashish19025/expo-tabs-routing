import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-screens/experimental';
export default function map() {
    return (
        <SafeAreaView edges={{bottom: true}} style={{flex: 1}}>
            <View style={styles.container}>
                <Text>Tab Map</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        justifyContent: "center",
        alignItems: "center",
    },
});