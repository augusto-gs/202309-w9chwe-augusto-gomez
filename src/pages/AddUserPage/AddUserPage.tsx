import AddUserForm from "../../components/AddUserForm/AddUserForm";
import AddUserPageStyled from "./AddUserPageStyled";

const AddUserPage = () => (
  <AddUserPageStyled className="form-container">
    <h2 className="page-title">Add your own user to the page</h2>
    <AddUserForm />
  </AddUserPageStyled>
);

export default AddUserPage;
