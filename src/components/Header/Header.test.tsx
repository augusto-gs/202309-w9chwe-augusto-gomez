import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show the title 'Community Social Media' on a heading", () => {
      const headerTitle = "Community Social Media";

      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const title = screen.getByRole("heading", { name: headerTitle });

      expect(title).toBeInTheDocument;
    });
  });
});
