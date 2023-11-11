import { useEffect } from "react";
import { loadUsers } from "../../store/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import UserCard from "../UserCard/UserCard";
import UserListStyled from "./UserListStyled";
import useUserApi from "../../hooks/useUserApi/useUserApi";

const UserList = (): React.ReactElement => {
  const { getUsersApi } = useUserApi();

  const usersState = useAppSelector((state) => state.usersState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const users = await getUsersApi();
      dispatch(await loadUsers(users));
    })();
  }, [dispatch, getUsersApi]);

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
