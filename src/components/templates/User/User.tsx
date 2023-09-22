import { MdStarOutline } from "react-icons/md";
import { Link as Router } from "react-router-dom";

import { Card, Container, Link, Skeleton, Subtitle } from "@/components/atoms";
import { ClickableCard, Data } from "@/components/molecules";
import { Overview } from "@/components/orgnanisms";
import { Repository } from "@/core/models/Repository";
import { User } from "@/core/models/User";
import { formatNumber } from "@/utils/data";

export type UserTemplateProps = {
  loadingUser?: boolean;
  user?: Partial<User> & {
    username?: string;
  };
  loadingRepositories?: boolean;
  repositories?: Repository[];
};

export const UserTemplate = ({
  loadingUser,
  user,
  loadingRepositories,
  repositories,
}: UserTemplateProps) => {
  return (
    <Container className="UserTemplate p-2">
      <Overview.Root>
        <Overview.Aside
          loading={loadingUser}
          avatar={{ src: user?.avatar_url }}
          title={{ children: user?.username, className: "my-2" }}
        >
          {loadingUser ? (
            <>
              <Skeleton type="Text" />
              <Skeleton type="Text" />
            </>
          ) : (
            <>
              <Data label="E-mail:">{user?.email || "informação privada"}</Data>

              <div className="flex justify-center gap-1 my-1">
                <Data label={user?.followers}>seguidores</Data>
                <Data label={user?.following}>seguindo</Data>
              </div>
            </>
          )}
        </Overview.Aside>

        <Overview.Main className="text-left">
          {loadingUser ? (
            <>
              <Skeleton
                type="Subtitle"
                className="mb-1"
                style={{ width: 200 }}
              />
              <Skeleton type="Block" className="mb-4" style={{ height: 96 }} />
            </>
          ) : (
            user?.bio && (
              <>
                <Subtitle className="mb-1">Bio:</Subtitle>
                <Card className="mb-4">{user?.bio}</Card>
              </>
            )
          )}

          {loadingRepositories ? (
            <>
              <Skeleton
                type="Subtitle"
                className="mb-1"
                style={{ width: 200 }}
              />
              {[...Array(50).keys()].map((i) => (
                <Skeleton
                  key={i}
                  type="Block"
                  className="my-1"
                  style={{ height: 50 }}
                />
              ))}
            </>
          ) : (
            <>
              <Subtitle className="mb-1">50 repositórios mais populares:</Subtitle>
              {repositories?.length ? (
                repositories?.map((repository, i) => (
                  <Router key={i} to={`/${repository.full_name}`} className="RouterLink">
                    <ClickableCard className="my-1 flex items-center justify-between">
                      <Link as="h3">{repository.name}</Link>

                      <Data label={<MdStarOutline />}>
                        {formatNumber(repository.stargazers_count)}
                      </Data>
                    </ClickableCard>
                  </Router>
                ))
              ) : (
                <Card className="text-center">Sem repositórios.</Card>
              )}
            </>
          )}
        </Overview.Main>
      </Overview.Root>
    </Container>
  );
};
