import { MouseEvent } from "react";

export interface IPaginationProps {
  refetch: (variables: { page: number }) => void;
  count?: number;
}

export interface IPaginationUIProps {
  startPage: number;
  lastPage: number;
  searchPage: number;
  currentPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrev: (event: MouseEvent<HTMLImageElement>) => void;
  onClickNext: (event: MouseEvent<HTMLImageElement>) => void;
}
