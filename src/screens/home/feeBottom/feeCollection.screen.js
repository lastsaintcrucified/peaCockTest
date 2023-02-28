import React from "react";
import { Text, View, ScrollView } from "react-native";
import tw from "twrnc";
import { Collected } from "../../../components/feeBottom/collected.component";
import { TotalFee } from "../../../components/feeBottom/totalFee.component";

export const FeeCollection = () => {
  return (
    <ScrollView style={tw`p-4 my-2 bg-white flex-1`}>
      <View style={tw`mb-3 bg-white border-2 border-slate-300 rounded-md`}>
        <TotalFee />
      </View>
      <View style={tw`mb-2 bg-white border-2 border-slate-300 rounded-md`}>
        <Collected />
      </View>
    </ScrollView>
  );
};
