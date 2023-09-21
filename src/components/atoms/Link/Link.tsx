export type LinkProps = JSX.IntrinsicElements["a"];

export const Link = ({ className, ...props }: LinkProps) => {
  return <a className={`Link ${className || ''}`} {...props} />;
};
