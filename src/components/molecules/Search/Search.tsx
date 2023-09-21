import {
  Button,
  ButtonProps,
  Input,
  InputProps,
  Label,
} from "@/components/atoms";
import { getFormValues } from "@/utils/form";
import { FormEvent } from "react";

export type SearchProps = Omit<JSX.IntrinsicElements["form"], "onSubmit"> & {
  button?: ButtonProps;
  input?: InputProps;
  label?: JSX.IntrinsicElements["label"];
  onSubmit?: (search: string) => void;
};

export const Search = ({
  className,
  label,
  input,
  button,
  onSubmit,
  ...props
}: SearchProps) => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = getFormValues(e.target as HTMLFormElement);
    onSubmit?.(values.search as string);
  };

  return (
    <form
      className={`Search ${className || ""}`}
      onSubmit={handleOnSubmit}
      {...props}
    >
      <Label htmlFor="search" {...label} />
      <div className="container">
        <Input id="search" name="search" required={true} {...input} />
        <Button type="submit" {...button}>
          Pesquisar
        </Button>
      </div>
    </form>
  );
};
