import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, TouchableOpacity } from "react-native";
import { FeeScreen } from "../screens/home/fee.screen";
import { useNavigation } from "@react-navigation/native";

import { HomeScreen } from "../screens/home/home.screen";

import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FeeFilter } from "../screens/home/feeFilter.screen";

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator
      screenOptions={{
        animation: "slide_from_bottom",
      }}
    >
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
        options={{
          headerShown: true,
          headerTitle: () => (
            <Text style={tw`text-lg font-normal`}>Fee Report</Text>
          ),
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={tw`mr-5`}
              onPress={() => {
                navigation.navigate("Home1");
              }}
            >
              <Ionicons name="arrow-back-outline" size={16} color="#D78602" />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="FeeFilter"
        component={FeeFilter}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Text style={tw`text-lg font-normal`}>Fee Report</Text>
          ),
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={tw`mr-5`}
              onPress={() => {
                navigation.navigate("Fee");
              }}
            >
              <Ionicons name="arrow-back-outline" size={16} color="#D78602" />
            </TouchableOpacity>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
