import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, TouchableOpacity } from "react-native";

import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TotalStudentScreen } from "../screens/home/homeBottom/totalStudents.screen";
import { StatusScreen } from "../screens/home/homeBottom/status.screen";

const HomeBottomStack = createNativeStackNavigator();

export const HomeBottomNavigator = () => {
  return (
    <HomeBottomStack.Navigator
      screenOptions={{
        animation: "slide_from_right", //<-- this is what will do the trick
        presentation: "card",
      }}
    >
      <HomeBottomStack.Screen
        name="TotalStudent"
        component={TotalStudentScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeBottomStack.Screen
        name="Status"
        component={StatusScreen}
        options={{ headerShown: false }}
      />
    </HomeBottomStack.Navigator>
  );
};
