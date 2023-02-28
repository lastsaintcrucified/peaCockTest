import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db, getData } from "../../services/handleDataCrud";
const initialState = {
  cls: "",
  dt: "",
  students: [],
  loading: false,
};
export const getStd = createAsyncThunk("getStd", async (thunkAPI) => {
  const res = await getData().then((data) => data);
  return res;
});

export const stdSlice = createSlice({
  name: "std",
  initialState,
  reducers: {
    setCls: (state, action) => {
      state.cls = action.payload;
    },
    setDt: (state, action) => {
      state.dt = action.payload;
    },
  },
  extraReducers: {
    [getStd.pending]: (state) => {
      state.loading = true;
    },
    [getStd.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.students = payload;
    },
    [getStd.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { setCls, setDt } = stdSlice.actions;

export const selectCls = (state) => state.std.cls;
export const selectDt = (state) => state.std.dt;
export const selectStudent = (state) => state.std.students;
export const selectLoading = (state) => state.std.loading;

export default stdSlice.reducer;
