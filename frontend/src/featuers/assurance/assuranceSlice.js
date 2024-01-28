import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  assurance: [],
  assurance: "",
};

export const getAssurances = createAsyncThunk(
  "Assurances/getAssurances",
  async (data, thunkAPI) => {
    try {
      let url = `/assurances`;
      const res = await http.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const createAssurances = createAsyncThunk(
  "Assurances/createAssurances",
  async (data, thunkAPI) => {
    try {
      let url = `/assurances`;
      const res = await http.post(url, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteAssurance = createAsyncThunk(
  "Assurance/deleteAssurance",
  async (id, thunkAPI) => {
    try {
      let url = `/assurances/${id}`;
      const res = await http.delete(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateAssurance = createAsyncThunk(
  "Assurance/updateAssurance",
  async (data, thunkAPI) => {
    try {
      let url = `/assurance`;
      const res = await http.post(url, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const assuranceSlice = createSlice({
  name: "AssuranceSlice",
  initialState,
  reducers: {
    setAuto: (state, { payload }) => {
      state.assurance = "assurance";
    },
  },
});

export const { setAssurance } = assuranceSlice.actions;
export default assuranceSlice.reducer;
