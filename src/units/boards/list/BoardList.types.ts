import { MouseEvent } from "react";
import { IQuery } from "../../../commons/type/generated/types";

export interface IBoardListProps {
  data?: Pick<IQuery, "fetchBoards">;
  keyword: string;
  count?: number;
  refetch: (variables: { page: number }) => void;
  refetchBoardsCount: (variables: { search: string }) => void;
  onChangeKeyword: (value: string) => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void;
}
