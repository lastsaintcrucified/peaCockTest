import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

export const StudentCard = ({ textTmp }) => {
  return (
    <View style={tw`h-40 flex-row`}>
      <View style={tw`basis-1/6`}>
        <Text>{textTmp}</Text>
      </View>
      <View style={tw`basis-4/6`}>
        <Text>{textTmp}</Text>
      </View>
      <View style={tw`basis-1/6`}>
        <Text>{textTmp}</Text>
      </View>
    </View>
  );
};
