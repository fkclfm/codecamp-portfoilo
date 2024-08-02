import { MouseEvent, ChangeEvent } from "react";

export interface ICommentWriteProps {
  el: any;
  isEdit: boolean;
  setIsEdit: any;
}

export interface ICommentWriteUIProps {
  inputs: {
    writer: string;
    password: string;
    contents: string;
    rating: number;
  };
  el: any;
  isEdit: boolean;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdateComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickNewComment: (event: MouseEvent<HTMLButtonElement>) => void;
  handleChange: (value: number) => void;
}
