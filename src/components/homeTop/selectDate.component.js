import React, { useState, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { TextInput } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";

export const SelectDate = () => {
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params) => {
      console.log(params.date);
      setOpen(false);
      setDate(params.date.toLocaleDateString("en-US"));
    },
    [setOpen, setDate]
  );
  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <TextInput
          mode="outlined"
          label="Select Date"
          disabled
          left={<TextInput.Icon icon="calendar-month-outline" />}
          value={date}
        />
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </TouchableOpacity>
    </View>
  );
};
