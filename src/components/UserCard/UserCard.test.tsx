import { screen } from "@testing-library/react";
import UserCard from "./UserCard";
import userMock from "../../mocks/userMocks/userMock";
import customRender from "../../mocks/utils/testUtils";

describe("Given a UserCard component", () => {
  describe("When it receives a user Jeff Winger", () => {
    test("Then it will show 'Jeff Winger' on a heading", () => {
      const userNameTitle = "Jeff Winger";

      customRender(<UserCard user={userMock} />);

      const title = screen.getByRole("heading", { name: userNameTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it will show the alternative text 'Close up of Jeff Winger' on an image", () => {
      const userImageText = "Close up of Jeff Winger";

      customRender(<UserCard user={userMock} />);

      const image = screen.getByRole("img", { name: userImageText });

      expect(image).toBeInTheDocument();
    });
  });
});
