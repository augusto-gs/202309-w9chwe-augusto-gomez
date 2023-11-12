import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import AddUserPage from "../../pages/AddUserPage/AddUserPage";

const App = () => (
  <>
    <Header />
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-user" element={<AddUserPage />} />
      </Routes>
    </main>
  </>
);

export default App;
