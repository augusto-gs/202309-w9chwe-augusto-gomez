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

    setFriendStatus: (
      currentState: UsersStructure,
      action: PayloadAction<number>,
    ): UsersStructure => ({
      ...currentState,
      users: currentState.users.map((user) => ({
        ...user,
        isFriend: user.id === action.payload ? !user.isFriend : user.isFriend,
      })),
    }),

    addNewUser: (
      currentState: UsersStructure,
      action: PayloadAction<Users>,
    ) => ({ ...currentState, users: [...currentState.users, action.payload] }),
  },
});

export const { loadUsers, setFriendStatus, addNewUser } = userSlice.actions;

export const usersReducer = userSlice.reducer;
