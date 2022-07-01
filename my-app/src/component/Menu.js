import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const Menu = () => {
  const navigation = useNavigation();
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
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Products")}
      >
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/stickers/90/000000/training.png",
          }}
        />
        <Text style={{ fontWeight: "bold" }}>Products</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("UserData")}
      >
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/conference.png",
          }}
        />
        <Text style={{ fontWeight: "bold" }}>Media</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}
      >
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/about.png",
          }}
        />
        <Text style={{ fontWeight: "bold" }}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image
          style={styles.iconStytle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
          }}
        />
        <Text style={{ fontWeight: "bold" }}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textStyle: {
    textTransform: "uppercase",
  },
  iconStytle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;
