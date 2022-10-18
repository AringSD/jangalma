import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Appbar } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Button from "../components/Button";

const EditProfile = ({ navigation }) => {
  const navigateBackToProfile = () => {
    navigation.navigate("Profile");
  };

  const Bar = () => (
    <Appbar.Header
      style={{
        backgroundColor: "white",
        justifyContent: "space-between",
        elevation: 0,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Appbar.BackAction />
      </TouchableOpacity>
      <Appbar.Content title="Edit Password" />
    </Appbar.Header>
  );

  return (
    <View
      style={{
        paddingHorizontal: 15,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <StatusBar style="default" />

      <Bar />

      <View style={{ paddingVertical: 20 }}>
        <ScrollView style={{ height: "100%" }}>
          <View style={styles.form}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
              <View style={{ flexDirection: "column", paddingVertical: 5 }}>
                <Text style={{ paddingVertical: 10, fontSize: 15 }}>
                  Old Password
                </Text>
                <TextInput secureTextEntry={true} style={styles.input} />
              </View>
              <View style={{ flexDirection: "column", paddingVertical: 5 }}>
                <Text style={{ paddingVertical: 10, fontSize: 15 }}>
                  New Password
                </Text>
                <TextInput secureTextEntry={true} style={styles.input} />
              </View>
              <View style={{ flexDirection: "column", paddingVertical: 5 }}>
                <Text style={{ paddingVertical: 10, fontSize: 15 }}>
                  Re-enter Password
                </Text>
                <TextInput secureTextEntry={true} style={styles.input} />
              </View>
            </View>
          </View>
          <View style={styles.button}>
            <Button
              title={"Save Password"}
              onPress={navigateBackToProfile}
              style={{ width: "90%" }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "lightgrey",
    backgroundColor: "lightgrey",
    borderWidth: 1,
    height: 40,
    fontSize: 15,
  },
  button: { alignItems: "center" },
});

export default EditProfile;
