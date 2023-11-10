import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show the title 'Community Social Media' on a heading", () => {
      const headerTitle = "Community Social Media";

      render(<Header />);

      const title = screen.getByRole("heading", { name: headerTitle });

      expect(title).toBeInTheDocument;
    });
  });
});
