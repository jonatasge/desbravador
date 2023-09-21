import {
  Avatar,
  AvatarProps,
  Subtitle,
  SubtitleProps,
  Title,
  TitleProps,
} from "@/components/atoms";

export type OverviewAsideProps = Omit<JSX.IntrinsicElements["div"], "title"> & {
  avatar?: AvatarProps;
  subtitle?: SubtitleProps;
  title?: TitleProps;
};

export const OverviewAside = ({
  avatar,
  children,
  className,
  subtitle,
  title,
  ...props
}: OverviewAsideProps) => {
  return (
    <div className={`OverviewAside ${className || ""}`} {...props}>
      <Avatar {...avatar} />
      <Title {...title} />
      <Subtitle {...subtitle} />
      
      {children}
    </div>
  );
};
