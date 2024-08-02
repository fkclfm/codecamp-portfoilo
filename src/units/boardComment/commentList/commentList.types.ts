import { IQuery } from "../../../commons/type/generated/types";
<<<<<<< HEAD

export interface IFetchBoardCommentsProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export interface ICommentItemProps {
  el?: any;
=======
import { ChangeEvent, MouseEvent } from "react";

export interface IFetchBoardCommentsProps {
  isOpen: boolean;
  data?: Pick<IQuery, "fetchBoardComments">;
  handleModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onCommentPasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
>>>>>>> laptop-work
}
