import { renderHook } from "@testing-library/react";
import usersMock from "../../mocks/userMocks/userMocks";
import useUserApi from "./useUserApi";

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
});
