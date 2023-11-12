import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation-bar__home {
    color: ${({ theme }) => theme.colors.light};
  }

  .active {
    font-weight: bold;
  }
`;

export default NavigationStyled;
