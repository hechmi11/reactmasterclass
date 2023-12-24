import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  connected: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token") ?? "",
  user: localStorage.getItem("user") ?? "",
  loading: false,
  error: "",
};

export const login = createAsyncThunk("Auth/login", async (data, thunkAPI) => {
  try {
    let url = `/auth/login`;
    const res = await http.post(url, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUserConnected: (state) => {
      state.connected = true;
    },
    setUserDisconnected: (state) => {
      state.connected = false;
    },
  },
});

export const { setUserConnected, setUserDisconnected } = authSlice.actions;
export default authSlice.reducer;
