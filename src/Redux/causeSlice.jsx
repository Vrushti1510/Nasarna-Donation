// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk for fetching causes
// export const fetchCauses = createAsyncThunk(
//   'causes/fetchCauses',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('https://nasarna-backend.onrender.com/api/causes');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const causesSlice = createSlice({
//   name: 'causes',
//   initialState: {
//     causes: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCauses.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCauses.fulfilled, (state, action) => {
//         state.loading = false;
//         state.causes = action.payload;
//       })
//       .addCase(fetchCauses.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default causesSlice.reducer;


// causeSlice.jsx
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getCauses, createCause, updateCause, deleteCause } from "../api/apiCalls";

// // Thunks
// export const fetchCauses = createAsyncThunk("cause/fetchCauses", async () => {
//   const response = await getCauses();
//   return response.data;
// });

// export const addCause = createAsyncThunk("cause/addCause", async (causeData) => {
//   const response = await createCause(causeData);
//   return response.data;
// });

// export const editCause = createAsyncThunk("cause/editCause", async ({ id, updatedData }) => {
//   const response = await updateCause(id, updatedData);
//   return response.data;
// });

// export const removeCause = createAsyncThunk("cause/removeCause", async (id) => {
//   await deleteCause(id);
//   return id;
// });

// // Slice
// const causeSlice = createSlice({
//   name: "cause",
//   initialState: {
//     causes: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch Causes
//       .addCase(fetchCauses.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCauses.fulfilled, (state, action) => {
//         state.loading = false;
//         state.causes = action.payload;
//       })
//       .addCase(fetchCauses.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // Add Cause
//       .addCase(addCause.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(addCause.fulfilled, (state, action) => {
//         state.loading = false;
//         state.causes.push(action.payload);
//       })
//       .addCase(addCause.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // Edit Cause
//       .addCase(editCause.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(editCause.fulfilled, (state, action) => {
//         state.loading = false;
//         const index = state.causes.findIndex((cause) => cause._id === action.payload._id);
//         if (index !== -1) {
//           state.causes[index] = action.payload;
//         }
//       })
//       .addCase(editCause.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       // Remove Cause
//       .addCase(removeCause.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(removeCause.fulfilled, (state, action) => {
//         state.loading = false;
//         state.causes = state.causes.filter((cause) => cause._id !== action.payload);
//       })
//       .addCase(removeCause.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default causeSlice.reducer;


// src/redux/slices/causeSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  causes: [], // Each cause will have: { id, name, goal, raised }
};

// Create the slice
const causeSlice = createSlice({
  name: 'cause',
  initialState,
  reducers: {
    addCause: (state, action) => {
      const newCause = {
        id: Date.now(), // simple unique ID
        name: action.payload.name,
        goal: action.payload.goal,
        raised: action.payload.raised,
      };
      state.causes.push(newCause);
    },
    updateRaisedAmount: (state, action) => {
      const { id, amount } = action.payload;
      const cause = state.causes.find((c) => c.id === id);
      if (cause) {
        cause.raised += amount;
      }
    },
    deleteCause: (state, action) => {
      const id = action.payload;
      state.causes = state.causes.filter((c) => c.id !== id);
    },
    resetCauses: (state) => {
      state.causes = [];
    }
  },
});

// Export actions
export const { addCause, updateRaisedAmount, deleteCause, resetCauses } = causeSlice.actions;

// Export reducer
export default causeSlice.reducer;

