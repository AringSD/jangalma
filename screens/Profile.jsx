import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Appbar } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";

const Profile = ({ navigation }) => {
  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile");
  };
  const Bar = () => (
    <Appbar.Header
      style={{
        backgroundColor: "white",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        elevation: 0,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("DrawerContent")}>
        <Appbar.Action icon="menu" />
      </TouchableOpacity>
      <Appbar.Content title="My Profile" />
    </Appbar.Header>
  );

  return (
    <View>
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
          {/* Profile */}
          <View style={styles.avatar}>
            <Image
              style={styles.profileImage}
              source={require("../assets/bg.png")}
            />
          </View>

          <ScrollView style={{ paddingHorizontal: 20 }}>
            <View>
              <View style={{ flexDirection: "column", paddingBottom: 10 }}>
                <Text
                  style={{
                    paddingBottom: 10,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Name
                </Text>
                <View style={styles.input}>
                  <Text
                    style={{
                      paddingVertical: 10,
                      paddingLeft: 5,
                    }}
                  >
                    Lecket Jangalma
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", paddingBottom: 10 }}>
                <Text
                  style={{
                    paddingBottom: 10,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Date of Birth
                </Text>
                <View style={styles.input}>
                  <Text
                    style={{
                      paddingVertical: 10,
                      paddingLeft: 5,
                    }}
                  >
                    13/03/1990
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", paddingBottom: 10 }}>
                <Text
                  style={{
                    paddingBottom: 10,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Nationality
                </Text>
                <View style={styles.input}>
                  <Text
                    style={{
                      paddingVertical: 10,
                      paddingLeft: 5,
                    }}
                  >
                    Gambian
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "column", paddingBottom: 10 }}>
                <Text
                  style={{
                    paddingBottom: 10,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  School
                </Text>
                <View style={styles.input}>
                  <Text
                    style={{
                      paddingVertical: 10,
                      paddingLeft: 5,
                    }}
                  >
                    Marina International School
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.button}>
            <Button
              title={"Edit Password"}
              onPress={navigateToEditProfile}
              style={{ width: "100%", paddingHorizontal: 20 }}
            />
          </View>
          {/* <View>
            <BottomNav onPress={() => navigation.navigate("Home")} />
          </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },

  avatar: {
    alignItems: "center",
    paddingHorizontal: 15,
    paddingBottom: 25,
  },
  profileImage: {
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "white",
    width: 80,
    height: 80,
  },
  input: {
    borderColor: "lightgrey",
    backgroundColor: "lightgrey",
    borderWidth: 1,
    height: 40,
    fontSize: 15,
  },
  button: { paddingVertical: 22, alignItems: "center" },
});

export default Profile;
