import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../commons/type/generated/types";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.board,
    },
  });
  console.log(data);
  const onClickLike = (event: MouseEvent<HTMLImageElement>) => {
    try {
      likeBoard({
        variables: { boardId: String(router.query.board) },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.board },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickDisLike = (event: MouseEvent<HTMLImageElement>) => {
    try {
      dislikeBoard({
        variables: { boardId: String(router.query.board) },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.board },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
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
      Modal.success({ content: "게시글이 성공적으로 삭제되었습니다." });
      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickList = () => {
    router.push("/boards");
  };

  const onClickEdit = () => {
    router.push(`/boards/${router.query.board}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
    />
  );
}
