import { IQuery } from "../../../commons/type/generated/types";
import { MouseEvent } from "react";

export interface IFetchBoardCommentsProps {
  data?: Pick<IQuery, "fetchBoardComments">
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void
}