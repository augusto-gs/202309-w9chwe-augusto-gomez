import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Users } from "./types";

export interface UsersStructure {
  users: Users[];
}

const initialUsersState: UsersStructure = { users: [] };

export const userSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    loadUsers: (
      currentState: UsersStructure,
      action: PayloadAction<Users[]>,
    ): UsersStructure => ({ ...currentState, users: action.payload }),
  },
});

export const { loadUsers } = userSlice.actions;

export const usersReducer = userSlice.reducer;
