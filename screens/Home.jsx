import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomNav from "../components/BottomNav";
import Tile from "../components/Tile";
import { Appbar, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
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
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Avatar.Image size={24} source={require("../assets/bg.png")} />
      </TouchableOpacity>
    </Appbar.Header>
  );
  const [totalLesson, setTotalLesson] = useState(0);
  const [failingStudents, setFailingStudents] = useState(0);
  const [unEnteredScores, setUnEnteredScores] = useState(0);
  return (
    <View>
      <StatusBar style="default" />
      <Bar />

      <ScrollView style={{ height: "90%", paddingHorizontal: 15 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingTop: 15,
          }}
        >
          Hi Lecket!
        </Text>
        <View style={styles.pins}>
          <View style={styles.pinLeft}>
            <Tile title={"Total Lessons"} number={"25"} value={totalLesson} />
          </View>
          <View style={styles.pinRight}>
            <Tile
              title={"Failing Stu"}
              style={styles.PinRightTile}
              value={failingStudents}
            />
          </View>
        </View>
        <View style={styles.pinBottom}>
          <Tile title={"Unentered Scores"} value={unEnteredScores} />
        </View>

        <View>
          <Text
            style={{
              paddingVertical: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Upcoming Lessons Today
          </Text>
          <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <Text style={{ fontWeight: "600", paddingBottom: 5 }}>
              Mathematics 10 Science
            </Text>
            <View style={styles.time}>
              <MaterialCommunityIcons
                name="clock-time-eight-outline"
                size={20}
                color="red"
              />
              <Text style={{ color: "red" }}>10:30pm</Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <Text style={{ fontWeight: "600", paddingBottom: 5 }}>
              Mathematics 10 Science
            </Text>
            <View style={styles.time}>
              <MaterialCommunityIcons
                name="clock-time-eight-outline"
                size={20}
                color="red"
              />
              <Text style={{ color: "red" }}>10:30pm</Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <Text style={{ fontWeight: "600", paddingBottom: 5 }}>
              Mathematics 10 Science
            </Text>
            <View style={styles.time}>
              <MaterialCommunityIcons
                name="clock-time-eight-outline"
                size={20}
                color="red"
              />
              <Text style={{ color: "red" }}>10:30pm</Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <Text style={{ fontWeight: "600", paddingBottom: 5 }}>
              Mathematics 10 Science
            </Text>
            <View style={styles.time}>
              <MaterialCommunityIcons
                name="clock-time-eight-outline"
                size={20}
                color="red"
              />
              <Text style={{ color: "red" }}>10:30pm</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

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
  pinBottom: {
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomNav: {
    width: 100,
  },
  PinRightTile: {
    alignItems: "stretch",
  },
});
