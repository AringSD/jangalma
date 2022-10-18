// import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View, ScrollView } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomNav from "../components/BottomNav";
import Tile from "../components/Tile";
import { Appbar, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Subjects({ navigation }) {
  const Bar = () => (
    <Appbar.Header
      style={{
        backgroundColor: "white",
        justifyContent: "space-between",
        paddingHorizontal: 15,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("DrawerContent")}>
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.navigate("DrawerContent")}
        />
      </TouchableOpacity>
      <Appbar.Content title="English 10 Science" />
    </Appbar.Header>
  );
  return (
    <View>
      <Bar />
      <ScrollView style={{ height: "90%", paddingHorizontal: 15 }}>
        <View style={styles.pins}>
          <View style={styles.pinLeft}>
            <Tile
              title={"Scores"}
              onPress={() => navigation.navigate("Scores")}
            />
          </View>
          <View style={styles.pinRight}>
            <Tile
              title={"Atendance"}
              onPress={() => navigation.navigate("Attendance")}
            />
          </View>
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  pins: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
  },

  pinLeft: {
    flex: 2,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },

  pinRight: {
    flex: 2,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },

  bottomNav: {},
});
