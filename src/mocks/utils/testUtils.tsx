import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../../store/features/userSlice/userSlice";
import usersMock from "../userMocks/userMocks";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { usersState: usersReducer },
    preloadedState: { usersState: { users: usersMock } },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Provider store={mockStore}>{children}</Provider>
      </BrowserRouter>
    </ThemeProvider>,
  );
};

export default customRender;
