import React from "react";
import { Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";
import { ProgressBarComp } from "./progressBar.component";

export const TotalFee = () => {
  return (
    <View style={tw`justify-evenly`}>
      <View style={tw`p-2 flex-row`}>
        <View style={tw`basis-1/2`}>
          <Text style={tw`font-semibold text-base `}>
            <Ionicons name="logo-usd" /> Total Fee Recievable
          </Text>
        </View>
        <View style={tw`basis-1/2`}>
          <Text style={tw`font-semibold text-base text-right`}>
            {" "}
            &#8377; 8329908
          </Text>
        </View>
      </View>
      <ProgressBarComp feeName="Tution Fees" feeValue={99.5} />
      <ProgressBarComp feeName="Transport Fees" feeValue={2.5} />
      <ProgressBarComp feeName="Fee Fine" feeValue={0.0} />
    </View>
  );
};
