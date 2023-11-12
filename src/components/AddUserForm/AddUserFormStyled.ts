import styled from "styled-components";

const AddUserFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 33px;
  padding: 17px;

  .form {
    &__label {
      display: flex;
      justify-content: space-between;
      font-family: ${({ theme }) => theme.typography.main};
    }

    &__control {
      background-color: ${({ theme }) => theme.colors.primary};
      accent-color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.typography.secondary};
      width: 56%;
      border-radius: 33px;
      max-width: 150px;
    }
  }

  #isFriend {
  }
`;

export default AddUserFormStyled;
