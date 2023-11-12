import { renderHook } from "@testing-library/react";
import usersMock from "../../mocks/userMocks/userMocks";
import useUserApi from "./useUserApi";
import userMock from "../../mocks/userMocks/userMock";

describe("Given a useUsersApi custom hook", () => {
  describe("When it fetches the information of users Jeff Winger and Britta Perry ", () => {
    test("Then it should show the information of Jeff Winger and Britta Perry", async () => {
      const users = usersMock;

      const {
        result: {
          current: { getUsersApi },
        },
      } = renderHook(() => useUserApi());

      const searchedUsers = await getUsersApi();

      expect(searchedUsers).toStrictEqual(users);
    });
  });

  describe("When it fetches the information of users Jeff Winger and Britta Perry and request to alter the friend status of Jeff", () => {
    test("Then it should return the information of Jeff with the friend status changed", async () => {
      const {
        result: {
          current: { changeUserFriendStatus },
        },
      } = renderHook(() => useUserApi());

      const {
        data: { isFriend: fetchedUserFriendStatus },
      } = await changeUserFriendStatus(userMock);

      expect(fetchedUserFriendStatus).toBe(false);
    });
  });
});
