import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, TouchableOpacity } from "react-native";

import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TotalStudentScreen } from "../screens/home/homeBottom/totalStudents.screen";
import { StatusScreen } from "../screens/home/homeBottom/status.screen";

const FeeBottomStack = createNativeStackNavigator();

export const FeeBottomNavigator = () => {
  return (
    <FeeBottomStack.Navigator
      screenOptions={{
        animation: "slide_from_right", //<-- this is what will do the trick
        presentation: "card",
      }}
    >
      <FeeBottomStack.Screen
        name="FeeCollection"
        component={TotalStudentScreen}
        options={{
          headerShown: false,
        }}
      />
      <FeeBottomStack.Screen
        name="FeeDue"
        component={StatusScreen}
        options={{ headerShown: false }}
      />
      <FeeBottomStack.Screen
        name="FeeConcess"
        component={StatusScreen}
        options={{ headerShown: false }}
      />
    </FeeBottomStack.Navigator>
  );
};
