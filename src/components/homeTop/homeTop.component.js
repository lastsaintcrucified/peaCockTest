import React from "react";
import { Text, View } from "react-native";
import { SelectItem } from "../selectItem.component";
import { SelectDate } from "./selectDate.component";

import tw from "twrnc";

export const HomeTop = () => {
  const genderList = [
    {
      label: "Class 1",
      value: "clas1",
    },
    {
      label: "Class 2",
      value: "clas2",
    },
    {
      label: "Class 3",
      value: "clas3",
    },
    {
      label: "Class 4",
      value: "clas4",
    },
  ];
  return (
    <View style={tw`p-3 mb-5`}>
      <SelectItem list={genderList} />
      <SelectDate />
    </View>
  );
};
