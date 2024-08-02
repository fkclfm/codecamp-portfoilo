import SearchItemUI from "./Search.presenter";
import { debounce } from "lodash";
import { ISearchProps } from "./Search.types";
import { ChangeEvent } from "react";

export default function SearchItem(props: ISearchProps) {
  const getSearch = debounce((value) => {
    props.refetch({ search: value, page: 1 });
    props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getSearch(event.currentTarget.value);
  };
  return <SearchItemUI onChangeSearch={onChangeSearch} />;
}
