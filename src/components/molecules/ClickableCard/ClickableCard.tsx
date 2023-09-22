import { Card, CardProps } from "@/components/atoms";

export type ClickableCardProps = CardProps;

export const ClickableCard = ({ className, ...props }: ClickableCardProps) => {
  return (
    <Card
      className={`ClickableCard transition hover:shadow ${className || ""}`}
      {...props}
    />
  );
};
