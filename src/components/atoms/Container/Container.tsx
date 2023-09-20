import "./Container.css";

export type ContainerProps = JSX.IntrinsicElements["div"];

export const Container = (props: ContainerProps) => {
  return <div className="Container" {...props} />;
};
