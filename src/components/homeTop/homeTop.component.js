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

export const HomeTop = () => {
  const classList = [
    {
      label: "Class 1",
      value: "clas1",
    },
    {
      label: "Class 2",
      value: "clas2",
    },
    {
      label: "Class 3",
      value: "clas3",
    },
    {
      label: "Class 4",
      value: "clas4",
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
  console.log("heyyyy", cls);
  console.log("oeyyyy", dt);
  console.log("dgeyyyy", students);

  //   useEffect(() => {
  //     dispatch(getStd());
  //   }, []);
  return (
    <View style={tw`p-3  mb-5`}>
      <SelectItem list={classList} w={97} setData={handleClass} />
      <SelectDate setData={handleDate} />
    </View>
  );
};
