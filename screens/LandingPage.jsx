import { StyleSheet, View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { ScrollView } from "react-native-gesture-handler";

function LandingPage({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <StatusBar style={{ backgroundColor: "white" }} />

      <View
        style={{
          paddingHorizontal: 15,
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={require("../assets/logo.png")} style={styles.Image} />
        </View>
        <ScrollView style={{ flexGrow: 1 }}>
          <View>
            <View style={{ paddingVertical: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Welcome to
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Jangalma App
              </Text>
            </View>

            <View style={styles.imgContainer}>
              <Image
                source={require("../assets/welcome.png")}
                style={styles.welcomeImage}
              />
            </View>
            <View style={{ paddingVertical: 20 }}>
              <Button
                title={"Get Started"}
                onPress={() => navigation.navigate("Login")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Register: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    paddingVertical: 20,
  },
  Image: {
    justifyContent: "flex-start",
    width: 130,
    height: 50,
  },
  imgContainer: {
    // alignItems: "center",
    paddingVertical: 20,
    // height: "200%",
    // flex: 3,
    // justifyContent: "flex-start",
    alignItems: "center",
  },
  welcomeImage: {
    width: 350,
    height: 400,
    justifyContent: "center",
  },
});

export default LandingPage;
