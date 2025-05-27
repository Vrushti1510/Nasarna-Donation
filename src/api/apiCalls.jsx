// // src/Redux/apiCalls.js

// import axios from "axios";
// import { loginStart, loginSuccess, loginFailure } from "./userSlice";
// // (Optional) Import causes-related Redux actions if you have them
// // import { causesStart, causesSuccess, causesFailure } from "./causeSlice";

// export const login = async (dispatch, user) => {
//   console.log(user);
//   dispatch(loginStart());
//   try {
//     const res = await axios.post("https://nasarna-backend.onrender.com/api/users/login", user);
//     dispatch(loginSuccess(res.data)); // Sending token + user to Redux
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };

// // New function for fetching causes
// export const fetchCauses = async (dispatch) => {
//   // dispatch(causesStart()); // Uncomment if you have a causesStart action
//   try {
//     const res = await axios.get("https://nasarna-backend.onrender.com/api/causes");
//     console.log(res.data); // Or dispatch it to Redux if needed
//     // dispatch(causesSuccess(res.data)); // Uncomment if you have a causesSuccess action
//   } catch (err) {
//     console.error(err);
//     // dispatch(causesFailure()); // Uncomment if you have a causesFailure action
//   }
// };


// import axios from "axios";
// import { loginStart, loginSuccess, loginFailure } from "./userSlice";
// import { getCausesStart, getCausesSuccess, getCausesFailure } from "./causeSlice"; // 👉 import cause actions

// // login API
// export const login = async (dispatch, user) => {
//   console.log(user);
//   dispatch(loginStart());
//   try {
//     const res = await axios.post("https://nasarna-backend.onrender.com/api/users/login", user);
//     dispatch(loginSuccess(res.data)); // Sending token + user to Redux
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };

// // fetchCauses API
// export const fetchCauses = async (dispatch) => {
//   dispatch(getCausesStart()); // 👉 start loading
//   try {
//     const res = await axios.get("https://nasarna-backend.onrender.com/api/causes");
//     dispatch(getCausesSuccess(res.data)); // 👉 pass causes to Redux
//   } catch (err) {
//     dispatch(getCausesFailure()); // 👉 handle error
//   }
// };

// import axios from "axios";
// import { loginStart, loginSuccess, loginFailure } from "./userSlice";

// // LOGIN FUNCTION
// export const login = async (dispatch, user) => {
//   console.log(user);
//   dispatch(loginStart());
//   try {
//     const res = await axios.post("https://nasarna-backend.onrender.com/api/users/login", user);
//     dispatch(loginSuccess(res.data)); // Sending token + user to Redux
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };

// // NEW FUNCTION TO GET ALL CAUSES
// export const getCauses = async () => {
//   try {
//     const res = await axios.get("https://nasarna-backend.onrender.com/api/causes");
//     return res.data; // Returning causes data
//   } catch (err) {
//     console.error("Failed to fetch causes", err);
//     return []; // Return empty array if error
//   }
// };


// import axios from "axios";
// import { loginStart, loginSuccess, loginFailure } from "../Redux/userSlice";


// // LOGIN FUNCTION
// export const login = async (dispatch, user) => {
//   console.log(user);
//   dispatch(loginStart());
//   try {
//     const res = await axios.post("https://nasarna-backend.onrender.com/api/users/login", user);
//     dispatch(loginSuccess(res.data)); // Sending token + user to Redux
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };

// // NEW FUNCTION TO GET ALL CAUSES
// export const getCauses = async () => {
//   try {
//     const res = await axios.get("https://nasarna-backend.onrender.com/api/causes");
//     return res; // Return full response
//   } catch (err) {
//     console.error("Failed to fetch causes", err);
//     throw err;
//   }
// };

// // CREATE A CAUSE
// export const createCause = async (causeData) => {
//   try {
//     const res = await axios.post("https://nasarna-backend.onrender.com/api/causes", causeData);
//     return res;
//   } catch (err) {
//     console.error("Failed to create cause", err);
//     throw err;
//   }
// };

// // UPDATE A CAUSE
// export const updateCause = async (id, updatedData) => {
//   try {
//     const res = await axios.put(`https://nasarna-backend.onrender.com/api/causes/${id}`, updatedData);
//     return res;
//   } catch (err) {
//     console.error("Failed to update cause", err);
//     throw err;
//   }
// };

// // DELETE A CAUSE
// export const deleteCause = async (id) => {
//   try {
//     const res = await axios.delete(`https://nasarna-backend.onrender.com/api/causes/${id}`);
//     return res;
//   } catch (err) {
//     console.error("Failed to delete cause", err);
//     throw err;
//   }
// };


import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "../Redux/userSlice";
import { addCause, updateRaisedAmount, deleteCause as deleteCauseAction, resetCauses } from "../Redux/causeSlice"; // 👈 import causeSlice actions

// LOGIN FUNCTION
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("https://nasarna-backend.onrender.com/api/users/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// GET ALL CAUSES
export const getCauses = async (dispatch) => {
  try {
    const res = await axios.get("https://nasarna-backend.onrender.com/api/causes");
    dispatch(resetCauses()); // first clear previous causes
    res.data.forEach((cause) => {
      dispatch(addCause(cause)); // add each cause
    });
    return res;
  } catch (err) {
    console.error("Failed to fetch causes", err);
    throw err;
  }
};

// CREATE A CAUSE
export const createCause = async (dispatch, causeData) => {
  try {
    const res = await axios.post("https://nasarna-backend.onrender.com/api/causes", causeData);
    dispatch(addCause(res.data)); // add the new cause
    return res;
  } catch (err) {
    console.error("Failed to create cause", err);
    throw err;
  }
};

// UPDATE A CAUSE (update raised amount)
export const updateCause = async (dispatch, id, updatedData) => {
  try {
    const res = await axios.put(`https://nasarna-backend.onrender.com/api/causes/${id}`, updatedData);
    dispatch(updateRaisedAmount({ id, amount: updatedData.raised })); // assuming 'raised' field comes
    return res;
  } catch (err) {
    console.error("Failed to update cause", err);
    throw err;
  }
};

// DELETE A CAUSE
export const deleteCause = async (dispatch, id) => {
  try {
    const res = await axios.delete(`https://nasarna-backend.onrender.com/api/causes/${id}`);
    dispatch(deleteCauseAction(id)); // delete from Redux
    return res;
  } catch (err) {
    console.error("Failed to delete cause", err);
    throw err;
  }
};

