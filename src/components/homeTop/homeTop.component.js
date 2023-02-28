import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import { SelectItem } from "../selectItem.component";
import { SelectDate } from "./selectDate.component";
import {
  selectCls,
  setCls,
  selectDt,
  setDt,
  selectStudent,
  getStd,
} from "../../redux/slices/stdSlice";
import tw from "twrnc";
import { getData, seedData } from "../../services/handleDataCrud";

export const HomeTop = () => {
  const classList = [
    {
      label: "All",
      value: "",
    },
    {
      label: "Class 4",
      value: "4th",
    },
    {
      label: "Class 5",
      value: "5th",
    },
    {
      label: "Class 6",
      value: "6th",
    },
    {
      label: "Class 7",
      value: "7th",
    },
    {
      label: "Class 8",
      value: "8th",
    },
  ];
  const dispatch = useDispatch();
  const cls = useSelector(selectCls);
  const dt = useSelector(selectDt);
  const students = useSelector(selectStudent);

  handleClass = (data) => {
    dispatch(setCls(data));
  };
  handleDate = (data) => {
    dispatch(setDt(data));
  };
  //   console.log("heyyyy", cls);
  //   console.log("oeyyyy", dt);
  //   console.log("yyyy", students);

  return (
    <View style={tw`p-3  mb-5`}>
      <SelectItem list={classList} w={97} setData={handleClass} />
      <SelectDate setData={handleDate} />
    </View>
  );
};
