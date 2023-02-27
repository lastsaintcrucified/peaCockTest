import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import { Part1Bottom } from "../../../components/homeBottom/part1.component";
import { Part2Bottom } from "../../../components/homeBottom/part2.component";

export const TotalStudentScreen = () => {
  return (
    <View style={tw`bg-white flex-1`}>
      <Part1Bottom />
      <Part2Bottom />
    </View>
  );
};
