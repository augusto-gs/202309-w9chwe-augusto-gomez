import { screen } from "@testing-library/react";
import AddUserPage from "./AddUserPage";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import customRender from "../../mocks/utils/testUtils";

describe("Given an AddUserPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Add your own user to the page' title on a heading", () => {
      const titleText = "Add your own user to the page";

      customRender(
        <ThemeProvider theme={mainTheme}>
          <AddUserPage />
        </ThemeProvider>,
      );

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });
  });
});
