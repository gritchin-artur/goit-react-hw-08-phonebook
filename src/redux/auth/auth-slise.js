import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder

      .addCase(authOperations.logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
          state.isFetchingCurrentUser = false;
        }
      )
      .addCase(authOperations.fetchCurrentUser.rejected, (state) => {
        state.isFetchingCurrentUser = false;
      })

      .addMatcher(
        isAnyOf(
          authOperations.register.fulfilled,
          authOperations.logIn.fulfilled
        ),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      );
  },
});

export default authSlice.reducer;
