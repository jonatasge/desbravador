import { ReactNode, useEffect, useState } from "react";

export type BreadcrumbProps = JSX.IntrinsicElements["div"];

export const Breadcrumb = ({
  children,
  className,
  ...props
}: BreadcrumbProps) => {
  const [crumbs, setCrumbs] = useState<string[]>([]);

  useEffect(() => {
    const crumbs: unknown[] = [];

    (children as ReactNode[])?.forEach((child, i) => {
      if (i > 0) crumbs.push(<span className="slash">/</span>);
      crumbs.push(child);
    });

    setCrumbs(() => crumbs as string[]);
  }, [children]);

  return (
    <div className={`Breadcrumb ${className || ""}`} {...props}>
      {...crumbs}
    </div>
  );
};
