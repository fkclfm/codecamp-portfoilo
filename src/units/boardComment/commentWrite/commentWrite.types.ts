import { MouseEvent, ChangeEvent } from "react";

<<<<<<< HEAD
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
=======
export interface IBoardCommentProps {
  rating: number;
  writer: string;
  password: string;
  contents: string;
  onClickNewComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onWriterCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onPwCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onContentCheck: (event: ChangeEvent<HTMLInputElement>) => void;
>>>>>>> laptop-work
  handleChange: (value: number) => void;
}
