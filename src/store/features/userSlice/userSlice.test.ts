import usersMock from "../../../mocks/userMocks/userMocks";
import { UsersStructure, loadUsers, usersReducer } from "./userSlice";

describe("Given a usersRecucer", () => {
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
});
