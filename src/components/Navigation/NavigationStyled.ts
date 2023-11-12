import styled from "styled-components";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;

  .navigation-bar__home {
    color: ${({ theme }) => theme.colors.light};
  }

  .navigation-bar__add-user {
    color: ${({ theme }) => theme.colors.light};
  }

  .active {
    font-weight: bold;
  }
`;

export default NavigationStyled;
