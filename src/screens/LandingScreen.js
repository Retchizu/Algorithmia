import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { loadFont, SVGLogo } from "../../loadFontSVG";
import { SvgXml } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LandingScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFont().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#2CC5EF", "#147691", "#061215"]}
        style={styles.container}
      >
        <Text style={styles.title}>Algorithmia</Text>
        <SvgXml xml={SVGLogo} style={styles.logo} />
        <Text style={styles.second}>
          Discover your inner analytics with {"\n"}Algorithmia
        </Text>
        <Text style={styles.third}>
          Knapsack, Selection Sorting, TSP, and String {"\n"} Matching - Your
          playground awaits!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.replace("TabToStack");
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signup}>
          <Text style={[styles.nonTouchable]}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.touchable}>
              Sign up here!
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("-4%"),
  },
  title: {
    fontFamily: "karma-bold",
    fontSize: hp("4.5%"),
    color: "#EBF7F9",
  },
  second: {
    fontFamily: "karma-semibold",
    color: "#EBF7F9",
    fontSize: hp("2.5%"),
    textAlign: "center",
    marginHorizontal: wp("7%"),
    marginTop: hp("3%"),
    marginBottom: hp("2%"),
  },
  third: {
    fontFamily: "karma-regular",
    color: "#EBF7F9",
    fontSize: hp("1.9%"),
    textAlign: "center",
    marginHorizontal: wp("7%"),
  },
  logo: {
    margin: hp("2%"),
    height: "10%", 
    width: "20%", 
  },
  button: {
    backgroundColor: "#147691",
    paddingHorizontal: hp("5%"),
    paddingVertical: hp("2%"),
    borderRadius: 20,
    marginTop: hp("5%"),
  },
  buttonText: {
    color: "#E6F2F6",
    fontSize: hp("2.5%"),
    fontFamily: "karma-semibold",
    textAlign: "center",
  },
  signup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("8%"),
  },
  nonTouchable: {
    fontFamily: "karma-light",
    color: "#EBF7F9",
    fontSize: hp("1.8%"),
  },
  touchable: {
    fontFamily: "karma-light",
    color: "#6FD1EB",
    fontSize: hp("1.8%"),
  },
});

export default LandingScreen;
