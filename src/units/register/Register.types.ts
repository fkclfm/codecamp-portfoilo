import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormStateReturn,
} from "react-hook-form";

export interface IUseFormData {
  email: string;
  password: string;
  name: string;
}

export interface IRegisterUIProps {
  onClickRegister: (data: IUseFormData) => void;
  register: UseFormRegister<IUseFormData>;
  handleSubmit: UseFormHandleSubmit<IUseFormData>;
  formState: UseFormStateReturn<IUseFormData>;
}
