import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
const Icon = ({ iconName, text }) => {
  return (
    <View style={{ paddingVertical: 15, paddingStart: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome name={iconName} size={24} color="black" />
        <Text style={{ paddingLeft: 30, fontSize: 15, color: "black" }}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const DrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <List.Section>
          <List.Accordion
            title="Subjects"
            color="black"
            left={(props) => <List.Icon {...props} icon="book" color="black" />}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Subjects");
              }}
            >
              <List.Item title="English 10 Science" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Subjects");
              }}
            >
              <List.Item title="Maths 11 Arts" />
            </TouchableOpacity>
          </List.Accordion>
        </List.Section>
        <List.Section>
          <List.Accordion
            title="Classes"
            color="black"
            left={(props) => <List.Icon {...props} icon="book" color="black" />}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Classes");
              }}
            >
              <List.Item title="10 Science" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Classes");
              }}
            >
              <List.Item title="11 Arts" />
            </TouchableOpacity>
          </List.Accordion>
        </List.Section>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
          style={{
            borderTopWidth: 1,
            borderTopColor: "#F3F6F6",
            paddingLeft: 6,
          }}
        >
          <Icon iconName="user" text="Profile" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{
            borderTopWidth: 1,
            borderTopColor: "#F3F6F6",
            paddingLeft: 6,
          }}
        >
          <Icon iconName="sign-out" text="Logout" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  bottom: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  profile: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    paddingStart: 20,
    paddingVertical: 20,
  },
});

export default DrawerContent;
