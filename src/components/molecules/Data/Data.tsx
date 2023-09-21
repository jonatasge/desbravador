import { Label } from "@/components/atoms";

export type DataProps = JSX.IntrinsicElements["p"] & {
  label?: string | number;
};

export const Data = ({ children, className, label, ...props }: DataProps) => {
  return (
    <p className={`Data ${className || ""}`} {...props}>
      <Label>{label}</Label> {children}
    </p>
  );
};
