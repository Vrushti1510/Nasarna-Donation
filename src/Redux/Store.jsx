// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';
// import causeReducer from './causeSlice'; // 👉 import new causeSlice

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     cause: causeReducer, // 👉 add causeReducer here
//   },
// });

// export default store;


// store.jsx
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import causeReducer from './causeSlice'; // Import your causeSlice

const store = configureStore({
  reducer: {
    user: userReducer,
    cause: causeReducer, // Add cause reducer here
  },
});

export default store;

