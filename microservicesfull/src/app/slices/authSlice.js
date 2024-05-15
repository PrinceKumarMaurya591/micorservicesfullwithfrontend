// // authSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     token: null,
//   },
//   reducers: {
//     setToken: (state, action) => {
//       state.token = action.payload;
//       console.log("Token stored in Redux state:", action.payload);
//     },
//   },
// });

// export const { setToken } = authSlice.actions;

// export default authSlice.reducer;








// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
