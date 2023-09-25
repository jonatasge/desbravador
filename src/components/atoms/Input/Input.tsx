import { ReactNode } from "react";

export type InputProps = JSX.IntrinsicElements["input"] & {
  before?: ReactNode;
  after?: ReactNode;
};

export const Input = ({ after, before, className, ...props }: InputProps) => {
  return (
    <div className={`Input transition transition-bg-color ${className || ""}`}>
      {before}
      <input {...props} />
      {after}
    </div>
  );
};
