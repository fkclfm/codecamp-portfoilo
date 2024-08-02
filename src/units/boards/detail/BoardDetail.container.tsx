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
<<<<<<< HEAD

=======
>>>>>>> laptop-work
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
<<<<<<< HEAD

=======
>>>>>>> laptop-work
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
<<<<<<< HEAD

=======
>>>>>>> laptop-work
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);
<<<<<<< HEAD

=======
>>>>>>> laptop-work
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
<<<<<<< HEAD
      router.push("/boards");
=======
      router.push("/section11");
>>>>>>> laptop-work
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onClickList = () => {
<<<<<<< HEAD
    router.push("/boards");
  };

  const onClickEdit = () => {
    router.push(`/boards/${router.query.board}/edit`);
  };

=======
    router.push("/section11");
  };

  const onClickEdit = () => {
    router.push(`/section11/${router.query.board}/edit`);
  };

  console.log(router);
>>>>>>> laptop-work
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
