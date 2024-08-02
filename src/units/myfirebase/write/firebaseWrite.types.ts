import { ChangeEvent, MouseEvent } from "react";

export interface IFirebaseWriteProps {
  inputs: {
    writer: string;
    title: string;
    contents: string;
  };
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickWriteSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
}
