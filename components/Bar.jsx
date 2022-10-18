import React from "react";
import { Appbar, Avatar } from "react-native-paper";

const Bar = () => (
  <Appbar.Header
    style={{
      backgroundColor: "white",
      justifyContent: "space-between",
      paddingHorizontal: 15,
    }}
  >
    <Appbar.Action icon="menu" />
    <Avatar.Image size={24} source={require("../assets/bg.png")} />
  </Appbar.Header>
);

export default Bar;
