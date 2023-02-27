import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, TouchableOpacity } from "react-native";
import { FeeScreen } from "../screens/home/fee.screen";
import { HomeScreen } from "../screens/home/home.screen";

import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ animation: "slide_from_bottom" }}>
      <HomeStack.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Text style={tw`text-lg font-normal`}>Student Attendance</Text>
          ),
          headerLeft: () => (
            <TouchableOpacity style={tw`mr-5`}>
              <Ionicons name="arrow-back-outline" size={16} color="#D78602" />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="Fee"
        component={FeeScreen}
        options={{ headerShown: true }}
      />
    </HomeStack.Navigator>
  );
};
