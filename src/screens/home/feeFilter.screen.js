import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { List, Button } from "react-native-paper";

import tw from "twrnc";

export const FeeFilter = () => {
  const [isSelected, setSelection] = useState(true);
  return (
    <ScrollView style={tw`bg-white flex-1`}>
      <View style={tw`p-2 flex-row bg-white flex-1`}>
        <View style={tw`p-2 basis-1/2 border-r-2 border-slate-200`}>
          <List.Section>
            <TouchableOpacity>
              <List.Item title="Class and Sections" />
            </TouchableOpacity>
            <TouchableOpacity>
              <List.Item title="Installments" />
            </TouchableOpacity>
            <TouchableOpacity>
              <List.Item title="Routes and Stops" />
            </TouchableOpacity>
            <TouchableOpacity>
              <List.Item title="Components" />
            </TouchableOpacity>
            <TouchableOpacity>
              <List.Item title="Mode of Payment" />
            </TouchableOpacity>
          </List.Section>
        </View>
        <View style={tw`p-2 basis-1/2`}>
          <View style={tw`p-2 mt-3 flex-row`}>
            <Checkbox
              value={false}
              onValueChange={setSelection}
              color={isSelected ? "#D78602" : undefined}
            />
            <Text style={tw`pl-2`}>10thA</Text>
          </View>
          <View style={tw`p-2 mt-3 flex-row`}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? "#D78602" : undefined}
            />
            <Text style={tw`pl-2`}>10thB</Text>
          </View>
          <View style={tw`p-2 mt-3 flex-row`}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? "#D78602" : undefined}
            />
            <Text style={tw`pl-2`}>9thA</Text>
          </View>
          <View style={tw`p-2 mt-3 flex-row`}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? "#D78602" : undefined}
            />
            <Text style={tw`pl-2`}>9thA</Text>
          </View>
          <View style={tw`p-2 mt-3 flex-row`}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? "#D78602" : undefined}
            />
            <Text style={tw`pl-2`}>7thA</Text>
          </View>
          <View style={tw`p-2 mt-3 flex-row`}>
            <Checkbox
              value={false}
              onValueChange={setSelection}
              color={isSelected ? "#D78602" : undefined}
            />
            <Text style={tw`pl-2`}>7thA</Text>
          </View>
          <View style={tw`p-2 mt-3 flex-row`}>
            <Checkbox
              value={false}
              onValueChange={setSelection}
              color={isSelected ? "#D78602" : undefined}
            />
            <Text style={tw`pl-2`}>1stA</Text>
          </View>
          <View style={tw`p-2 mt-3 flex-row`}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? "#D78602" : undefined}
            />
            <Text style={tw`pl-2`}>1stB</Text>
          </View>
          <View style={tw`p-2 mt-3 flex-row`}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              color={isSelected ? "#D78602" : undefined}
            />
            <Text style={tw`pl-2`}>5thA</Text>
          </View>
        </View>
      </View>
      <View style={tw`px-5 py-3  ml-auto flex-row `}>
        <Button
          style={{ marginRight: 20 }}
          mode="outlined"
          onPress={() => console.log("Pressed")}
          textColor="black"
        >
          Cancel
        </Button>
        <Button
          buttonColor="#D78602"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Apply
        </Button>
      </View>
    </ScrollView>
  );
};
