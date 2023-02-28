import React from "react";
import { Text, View, Image } from "react-native";
import tw from "twrnc";

export const StudentCard = ({ item }) => {
  return (
    <View style={tw`p-2 h-40 flex-row`}>
      <View style={tw`basis-1/6`}>
        <Image src={item.image} style={tw`m-2 h-12 w-12 rounded-full`} />
      </View>
      <View style={tw`basis-4/6`}>
        <Text style={tw`font-semibold text-base leading-6`}>{item.name}</Text>
        <Text style={tw`font-semibold text-sm text-slate-400 leading-6`}>
          Admission id:
          <Text style={tw`font-semibold text-black`}>{item.admission_id}</Text>
        </Text>
        <Text style={tw`font-semibold text-sm text-slate-400 leading-6`}>
          Roll no: <Text style={tw`font-bold text-black`}>{item.roll}</Text>
        </Text>
        <Text style={tw`font-semibold text-sm text-slate-400 leading-6`}>
          Father's name:
          <Text style={tw`font-semibold text-black`}>{item.father}</Text>
        </Text>
      </View>
      <View style={tw`basis-1/6 justify-start`}>
        <View style={tw`m-2 h-3 w-3 bg-red-600 rounded-full`}></View>
        <Text style={tw`text-left`}>Absent</Text>
      </View>
    </View>
  );
};
