import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

export const Login = createAsyncThunk("/log-in", async (data) => {
  try {
    const res = await axios.post("api/auth/login", data);
    console.log(res.data);
    toast.promise(res, {
      loading: "Wait! authentication in progress ...",
      success: (data) => {
        return data?.data?.message;
      },

      error: "Failed to Log in",
    });

    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
