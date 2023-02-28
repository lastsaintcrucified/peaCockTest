import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TutionNavigator } from "../../navigation/tutionPay.navigation";

export const Collected = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState("tp1");
  return (
    <View style={[tw`p-4 h-80 my-2 bg-white flex-1`]}>
      <View style={tw`p-2 flex-row bg-white`}>
        <View style={tw`basis-1/2`}>
          <Text style={tw`font-semibold text-base `}>
            <Ionicons name="logo-usd" /> Total Fee Recievable
          </Text>
        </View>
        <View style={tw`bg-white basis-1/2`}>
          <Text style={tw`font-semibold text-base text-right`}>
            {" "}
            &#8377; 8329908
          </Text>
        </View>
      </View>
      <View style={tw` flex flex-row bg-white`}>
        <TouchableOpacity
          style={tw`w-1/2`}
          onPress={() => {
            navigation.navigate("TutionPayment1");
            setActive("tp1");
          }}
        >
          <Text
            style={[
              tw`pb-4 text-center text-slate-400 text-base font-medium border-b-2`,
              {
                borderBottomColor: active == "tp1" ? "#D78602" : "gray",
                color: active == "tp1" ? "#D78602" : "gray",
              },
            ]}
          >
            Tution Payment1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-1/2`}
          onPress={() => {
            navigation.navigate("TutionPayment2");
            setActive("tp2");
          }}
        >
          <Text
            style={[
              tw`pb-4 text-center  text-base font-medium border-b-2`,
              {
                borderBottomColor: active == "tp2" ? "#D78602" : "gray",
                color: active == "tp2" ? "#D78602" : "gray",
              },
            ]}
          >
            Tution Payment2
          </Text>
        </TouchableOpacity>
      </View>
      <TutionNavigator />
    </View>
  );
};
