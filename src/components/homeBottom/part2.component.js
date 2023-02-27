import React from "react";
import { Text, View, FlatList } from "react-native";
import tw from "twrnc";
import { StudentCard } from "./studentCard.component";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-XL-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];
export const Part2Bottom = () => {
  return (
    <View style={tw`bg-white`}>
      <FlatList
        style={tw`mt--5`}
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
        )}
        renderItem={({ item }) => <StudentCard textTmp={item.title} />}
      />
    </View>
  );
};
