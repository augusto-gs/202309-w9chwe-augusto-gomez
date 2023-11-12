import usersMock from "../../../mocks/userMocks/userMocks";
import {
  UsersStructure,
  loadUsers,
  setFriendStatus,
  usersReducer,
} from "./userSlice";

describe("Given a usersReducer", () => {
  describe("When it receives users Jeff and Britta and an intention to add them to the store", () => {
    test("Then it should add Jeff and Britta to the store", () => {
      const previousState: UsersStructure = { users: [] };

      const actualUsersState = usersReducer(
        previousState,
        loadUsers(usersMock),
      );

      expect(actualUsersState.users).toStrictEqual(usersMock);
    });
  });

  describe("When it receives user Jeff and Britta and an intention to change the friend status of Jeff", () => {
    test("Then it should change Jeff friend status", () => {
      const previousState: UsersStructure = { users: usersMock };

      const actualUserState = usersReducer(
        previousState,
        setFriendStatus(usersMock[0].id),
      );

      expect(actualUserState.users[0].isFriend).toBe(false);
    });
  });
});
