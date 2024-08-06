import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormStateReturn,
} from "react-hook-form";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginUIProps {
  onClickLogin: (data: ILoginForm) => void;
  onClickMoveRegister: () => void;
  register: UseFormRegister<ILoginForm>;
  handleSubmit: UseFormHandleSubmit<ILoginForm>;
  formState: UseFormStateReturn<ILoginForm>;
}
