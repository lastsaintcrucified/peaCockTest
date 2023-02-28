import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import tw from "twrnc";
import { StudentCard } from "./studentCard.component";

const data = [
  {
    name: "John Doe",
    id: 1,
    admission_id: "233",
    roll: "44",
    father: "Alex Doe",
    image:
      "https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg",
  },
  {
    name: "John Doe",
    id: 2,
    admission_id: "233",
    roll: "44",
    father: "Alex Doe",
    image:
      "https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    admission_id: "233",
    roll: "44",
    father: "Alex Doe",
    image:
      "https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg",
  },
  {
    id: 4,
    name: "John Doe",
    admission_id: "233",
    roll: "44",
    father: "Alex Doe",
    image:
      "https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg",
  },
];
export const Part2Bottom = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white`}>
      <FlatList
        style={tw`mt--5`}
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Fee");
            }}
          >
            <StudentCard item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
