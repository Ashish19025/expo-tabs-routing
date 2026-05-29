import TabLayout from "@/app/_app-tabs";
import { DarkTheme, ThemeProvider } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <TabLayout />
    </ThemeProvider>
  );
}
