import { ChangeEvent } from "react";

export interface IRegisterUIProps {
  onClickRegister: () => void;
  onChangeInputs: (e: ChangeEvent<HTMLInputElement>) => void;
}
