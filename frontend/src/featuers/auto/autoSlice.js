import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  autos: [],
  auto: "",
};

export const getAutos = createAsyncThunk(
  "Auto/getAutos",
  async (_, thunkAPI) => {
    try {
      let url = `/autos`;
      const res = await http.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteAuto = createAsyncThunk(
  "Auto/getAutos",
  async (id, thunkAPI) => {
    try {
      let url = `/autos/${id}`;
      const res = await http.delete(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addAuto = createAsyncThunk(
  "Auto/createAuto",
  async (data, thunkAPI) => {
    try {
      let url = `/autos`;
      const res = await http.post(url, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const autoSlice = createSlice({
  name: "AutoSlice",
  initialState,
  reducers: {
    setAuto: (state, { payload }) => {
      state.auto = "auto";
    },
  },
});

export const { setAuto } = autoSlice.actions;
export default autoSlice.reducer;
