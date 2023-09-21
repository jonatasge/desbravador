export type AvatarProps = JSX.IntrinsicElements["img"];

export const Avatar = ({
  alt = "avatar",
  className,
  height = 100,
  width = 100,
  ...props
}: AvatarProps) => {
  return (
    <img
      alt={alt}
      className={`Avatar ${className || ""}`}
      height={height}
      width={width}
      {...props}
    />
  );
};
