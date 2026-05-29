import { Stack, useSegments } from "expo-router";

{/*
  RootLayout is the root component shared across all the different routes. 
  You can use this to keep state when navigating between pages, or to add a layout that you want to share across all pages.
  */}
export default function RootLayout() {
  // Get the current segments using the `useSegments` hook.
  const segments = useSegments();
  // Determine the active route segment. The last segment in the array is the active one. If there are no segments, default to "index".
  const active = segments[segments.length - 1] ?? "index";


  // Map of route segments to header titles. You can customize this based on your route structure.
  // For example, if you have a route like "/settings", the segment would be "settings", and you can map it to a title like "Settings".
  // This allows you to dynamically set the header title based on the current route segment.
  const titleMap: Record<string, string> = {
    index: "Home",
    settings: "Settings",
    explore: "Explore",
    four: "Four",
    map: "Map",
  };

  return (
    /* The Stack component is used to define the navigation stack for the app. 
    In many cases, it is used as the header for the app, and it can contain multiple screens.
      Each Stack.Screen component represents a screen in the navigation stack.
    */
    <Stack
    /* Define screen options for the stack navigator. 
      This includes styling for the header, such as background color, text color, title style, and title alignment. 
    */
      screenOptions={{
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" , fontSize: 50},
        headerTitleAlign: "center",
      }}
    >
      {/* Mount the tabs group (folder is (tabs)) */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: true, headerTitle: titleMap[active] ?? "HomePage" }}
      />

      {/* 
      **Define a screen for the profile page. 
      **This screen will be displayed when the user navigates to the profile page. 
      **this is for the pages which are not dynamic. 
      **Important thing we can choose whether to show the header or not, and also we can set the title of the header.
      */}
      {/*
      **headerbackvisible is used to hide the back button in the header. 
      ** There are several thing also in options like headerleft, headerright, headercenter which can be used to add custom components in the header.
      */}
      <Stack.Screen name="Pages/profilepage" options={{ headerShown: true, headerTitle: "Profile Page", headerBackVisible: false}} />
    </Stack>
  );
}
