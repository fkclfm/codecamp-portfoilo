import { IQuery } from "../../../commons/type/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export interface IFetchBoardCommentsProps {
  isOpen: boolean;
  data?: Pick<IQuery, "fetchBoardComments">;
  handleModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onCommentPasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
}
