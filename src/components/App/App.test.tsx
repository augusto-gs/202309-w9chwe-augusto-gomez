import { screen } from "@testing-library/react";
import App from "./App";

import customRender from "../../mocks/utils/testUtils";

describe("Given an App component", () => {
  describe("When it is rendered on screen on the HomePage", () => {
    test("Then you should see a title 'Community Social Media' on a heading", () => {
      const expectedHomePageTitle = "Community Social Media";

      customRender(<App />);

      const homePageTitle = screen.getByRole("heading", {
        name: expectedHomePageTitle,
      });

      expect(homePageTitle).toBeInTheDocument();
    });
  });
});
