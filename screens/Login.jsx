import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import Button from "../components/Button";

const Login = ({ navigation }) => {
  const navigateBackToLandingPage = () => {
    navigation.navigate("LandingPage");
  };
  const toHome = () => navigation.navigate("Home");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const res = fetch('url',{
    //   email:email,password:password
    // })
    console.debug(email, password);
    toHome();
  };
  return (
    <View
      style={{
        // flex: 1,
        paddingTop: 55,
        paddingHorizontal: 25,

        backgroundColor: "white",
        height: "100%",
      }}
    >
      <StatusBar style="default" />
      <TouchableOpacity onPress={navigateBackToLandingPage}>
        <View>
          <Ionicons name="arrow-back" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={require("../assets/logo.png")} style={styles.Image} />
      </View>
      <ScrollView>
        <View style={styles.contents}>
          <Text style={{ fontWeight: "bold" }}>Log into your acoount </Text>
          <View>
            <Text
              style={{
                paddingBottom: 10,
                fontWeight: "bold",
                paddingVertical: 20,
                fontSize: 18,
              }}
            >
              Email
            </Text>
            <TextInput
              style={{
                borderColor: "#ddd",
                backgroundColor: "#ddd",
                borderWidth: 1,
                borderRadius: 1,
                height: 40,
              }}
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View>
            <Text
              placeholder="Enter email"
              label="Password"
              style={{
                paddingBottom: 10,
                fontWeight: "bold",
                paddingVertical: 20,
                fontSize: 18,
              }}
            >
              Password
            </Text>
            <TextInput
              label="Password"
              secureTextEntry={true}
              placeholder="Enter password"
              value={password}
              onChangeText={(password) => setPassword(password)}
              style={{
                borderColor: "#ddd",
                backgroundColor: "#ddd",
                borderWidth: 1,
                borderRadius: 1,
                height: 40,
              }}
            />
          </View>
          <View style={styles.remember}>
            <Ionicons name="checkbox" size={24} color="blue" />
            <Text style={{ paddingLeft: 10 }}>Remember me</Text>
          </View>
          {/* <View style={{ paddingVertical: 10, alignItems: "center" }}>
            <Button
              title="Login"
              onPress={() => {
                navigation.navigate("Home");
              }}
              style={styles.button}
            />
          </View> */}
          {/* <Button title={"Login"} onPress={() => navigation.navigate("Home")} /> */}
          <Button title={"Login"} onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Register: {
    // flex: 1,
    backgroundColor: "white",
  },
  contents: {
    flexGrow: 1,
    paddingVertical: 20,
  },

  imageContainer: {
    paddingVertical: 20,
    // justifyContent: "center",
    alignItems: "center",
  },

  Image: {
    justifyContent: "center",
    width: 180,
    height: 80,
  },
  TextInput: {
    paddingVertical: 20,
    borderColor: "#ddd",
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderRadius: 1,
    height: 40,
    paddingLeft: 5,
    fontSize: 15,
  },
  remember: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  button: {
    borderRadius: 100,
    // alignItems: "center",
  },
});

export default Login;
