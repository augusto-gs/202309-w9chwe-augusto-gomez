import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App/App";
import customRender from "../../mocks/utils/testUtils";

describe("Given a Navigation component", () => {
  describe("When it receives a click on the Home navigation link", () => {
    test("Then it should show a title 'Community Social Media' on a heading", async () => {
      const user = userEvent.setup();
      const homePageTitle = "Community Social Media";

      customRender(<App />);

      const homeNavLink = screen.getByTitle("Home");
      const title = screen.getByRole("heading", { name: homePageTitle });

      user.click(homeNavLink);

      expect(title).toBeInTheDocument();
      expect(homeNavLink).toBeInTheDocument();
    });
  });
});
