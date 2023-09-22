import { GetRepositories } from "@/core/domain/GetRepositories";

export const getRepositories: GetRepositories = async ({
  order = "desc",
  per_page = 50,
  sort = "stars",
  username,
}) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/users/${username}/repos?sort=${sort}&order=${order}&per_page=${per_page}`
  );
  return await response.json();
};
