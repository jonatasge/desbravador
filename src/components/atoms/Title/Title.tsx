export type TitleProps = JSX.IntrinsicElements["h1"];

export const Title = (props: TitleProps) => {
  return <h1 className="Title" {...props} />;
};
