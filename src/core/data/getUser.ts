import { GetUser } from "@/core/domain/GetUser";

export const getUser: GetUser = async (username: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${username}`);
  return await response.json();
};
