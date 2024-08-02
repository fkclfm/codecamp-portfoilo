import { ChangeEvent } from "react";

export interface ILoginUIProps {
  onClickLogin: () => void;
  onClickMoveRegister: () => void;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}
