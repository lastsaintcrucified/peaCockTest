import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, TouchableOpacity } from "react-native";

import { FeeCollection } from "../screens/home/feeBottom/feeCollection.screen";
import { FeeDue } from "../screens/home/feeBottom/feeDue.screen";
import { FeeConcess } from "../screens/home/feeBottom/feeConcess.screen";

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
        component={FeeCollection}
        options={{
          headerShown: false,
        }}
      />
      <FeeBottomStack.Screen
        name="FeeDue"
        component={FeeDue}
        options={{ headerShown: false }}
      />
      <FeeBottomStack.Screen
        name="FeeConcess"
        component={FeeConcess}
        options={{ headerShown: false }}
      />
    </FeeBottomStack.Navigator>
  );
};
