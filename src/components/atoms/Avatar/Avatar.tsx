export type AvatarProps = Omit<JSX.IntrinsicElements["img"], 'height' | 'width'>;

export const Avatar = ({
  alt = "Avatar",
  className,
  ...props
}: AvatarProps) => {
  return <img alt={alt} className={`Avatar ${className || ""}`} {...props} />;
};
