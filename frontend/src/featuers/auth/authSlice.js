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
export const register = createAsyncThunk(
  "Auth/Register",
  async (data, thunkAPI) => {
    try {
      let url = `/auth/register`;
      const res = await http.post(url, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logout = createAsyncThunk(
  "Auth/Logout",
  async (data, thunkAPI) => {
    try {
      let url = `/auth/logout`;
      const res = await http.post(url, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUserConnected: (state, { payload }) => {
      state.connected = true;
      state.token = payload.token;
      state.user = JSON.stringify(payload);
    },
    setUserDisconnected: (state) => {
      state.connected = false;
      state.token = "";
      state.user = "";
    },
  },
});

export const { setUserConnected, setUserDisconnected } = authSlice.actions;
export default authSlice.reducer;
