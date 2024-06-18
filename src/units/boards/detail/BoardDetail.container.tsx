import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import { MouseEvent } from "react";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.board,
    },
  });
  const onClickDelete = (event : MouseEvent<HTMLButtonElement>) => {
    try {
      deleteBoard({
        variables: { boardId: event.currentTarget.id },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.board },
          },
        ],
      });
      alert("게시물이 성공적으로 삭제되었습니다.");
      router.push("/section11");
    } catch (error) {
      if(error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickList = () => {
    router.push("/section11");
  };

  const onClickEdit = () => {
    router.push(`/section11/${router.query.board}/edit`);
  };

  console.log(router);
  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
    />
  );
}
