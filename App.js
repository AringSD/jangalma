import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Attendance from "./screens/Attendance";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Login";
import DrawerContent from "./screens/DrawerContent";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import Subjects from "./screens/Subjects";
import Classes from "./screens/Classes";
import Scores from "./screens/Scores";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRoute="LandingPage">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen name="Attendance" component={Attendance} /> */}
          <Stack.Screen
            name="Classes"
            component={Classes}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DrawerContent"
            component={DrawerContent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Scores"
            component={Scores}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Subjects"
            component={Subjects}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Attendance"
            component={Attendance}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    //   alignItems: "center",
    //   justifyContent: "center",
  },
});
