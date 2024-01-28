import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./auth/authSlice";
// import autoSlice from "./auto/autoSlice";
import autoSlice from "./auto/autoSlice";
import assuranceSlice from "./assurance/assuranceSlice";

export default configureStore({
  reducer: {
    // auth: authSlice,
    auto: autoSlice,
    assurance: assuranceSlice
  },
});
