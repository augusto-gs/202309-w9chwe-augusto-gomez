import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When it is rendered on screen on the HomePage", () => {
    test("Then you should see a title 'Community Social Media' on a heading", () => {
      const expectedHomePageTitle = "Community Social Media";
      render(
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>,
      );

      const homePageTitle = screen.getByRole("heading", {
        name: expectedHomePageTitle,
      });

      expect(homePageTitle).toBeInTheDocument();
    });
  });
});
