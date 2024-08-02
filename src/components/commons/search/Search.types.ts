import { ChangeEvent } from "react";

export interface ISearchProps {
  refetch: (variables: { page: number; search: string }) => void;
  refetchBoardsCount: (variables: { search: string }) => void;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
