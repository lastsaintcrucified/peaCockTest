import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import tw from "twrnc";

export const TutionPayment1 = () => {
  return (
    <View
      style={[
        tw`bg-white flex-1`,
        {
          width: "100%",
          height: "100%",
        },
      ]}
    >
      <View style={[tw`m-auto`]}>
        <CircularProgress
          value={317}
          radius={80}
          duration={1000}
          inActiveStrokeColor={"#DE9E34"}
          activeStrokeColor={"#D78602"}
          activeStrokeWidth={30}
          inActiveStrokeWidth={30}
          maxValue={500}
          titleColor={"black"}
          titleStyle={{ fontWeight: "bold" }}
          valuePrefix={"\u20B9"}
          valueSuffix={"k"}
        />
      </View>
    </View>
  );
};
