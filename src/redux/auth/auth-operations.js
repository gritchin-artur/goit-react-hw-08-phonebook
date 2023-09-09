import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log("register", register, { register });
  }
});

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log("logIn", logIn, { error });
  }
});

const logOut = createAsyncThunk("auth/logout", async (credentials) => {
  try {
    const { data } = await axios.post("/users/logout", credentials);
    token.unset();
    return data;
  } catch (error) {
    console.log("logOut", logOut, { error });
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return state;
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      console.log("fetchCurrentUser", fetchCurrentUser, { error });
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;