import styled from "styled-components";

const UserCardStyled = styled.article`
  max-width: 350px;
  padding: 20px;

  .card {
    &__image {
      border-radius: 33px;
      margin-bottom: 10px;
    }

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      padding: 0 10px;
      font-family: ${({ theme }) => theme.typography.secondary};
    }

    &__name {
      align-self: center;
    }

    &__friend-background {
      background-color: ${({ theme }) => theme.colors.secondary};
      padding: 5px 0 15px;
      border-radius: 33px;
    }

    &__enemy-background {
      background-color: ${({ theme }) => theme.colors.friend};
      padding: 5px 0 15px;
      border-radius: 33px;
    }

    &__friend-text {
      display: block;
      font-size: 30px;
      text-align: center;
      font-family: ${({ theme }) => theme.typography.secondary};
      font-weight: bold;
    }

    &__enemy-text {
      display: block;
      font-size: 30px;
      text-align: center;
      font-family: ${({ theme }) => theme.typography.secondary};
      font-weight: bold;
    }
  }

  .friend {
  }
`;

export default UserCardStyled;
