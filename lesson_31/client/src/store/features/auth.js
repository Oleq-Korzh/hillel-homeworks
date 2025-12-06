import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {
    name: "",
    role: "",
  },
  error: "",
  loaded: false,
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (cred, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cred),
      });

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.error);
      }

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const checkAuthAsync = createAsyncThunk(
  "auth/check",
  async (_, rejectWithValue) => {
    try {
      const res = await fetch("http://localhost:3000/login/check");
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload?.user;
      state.error = "";
      state.loaded = true;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.loaded = true;
    });

    builder.addCase(checkAuthAsync.fulfilled, (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload?.user;
      state.error = "";
      state.loaded = true;
    });

    builder.addCase(logoutAsync.fulfilled, (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload?.user;
      state.error = "";
      state.loaded = true;
    });
  },
});

export default authSlice.reducer;
