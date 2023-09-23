import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export type HeaderProps = JSX.IntrinsicElements["header"];

export const Header = ({ children, className, ...props }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={`Header ${className || ""}`} {...props}>
      <button
        className="transition transition-bg-color cursor-pointer rounded inline-flex items-center justify-center"
        onClick={() => navigate(-1)}
        type="button"
      >
        <MdArrowBack />
      </button>

      {children}
    </header>
  );
};
