import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products} />
        <Stack.Screen name="ProductDetailsPage" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
