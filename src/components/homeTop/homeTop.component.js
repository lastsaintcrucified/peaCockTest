import React from "react";
import { Text, View } from "react-native";
import { SelectClass } from "./selectClass.component";
import { SelectDate } from "./selectDate.component";

import tw from "twrnc";

export const HomeTop = () => {
  return (
    <View style={tw`p-3 mb-5`}>
      <SelectClass />
      <SelectDate />
    </View>
  );
};
