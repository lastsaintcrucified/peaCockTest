import React, { useState } from "react";
import { Text, View } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { TextInput } from "react-native-paper";
import tw from "twrnc";

export const SelectItem = ({ list }) => {
  const [gender, setGender] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

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
        list={list}
        inputProps={{
          left: <TextInput.Icon icon="magnify" />,
        }}
      />
    </View>
  );
};
