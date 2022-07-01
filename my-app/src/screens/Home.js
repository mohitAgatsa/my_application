import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../component/Menu";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const Home = (props) => {
  const description =
    "Agatsa is a Leading Solution Provider For Rapid Assessment of Cardiac Health for both Doctors and Non Doctors using its AI and IOT driven Platform called “SanketLife”";
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
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}
        >
          AGATSA
        </Text>
        <Text
          style={[
            // styles.mainHeader,
            {
              fontSize: 15,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}
        >
          future is near..... {props.channelName}
        </Text>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/im.webp")}
        />

        <Text style={styles.paraStyle}>{description} </Text>
      </View>
      <View>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // marginTop: 30,
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    // height: "100%",
    marginTop: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 30,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily: "Nunito_600SemiBold",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 40,
    paddingBottom: 50,
    lineHeight: 26,
    fontFamily: "JosefinSans_400Regular",
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});

export default Home;
