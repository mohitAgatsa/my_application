import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import {
  useFonts,
  JosefinSans_700Bold,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const About = () => {
  let [fontsLoaded] = useFonts({
    JosefinSans_700Bold,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <View style={styles.aboutContainer}>
      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0028/8810/6033/files/Agatsa_Against_White_-_Copy_-_Copy_180x.jpg?v=1555856612",
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About Us </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Agatsa (www.agatsa.com) is a Leading Solution Provider For Rapid
          Assessment of Cardiac Health for both Non Doctors and Health Care
          providers using its AI and IOT driven Platform called “SanketLife”
          "SanketLife" Series of devices are an affordable , MADE IN INDIA,
          pocket-sized devices that can perform complete ECG tests, prepare
          reports and analyse and get a cardiologist’s review, all within 10
          minutes. Sanket Life is approved by DGCI, CDSCO and are clinically
          tested at Narayana Hrudayala and Shri Jayadeva Cardiac Institute,
          Bangalore where it showed 98% accuracy. More than 1 Lac Tests have
          been conducted in past 2 years with SanketLife. SanketLife Devices are
          sold Globally and is PATENT PROTECTED, with USFDA 510(K) In process
          More info at www.agatsa.com
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow Us on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/sanketlife_in/?hl=en")
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UC_DEStSXEIIRQCFfj2ObS1g"
            )
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/SanketLife/")
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://img.icons8.com/fluency/344/facebook-new.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 120,
    height: 140,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
    fontFamily: "JosefinSans_700Bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 8,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "JosefinSans_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
  },
  menuContainer: {
    marginTop: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
