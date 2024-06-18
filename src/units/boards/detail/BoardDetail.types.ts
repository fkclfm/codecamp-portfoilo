import { IQuery } from "../../../commons/type/generated/types"
import { MouseEvent } from "react";

export interface IBoardDetailProps {
  data?: Pick<IQuery, "fetchBoard">
  onClickDelete : (event : MouseEvent<HTMLButtonElement>) => void
  onClickList :(event : MouseEvent<HTMLButtonElement>) => void
  onClickEdit : (event : MouseEvent<HTMLButtonElement>) => void
}