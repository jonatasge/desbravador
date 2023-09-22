import { Repository } from "@/core/models/repository";

export type GetRepositories = (props: {
  order?: "asc" | "desc";
  per_page?: number;
  sort?: "stars" | "forks" | "help-wanted-issues" | "updated";
  username: string;
}) => Promise<Repository[]>;
