import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Tile = ({ title, onPress, style, color, value }) => {
  return (
    <View
      style={{
        backgroundColor: "#ddd",
        borderRadius: 15,
        padding: 45,
        flex: 1,
        alignItems: "center",
        ...style,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{title}</Text>
        <Text style={{ marginTop: 8, fontWeight: "700" }}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tile;
