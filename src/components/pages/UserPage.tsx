import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { UserTemplate } from "@/components/templates";
import { GetUser } from "@/core/domain/GetUser";
import { User } from "@/core/models/User";

export type UserPageProps = {
  getUser: GetUser;
};

export const UserPage = ({ getUser }: UserPageProps) => {
  const params = useParams();
  const [user, setUser] = useState<User>();

  const handleUser = async (username: string) => {
    const user = await getUser(username);
    setUser(() => user);
  };

  useEffect(() => {
    if (params.username) {
      handleUser(params.username as string);
    }
  }, [params.username]);

  return <UserTemplate user={{ ...user, username: params.username }} />;
};
