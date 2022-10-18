import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import COLORS from "../colors/colors";
const Button = ({ title, onPress, style, color }) => {
  return (
    <View style={{ ...style }}>
      <TouchableOpacity
        style={{
          height: 50,
          // width: "100%",
          backgroundColor: color ?? COLORS.blue,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          // ...style,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: COLORS.white,
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
