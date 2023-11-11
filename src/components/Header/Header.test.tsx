import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show the title 'Community Social Media' on a heading", () => {
      const headerTitle = "Community Social Media";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const title = screen.getByRole("heading", { name: headerTitle });

      expect(title).toBeInTheDocument;
    });
  });
});
