import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigator } from "./home.navigation";
import { ChatScreen } from "../screens/chat/chat.screen";
import { ProfileScreen } from "../screens/profile/profile.screen";

import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Chat: "chatbox-ellipses",
  Profile: "person-circle-outline",
};

const ScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#17362E",
      height: 60,
      paddingBottom: 5,
      paddingTop: 5,
    },
  };
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={ScreenOptions}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
