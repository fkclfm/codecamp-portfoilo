import { MouseEvent, ChangeEvent } from "react";

export interface IBoardCommentProps {
  onClickNewComment : (event: MouseEvent<HTMLButtonElement>) => void
  onWriterCheck :  (event: ChangeEvent<HTMLInputElement>) => void
  onPwCheck : (event: ChangeEvent<HTMLInputElement>) => void
  onContentCheck : (event: ChangeEvent<HTMLInputElement>) => void
}