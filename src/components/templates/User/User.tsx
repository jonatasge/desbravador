import { Card, Container, Subtitle } from "@/components/atoms";
import { Data } from "@/components/molecules";
import { Overview } from "@/components/orgnanisms";
import { User } from "@/core/models/User";

export type UserTemplateProps = {
  user?: Partial<User> & {
    username?: string;
  };
};

export const UserTemplate = ({ user }: UserTemplateProps) => {
  return (
    <Container className="UserTemplate p-2">
      <Overview.Root>
        <Overview.Aside
          avatar={{ src: user?.avatar_url }}
          title={{ children: user?.username, className: "my-2" }}
        >
          <Data label="E-mail:">{user?.email || "informação privada"}</Data>

          <div className="flex justify-center gap-1 my-1">
            <Data label={user?.followers}>seguidores</Data>
            <Data label={user?.following}>seguindo</Data>
          </div>
        </Overview.Aside>

        <Overview.Main className="text-left">
          {user?.bio && (
            <>
              <Subtitle className="mb-1">Bio:</Subtitle>
              <Card className="mb-4">{user?.bio}</Card>
            </>
          )}
        </Overview.Main>
      </Overview.Root>
    </Container>
  );
};
