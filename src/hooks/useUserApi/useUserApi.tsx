import axios from "axios";
import { useCallback } from "react";
import { Users } from "../../store/features/userSlice/types";

const useUserApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getUsersApi = useCallback(async () => {
    const { data: users } = await axios.get<Users[]>("/items");
    return users;
  }, []);

  const changeUserFriendStatus = useCallback(async (user: Users) => {
    const changedUser = axios.patch<Users>(`/items/${user.id}`, {
      ...user,
      isFriend: !user.isFriend,
    });

    return changedUser;
  }, []);

  return { getUsersApi, changeUserFriendStatus };
};

export default useUserApi;
