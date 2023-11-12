import AddUserFormStyled from "./AddUserFormStyled";

const AddUserForm = () => (
  <AddUserFormStyled className="form">
    <label htmlFor="name" className="form__label">
      Name <input type="text" className="form__control" id="name" required />
    </label>
    <label htmlFor="surname" className="form__label">
      Surname
      <input type="text" className="form__control" id="surname" required />
    </label>
    <label htmlFor="age" className="form__label">
      Age <input type="number" className="form__control" id="age" required />
    </label>
    <label htmlFor="sex" className="form__label">
      Sex
      <input type="text" className="form__control" id="sex" required />
    </label>
    <label htmlFor="occupation" className="form__label">
      Occupation
      <input type="text" className="form__control" id="occupation" required />
    </label>
    <label htmlFor="isFriend" className="form__label">
      Are they your friend?
      <input type="checkbox" className="form__control" id="isFriend" required />
    </label>
  </AddUserFormStyled>
);

export default AddUserForm;
