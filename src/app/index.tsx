import { StyleSheet, Text, View } from "react-native";
import { TabBarContext } from "@/context/TabBarContext";
import { use, useEffect } from "react";



export default function HomePage() {
  // Access the context value using the `use` hook.
  const { istabbarvisible } = use(TabBarContext);
  // Use the `useEffect` hook to hide the tab bar when the component mounts 
  // and show it again when the component unmounts.
  useEffect(() => {
    // Hide the tab bar when the component mounts.
    istabbarvisible(false);
    return () => 
      // Show the tab bar again when the component unmounts.
      istabbarvisible(true);
    });

  return (
    <View style={styles.container}>
      <Text>Tab Home</Text>
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
