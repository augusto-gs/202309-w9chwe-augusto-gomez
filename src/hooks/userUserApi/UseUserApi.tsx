import axios from "axios";
import { useCallback } from "react";
import { Users } from "../../store/features/userSlice/types";

const useUserApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getUsersApi = useCallback(async () => {
    const { data: users } = await axios.get<Users[]>("/items");
    return users;
  }, []);

  return { getUsersApi };
};

export default useUserApi;
