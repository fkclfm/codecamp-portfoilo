import { MouseEvent, ChangeEvent } from "react";

export interface IBoardCommentProps {
  rating: number;
  writer: string;
  password: string;
  contents: string;
  onClickNewComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onWriterCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onPwCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onContentCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChange: (value: number) => void;
}
