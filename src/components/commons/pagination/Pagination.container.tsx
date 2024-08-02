import { useState, MouseEvent } from "react";
import PaginationUI from "./Pagination.presenter";
import { IPaginationProps } from "./Pagination.types";
import { FETCH_BOARDS_COUNT } from "./Pagination.queries";
import {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/type/generated/types";
import { useQuery } from "@apollo/client";

export default function Pagination(props: IPaginationProps) {
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);
  const searchPage = Math.ceil((props.count ?? 10) / 10);

  const currentPage = props.count ? searchPage : lastPage;

  console.log(lastPage);
  console.log(searchPage);

  const onClickPrev = (event: MouseEvent<HTMLImageElement>) => {
    if (startPage === 1) {
      alert("마지막 페이지입니다.");
      return;
    }
    setStartPage((prev) => prev - 10);
  };

  const onClickNext = (event: MouseEvent<HTMLImageElement>) => {
    if (currentPage < startPage + 10) {
      alert("마지막 페이지입니다.");
      return;
    }
    setStartPage((prev) => prev + 10);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    props.refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <PaginationUI
      startPage={startPage}
      searchPage={searchPage}
      currentPage={currentPage}
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      lastPage={lastPage}
    />
  );
}
