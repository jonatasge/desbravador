export type ButtonProps = JSX.IntrinsicElements["button"];

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button className={`Button transition shadow hover:shadow ${className || ''}`} {...props} />;
};
