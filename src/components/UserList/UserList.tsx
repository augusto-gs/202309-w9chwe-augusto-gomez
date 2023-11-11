import { useEffect } from "react";
import users from "../../data/users";
import { loadUsers } from "../../store/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import UserCard from "../UserCard/UserCard";
import UserListStyled from "./UserListStyled";

const UserList = (): React.ReactElement => {
  const usersState = useAppSelector((state) => state.usersState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUsers(users));
  }, [dispatch]);

  return (
    <UserListStyled className="user-list ">
      {usersState.users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </UserListStyled>
  );
};

export default UserList;
