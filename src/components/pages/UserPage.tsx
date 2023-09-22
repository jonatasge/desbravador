import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { UserTemplate } from "@/components/templates";
import { GetRepositories } from "@/core/domain/GetRepositories";
import { GetUser } from "@/core/domain/GetUser";
import { Repository } from "@/core/models/Repository";
import { User } from "@/core/models/User";

export type UserPageProps = {
  getUser: GetUser;
  getRepositories: GetRepositories;
};

export const UserPage = ({ getUser, getRepositories }: UserPageProps) => {
  const params = useParams();
  const [loadingUser, setLoadingUser] = useState(false);
  const [user, setUser] = useState<User>();
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [repos, setRepos] = useState<Repository[]>();

  const handleUser = async (username: string) => {
    setLoadingUser(() => true);
    const user = await getUser(username);
    setUser(() => user);
    setLoadingUser(() => false);
  };

  const handleRepos = async (username: string) => {
    setLoadingRepos(() => true);
    const repos = await getRepositories({ username });
    if (repos instanceof Array) {
      setRepos(() =>
        repos.sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1))
      );
    }
    setLoadingRepos(() => false);
  };

  useEffect(() => {
    if (params.username) {
      handleUser(params.username as string);
      handleRepos(params.username as string);
    }
  }, [params.username]);

  return (
    <UserTemplate
      loadingUser={loadingUser}
      user={{ ...user, username: params.username }}
      loadingRepositories={loadingRepos}
      repositories={repos}
    />
  );
};
