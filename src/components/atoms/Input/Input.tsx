export type InputProps = JSX.IntrinsicElements["input"];

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`Input transition transition-shadow shadow hover:shadow focus:shadow ${
        className || ""
      }`}
      {...props}
    />
  );
};
