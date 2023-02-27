import { StyleSheet, Text, View, StatusBar } from "react-native";
import { AppNavigator } from "./src/navigation/bottomTab.navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}
