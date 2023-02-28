import React, { useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import tw from "twrnc";
import { StudentCard } from "./studentCard.component";
import {
  selectCls,
  selectStudent,
  selectLoading,
} from "../../redux/slices/stdSlice";

// const data = [
//   {
//     name: "John Doe",
//     id: 1,
//     admission_id: "233",
//     roll: "44",
//     father: "Alex Doe",
//     present: true,
//     image:
//       "https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg",
//   },
//   {
//     present: false,
//     name: "John Doe",
//     id: 2,
//     admission_id: "233",
//     roll: "44",
//     father: "Alex Doe",
//     image:
//       "https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg",
//   },
//   {
//     present: true,
//     id: 3,
//     name: "John Doe",
//     admission_id: "233",
//     roll: "44",
//     father: "Alex Doe",
//     image:
//       "https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg",
//   },
//   {
//     present: false,
//     id: 4,
//     name: "John Doe",
//     admission_id: "233",
//     roll: "44",
//     father: "Alex Doe",
//     image:
//       "https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg",
//   },
// ];
export const Part2Bottom = () => {
  const navigation = useNavigation();
  const cls = useSelector(selectCls);
  const students = useSelector(selectStudent);
  const loading = useSelector(selectLoading);

  tempStudents =
    cls == "" ? students : students.filter((itm) => itm.class == cls);

  return (
    <View style={tw`bg-white`}>
      {loading ? (
        <ActivityIndicator
          style={{ margin: "auto" }}
          animating={true}
          color="#D78602"
        />
      ) : (
        <FlatList
          style={tw`mt--5`}
          data={tempStudents}
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
      )}
    </View>
  );
};
