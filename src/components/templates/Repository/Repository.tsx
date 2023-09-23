import { useEffect, useState } from "react";
import { MdCode, MdStarOutline } from "react-icons/md";
import { PiEye, PiGitFork } from "react-icons/pi";
import * as SI from "react-icons/si";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import {
  Avatar,
  Breadcrumb,
  Card,
  Chip,
  Container,
  Link,
  Skeleton,
  Text,
  Title,
} from "@/components/atoms";
import { Data } from "@/components/molecules";
import { Repository } from "@/core/models/Repository";
import { formatNumber, textCapitalize } from "@/utils/data";

export type RepositoryTemplateProps = {
  loading?: boolean;
  repo?: Partial<
    Omit<Repository, "owner"> & {
      owner: Partial<Repository["owner"] & { username: string }>;
    }
  >;
};

export const RepositoryTemplate = ({
  loading = true,
  repo,
}: RepositoryTemplateProps) => {
  const navigate = useNavigate();
  const [Icon, setIcon] = useState(() => MdCode);

  const handleIcon = (name: string) => {
    const iconName = textCapitalize(
      name.replace(/\+/g, "plus").replace(/#/g, "sharp")
    );
    return SI[`Si${iconName}` as never];
  };

  useEffect(() => {
    if (repo?.language) {
      const Icon = handleIcon(repo.language);
      if (Icon) setIcon(() => Icon);
    }
  }, [repo]);

  return (
    <Container className="RepositoryTemplate p-2">
      <header className="flex items-center">
        <div className="logo-wrap">
          {loading ? (
            <>
              <Skeleton type="Avatar" />
              <Skeleton type="Title" />
            </>
          ) : (
            <>
              <Avatar src={repo?.owner?.avatar_url} />

              <Breadcrumb>
                <Link onClick={() => navigate(-1)}>
                  {repo?.owner?.username}
                </Link>
                <Title>{repo?.name}</Title>
              </Breadcrumb>
            </>
          )}
        </div>
      </header>

      <hr className="-mx-2" />

      <section className="flex items-start justify-center gap-4 mt-3">
        <div className="repo-details">
          <Card>
            {loading ? (
              <>
                <Skeleton type="Text" style={{ width: 100 }} />
                <Skeleton type="Text" />
                <Skeleton type="Text" style={{ width: "50%" }} />
              </>
            ) : (
              <Data label="Descrição:">{repo?.description}</Data>
            )}

            {loading ? (
              <>
                <Skeleton type="Text" style={{ width: 60 }} className="mt-3" />
                <Skeleton type="Text" style={{ width: "50%" }} />
              </>
            ) : (
              <Data label="Link:" className="mt-3">
                <Link href={repo?.html_url} target="_blank">
                  {repo?.html_url}
                </Link>
              </Data>
            )}
          </Card>

          {repo?.readme && (
            <Card className="mt-3">
              <Link href={`${repo.html_url}#readme`} target="_blank">README.md</Link>
              <hr className="-mx-2 mt-2" />

              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                children={repo.readme}
                className="markdown-body p-2"
              />
            </Card>
          )}
        </div>

        <aside className="repo-data">
          {loading ? (
            <>
              <Skeleton type="Chip" style={{ width: 120 }} />
              <Skeleton type="Chip" style={{ width: 120 }} className="mt-1" />
              <Skeleton type="Chip" style={{ width: 120 }} className="mt-1" />

              <hr className="my-2" />

              <div className="flex items-center gap-2 mt-1">
                <Skeleton type="Block" style={{ height: 40, width: 40 }} />
                <div>
                  <Skeleton type="Text" style={{ height: 10, width: 100 }} />
                  <Skeleton type="Text" style={{ height: 10, width: 100 }} />
                </div>
              </div>
            </>
          ) : (
            <>
              <Chip className="inline-flex items-center gap-0.5">
                <PiEye /> Watch:
                <span>{formatNumber(repo?.subscribers_count || 0)}</span>
              </Chip>
              <br />

              <Chip className="inline-flex items-center gap-0.5 mt-1">
                <PiGitFork /> Fork:
                <span>{formatNumber(repo?.forks_count || 0)}</span>
              </Chip>
              <br />

              <Chip className="inline-flex items-center gap-0.5 mt-1">
                <MdStarOutline /> Star:
                <span>{formatNumber(repo?.stargazers_count || 0)}</span>
              </Chip>

              {repo?.language && (
                <>
                  <hr className="my-2" />

                  <div className="flex items-center gap-2 mt-1">
                    <Icon className="Icon" />
                    <Data label="Linguagem:">{repo?.language}</Data>
                  </div>
                </>
              )}
            </>
          )}
        </aside>
      </section>
    </Container>
  );
};