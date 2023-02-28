import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { HomeTop } from "../../components/homeTop/homeTop.component";
import tw from "twrnc";
import { HomeBottomNavigator } from "../../navigation/homeBottom.navigation";
import { SelectItem } from "../../components/selectItem.component";

export const FeeScreen = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState("fc");
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
    <View style={tw`bg-white flex-1`}>
      <View style={tw`p-3 mb-5`}>
        <SelectItem list={genderList} />
      </View>
      <View style={tw`flex flex-row`}>
        <TouchableOpacity
          style={tw`w-1/3`}
          onPress={() => {
            navigation.navigate("FeeCollection");
            setActive("fc");
          }}
        >
          <Text
            style={[
              tw`pb-4 text-center text-slate-400 text-base font-medium border-b-2`,
              {
                borderBottomColor: active == "fc" ? "#D78602" : "gray",
                color: active == "fc" ? "#D78602" : "gray",
              },
            ]}
          >
            Fee Collection
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-1/3`}
          onPress={() => {
            navigation.navigate("FeeDue");
            setActive("fd");
          }}
        >
          <Text
            style={[
              tw`pb-4 text-center  text-base font-medium border-b-2`,
              {
                borderBottomColor: active == "fd" ? "#D78602" : "gray",
                color: active == "fd" ? "#D78602" : "gray",
              },
            ]}
          >
            Fee Due
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-1/3`}
          onPress={() => {
            navigation.navigate("FeeConcess");
            setActive("fcs");
          }}
        >
          <Text
            style={[
              tw`pb-4 text-center  text-base font-medium border-b-2`,
              {
                borderBottomColor: active == "fcs" ? "#D78602" : "gray",
                color: active == "fcs" ? "#D78602" : "gray",
              },
            ]}
          >
            Fee Concess
          </Text>
        </TouchableOpacity>
      </View>
      <HomeBottomNavigator />
    </View>
  );
};
