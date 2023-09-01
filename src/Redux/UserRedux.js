import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {token:'null'},
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
      state.error = false;
      console.log(action.payload);
    },
    loginFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
    remove: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, remove } =
  userSlice.actions;

export default userSlice.reducer;
