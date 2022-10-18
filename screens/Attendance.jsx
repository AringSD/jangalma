import React from "react";
import { DataTable, Checkbox } from "react-native-paper";

import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import BottomNav from "../components/BottomNav";
import Tile from "../components/Tile";
import Button from "../components/Button";
import { Appbar, TextInput } from "react-native-paper";

export default function Attendance({ navigation }) {
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
      <Appbar.Content title="English 10 Science" />
    </Appbar.Header>
  );
  const AttendanceCheckBox = () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <View
        style={{
          borderColor: "lightgrey",
          borderWidth: 1,
        }}
      >
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
    );
  };
  const Table = () => (
    <DataTable style={{ paddingVertical: 30 }}>
      <DataTable.Header style={{ color: "black" }}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric> Present</DataTable.Title>
        <DataTable.Title numeric>Late</DataTable.Title>
        <DataTable.Title numeric>Absent</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row style={{ justifyContent: "center", alignItems: "center" }}>
        <DataTable.Cell>Sirreh Saho-Dampha</DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Sabel Betts</DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Jainaba Faal</DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Fatou Dibba</DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Fatoumatta Conteh</DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
        <DataTable.Cell numeric style={{ paddingTop: 6 }}>
          <AttendanceCheckBox />
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );

  return (
    <View>
      <View>
        <Bar />
      </View>
      <ScrollView>
        <View style={styles.pins}>
          <View
            style={{
              flex: 2,
              paddingVertical: 15,
              paddingHorizontal: 5,
              heigtt: 20,
            }}
          >
            <Tile title={"Term 1"} />
          </View>
          <View style={styles.pinRight}>
            <Tile title={"Date"} />
          </View>
        </View>
      </ScrollView>

      <ScrollView>
        <Table />
      </ScrollView>

      <View style={styles.buttons}>
        <View
          style={{
            display: "flex",
            flex: 1,
            marginHorizontal: 20,
            flexDirection: "row",
          }}
        >
          <Button
            title={"Cancel"}
            onPress={() => navigation.navigate("Subjects")}
            style={{ width: "35%" }}
            color="red"
          />
        </View>
        <View style={styles.doubleButton}>
          <Button
            title={"Edit"}
            onPress={() => navigation.navigate("Subjects")}
            style={{ width: "35%" }}
          />
          <Button
            title={"Save"}
            onPress={() => navigation.navigate("Subjects")}
            style={{ width: "35%" }}
            color={"green"}
          />
        </View>
      </View>
      <View>{/* <BottomNav /> */}</View>
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

  buttons: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  doubleButton: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
