import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/type/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  console.log(dataBoardsCount);

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };
  return (
    <>
      <BoardListUI
        data={data}
        keyword={keyword}
        count={dataBoardsCount?.fetchBoardsCount} //검색한 게시물 총 갯수
        onChangeKeyword={onChangeKeyword}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
      />
    </>
  );
}
