import React, { useState } from "react";
import { Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import tw from "twrnc";
import { selectStudent } from "../../redux/slices/stdSlice";
import { useSelector } from "react-redux";

export const Part1Bottom = () => {
  const [number, setNumber] = useState("27");
  const students = useSelector(selectStudent);

  return (
    <View style={tw`p-3 mb-2 flex-row`}>
      <Text style={tw`text-base basis-3/4`}>
        List Of Students{" "}
        <Text style={{ color: "#D78602" }}>({students.length})</Text>
      </Text>
      <View style={tw`p-2 flex-row  basis-1/4 justify-around`}>
        <Ionicons
          style={tw``}
          name="funnel-outline"
          size={18}
          color="#D78602"
        />
        <Ionicons name="pencil-outline" size={18} color="#D78602" />
      </View>
    </View>
  );
};
