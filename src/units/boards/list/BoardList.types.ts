import { MouseEvent } from "react";
import { IQuery } from "../../../commons/type/generated/types";

export interface IBoardListProps {
  data?: Pick<IQuery, "fetchBoards">
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void
}