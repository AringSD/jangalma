import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import BottomNav from "../components/BottomNav";
import Tile from "../components/Tile";
import { Appbar } from "react-native-paper";

export default function Classes({ navigation }) {
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
    <>
      <View>
        <Bar />
        <ScrollView style={{ height: "90%", paddingHorizontal: 15 }}>
          <View style={styles.pins}>
            <View style={styles.pinLeft}>
              <Tile
                title={"Atendance"}
                onPress={() => navigation.navigate("Attendance")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomNav navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  pinLeft: {
    flex: 2,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  //   tile: {
  //     height: 10,
  //     borderRadius: 0,
  //   },

  bottomNav: {
    width: 100,
  },
  PinRightTile: {
    alignItems: "stretch",
  },
});
