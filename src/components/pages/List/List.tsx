import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "@/components/atoms";
import { ListRepositories } from "@/core/domain/list-repositories";
import { Repository } from "@/core/models/repository";

export type ListPageProps = {
  listRepositories: ListRepositories;
};

export const ListPage = ({ listRepositories }: ListPageProps) => {
  const params = useParams();
  const [data, setData] = useState<Repository[]>([]);

  const handleList = async (userName: string) => {
    const data = await listRepositories(userName);
    setData(() => data);
  };

  useEffect(() => {
    if (params.userName) handleList(params.userName as string);
  }, [params.userName]);

  return (
    <Container className="flex items-center justify-center h-screen text-center">
      {JSON.stringify(data)}
    </Container>
  );
};
