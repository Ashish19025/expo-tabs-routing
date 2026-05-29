import { TabBarContext } from "@/context/TabBarContext";
import { use, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";


// Define your navigation param list
export default function HomePage() {
  // Access the context value using the `use` hook.
  const { istabbarvisible } = use(TabBarContext);

  // Get the router object using the `useRouter` hook from Expo Router.
  const router = useRouter();


  // Use the `useEffect` hook to ensure the tab bar is visible when on the home page.
  useEffect(() => {
    // Show the tab bar when the component mounts.
    istabbarvisible(true);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Tab Home</Text>
      <TouchableOpacity onPress={() => router.push("./Pages/profilepage")}>
        <Text>View Profile</Text>
      </TouchableOpacity>
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
