import { useAppSelector } from "../../store/hooks";

const UserList = (): React.ReactElement => {
  const usersState = useAppSelector((state) => state.usersState);

  return (
    <ul className="user-list">
      {usersState.users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
