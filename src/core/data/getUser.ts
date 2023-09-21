import { GetUser } from "@/core/domain/GetUser";

export const getUser: GetUser = async (userName: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${userName}`);
  return await response.json();
};
