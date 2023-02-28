import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, TouchableOpacity } from "react-native";
import { TutionPayment1 } from "../screens/home/feeBottom/TutionPayment1.screen";
import { TutionPayment2 } from "../screens/home/feeBottom/TutionPayment2.scree";

const TutionStack = createNativeStackNavigator();

export const TutionNavigator = () => {
  return (
    <TutionStack.Navigator
      screenOptions={{
        animation: "slide_from_right", //<-- this is what will do the trick
        presentation: "card",
      }}
    >
      <TutionStack.Screen
        name="TutionPayment1"
        component={TutionPayment1}
        options={{ headerShown: false }}
      />
      <TutionStack.Screen
        name="TutionPayment2"
        component={TutionPayment2}
        options={{ headerShown: false }}
      />
    </TutionStack.Navigator>
  );
};
