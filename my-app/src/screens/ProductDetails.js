import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Product from "../api/Productapi";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const ProductDetails = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  const id = route.params.productId;
  console.log(id);

  const selectedProduct = Product.find((element) => {
    return id === element.id;
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={selectedProduct.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mainHeader}>{selectedProduct.title}</Text>
        <Text style={styles.description}>{selectedProduct.details}</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.price}> {selectedProduct.price} </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                "https://sanketlife.in/2888106033/checkouts/efae05bb7b19ce156dcf76e842a5f80c"
              )
            }
          >
            <Text style={styles.buttonText}> Buy Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// !todo style the course1 and make it uppercase

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "red",
    paddingHorizontal: 20,
  },
  courseContainer: {
    // height: "50%",
    // display: "flex",
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    // textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },

  cardImage: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
    height: undefined,
    aspectRatio: 1,
  },

  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textAlign: "center",
  },

  subHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textAlign: "center",
  },

  description: {
    // textAlign: "center",
    // justifyContent: "flex-start",
    fontSize: 16,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  price: {
    backgroundColor: "#344055",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 1,
    borderTopLeftRadius: 1,
    fontSize: 20,
    fontFamily: "JosefinSans_400Regular",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "JosefinSans_400Regular",
  },
});

export default ProductDetails;
