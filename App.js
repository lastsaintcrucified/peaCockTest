import { StyleSheet, Text, View, StatusBar, LogBox } from "react-native";
import { AppNavigator } from "./src/navigation/bottomTab.navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import tw from "twrnc";
import { store } from "./src/redux/store";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}
