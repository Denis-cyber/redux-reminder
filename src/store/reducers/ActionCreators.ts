import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AppDispatch } from "../store";
import axios from "axios";
import { IUser } from "../../models/IUser";
// import { userSlice } from "./UserSlice";

// export const fetchUsers = () => async (dispath: AppDispatch) => {
//   try {
//     dispath(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
//     dispath(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       dispath(userSlice.actions.usersFetchingError(error.message));
//     }
//   }
// };

export const fetchUsers = createAsyncThunk("users/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/user2s");
    return response.data;
  } catch (e: unknown) {
    return thunkAPI.rejectWithValue("Sorry, something went wrong!");
  }
});
