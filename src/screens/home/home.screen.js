import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { HomeTop } from "../../components/homeTop/homeTop.component";
import tw from "twrnc";
import { HomeBottomNavigator } from "../../navigation/homeBottom.navigation";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState("");

  return (
    <View style={tw`bg-white flex-1`}>
      <HomeTop />
      <View style={tw`flex flex-row`}>
        <TouchableOpacity
          style={tw`w-1/2`}
          onPress={() => {
            navigation.navigate("TotalStudent");
            setActive("tst");
          }}
        >
          <Text
            style={[
              tw`pb-4 text-center text-slate-400 text-base font-medium border-b-2`,
              {
                borderBottomColor: active == "tst" ? "#D78602" : "gray",
                color: active == "tst" ? "#D78602" : "gray",
              },
            ]}
          >
            Total Students
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-1/2`}
          onPress={() => {
            navigation.navigate("Status");
            setActive("st");
          }}
        >
          <Text
            style={[
              tw`pb-4 text-center  text-base font-medium border-b-2`,
              {
                borderBottomColor: active == "st" ? "#D78602" : "gray",
                color: active == "st" ? "#D78602" : "gray",
              },
            ]}
          >
            Status
          </Text>
        </TouchableOpacity>
      </View>
      <HomeBottomNavigator />
    </View>
  );
};
