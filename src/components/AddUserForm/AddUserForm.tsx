import { useState } from "react";
import { Users } from "../../store/features/userSlice/types";
import Button from "../Button/Button";
import AddUserFormStyled from "./AddUserFormStyled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { addNewUser } from "../../store/features/userSlice/userSlice";

const AddUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const emptyUser: Users = {
    name: "",
    surname: "",
    imageUrl: "",
    age: 0,
    occupation: "",
    sex: "",
    isFriend: false,
    id: 0,
  };

  const [newUser, setNewUser] = useState(emptyUser);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser(() => ({
      ...newUser,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    dispatch(addNewUser(newUser));

    navigate("/");
  };

  return (
    <AddUserFormStyled className="form" onSubmit={onFormSubmit}>
      <label htmlFor="name" className="form__label">
        Name{" "}
        <input
          type="text"
          className="form__control"
          id="name"
          onChange={onChangeData}
          required
        />
      </label>
      <label htmlFor="surname" className="form__label">
        Surname
        <input
          type="text"
          className="form__control"
          id="surname"
          onChange={onChangeData}
          required
        />
      </label>
      <label htmlFor="age" className="form__label">
        Age{" "}
        <input
          type="number"
          className="form__control"
          id="age"
          onChange={onChangeData}
          required
        />
      </label>
      <label htmlFor="sex" className="form__label">
        Sex
        <input
          type="text"
          className="form__control"
          id="sex"
          onChange={onChangeData}
          required
        />
      </label>
      <label htmlFor="occupation" className="form__label">
        Occupation
        <input
          type="text"
          className="form__control"
          id="occupation"
          onChange={onChangeData}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="form__label">
        Image URL
        <input
          type="text"
          className="form__control"
          id="imageUrl"
          onChange={onChangeData}
          required
        />
      </label>
      <label htmlFor="isFriend" className="form__label">
        Are they your friend?
        <input
          type="checkbox"
          className="form__control"
          id="isFriend"
          onChange={onChangeData}
          required
        />
      </label>
      <Button actionOnClick={() => {}} text="Add to list" type="submit" />
    </AddUserFormStyled>
  );
};

export default AddUserForm;
