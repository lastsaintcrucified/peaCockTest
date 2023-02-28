import React from "react";
import { Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import tw from "twrnc";

export const ProgressBarComp = ({ feeName, feeValue }) => {
  return (
    <View style={tw`px-4 py-2 mt-3`}>
      <ProgressBar progress={feeValue / 100} color="#D78602" />
      <View style={tw`px-2 mt-3 flex-row justify-between`}>
        <Text>{feeName}</Text>
        <Text style={tw`text-right`}>{`${feeValue}%`}</Text>
      </View>
    </View>
  );
};
