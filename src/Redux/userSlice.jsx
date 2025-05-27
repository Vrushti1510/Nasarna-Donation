// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isAuthenticated: false,
//   user: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;
// src/Redux/userSlice.jsx

// src/Redux/userSlice.jsx

// import { createSlice } from "@reduxjs/toolkit";


// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     currentUser: JSON.parse(localStorage.getItem("user")) || null, // ✅ initialize from localStorage if exists
//     isFetching: false,
//     error: false,
//   },
//   reducers: {
//     loginStart: (state) => {
//       state.isFetching = true;
//       state.error = false;
//     },
//     loginSuccess: (state, action) => {
//       state.isFetching = false;
//       state.currentUser = action.payload; // ✅ Save user data into Redux
//       console.log(action.payload)
//       localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ Save to localStorage too
//     },
//     loginFailure: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//     logout: (state) => {
//       state.currentUser = null;
//       state.isFetching = false;
//       state.error = false;
//       localStorage.removeItem("user"); // ✅ Clear localStorage
//     }
//   },
// });

// // Export actions
// export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

// // Export reducer
// export default userSlice.reducer;
// src/Redux/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage safely
const storedUser = localStorage.getItem("user");

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: storedUser ? JSON.parse(storedUser) : null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload.user; // ✅ only store user
      localStorage.setItem("user", JSON.stringify(action.payload.user)); // ✅ save only user
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
      localStorage.removeItem("user"); // ✅ clear user
    },
  },
});

// Export actions
export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

// Export reducer
export default userSlice.reducer;


