import { useEffect } from "react";
import users from "../../data/users";
import { loadUsers } from "../../store/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const UserList = (): React.ReactElement => {
  const usersState = useAppSelector((state) => state.usersState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUsers(users));
  }, [dispatch]);

  return (
    <ul className="user-list">
      {usersState.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
