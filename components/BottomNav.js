import * as React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BOTTOM_APPBAR_HEIGHT = 60;

const BottomNav = ({ navigation }) => {
  const { bottom } = useSafeAreaInsets();
  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action icon="home" onPress={navigateToHome} />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "lightgrey",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
  },
});

export default BottomNav;
