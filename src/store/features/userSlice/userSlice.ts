import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Users } from "./types";

interface UsersStructure {
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
    ) => {
      ({ ...currentState, users: action.payload });
    },
  },
});

export const { loadUsers } = userSlice.actions;
