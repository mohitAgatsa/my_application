import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screens/About";
import UserData from "./src/screens/UserData";
import Products from "./src/screens/Products";
import Contact from "./src/screens/Contact";
import Home from "./src/screens/Home";
import ProductDetails from "./src/screens/ProductDetails";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Products"
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Products",
            headerTitleAlign: "center",
          }}
          component={Products}
        />
        <Stack.Screen
          name="UserData"
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Media Recognition",
            headerTitleAlign: "center",
          }}
          component={UserData}
        />
        <Stack.Screen
          name="About"
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "About Us",
            headerTitleAlign: "center",
          }}
          component={About}
        />
        <Stack.Screen
          name="Contact"
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Contact Us",
            headerTitleAlign: "center",
          }}
          component={Contact}
        />
        <Stack.Screen
          name="ProductDetails"
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Product Details",
            headerTitleAlign: "center",
          }}
          component={ProductDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
