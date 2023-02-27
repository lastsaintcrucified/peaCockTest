import React, { useState } from "react";
import { Text, View } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { TextInput } from "react-native-paper";
import tw from "twrnc";

export const SelectClass = () => {
  const [gender, setGender] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
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
    <View style={tw`mb-5 `}>
      <DropDown
        label={"Select Class"}
        mode={"outlined"}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={gender}
        setValue={setGender}
        list={genderList}
        inputProps={{
          left: <TextInput.Icon icon="magnify" />,
        }}
      />
    </View>
  );
};
