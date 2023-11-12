import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  const mockAction = vi.fn();
  const text = "Make";

  describe("when it receives a text 'Make' ", () => {
    test("Then it should show a Make text on a button on screen", () => {
      render(<Button actionOnClick={mockAction} text={text} type="button" />);

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When ir receives a function and one click from the user", () => {
    test("Then it should be call the function received one time", async () => {
      render(<Button actionOnClick={mockAction} text={text} type="button" />);

      const button = screen.getByRole("button", { name: text });

      await userEvent.click(button);

      expect(mockAction).toBeCalledTimes(1);
    });
  });
});
