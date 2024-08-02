<<<<<<< HEAD
import { useQuery } from "@apollo/client";
import CommentListUI from "./commentList.presenter";
import { useRouter } from "next/router";

import { FETCH_BOARD_COMMENTS } from "./commentList.queries";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/type/generated/types";

export default function CommentList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
=======
import { useMutation, useQuery } from "@apollo/client";
import CommentListUI from "./commentList.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./commentList.queries";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/type/generated/types";
import { Modal } from "antd";

export default function CommentList() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  // const [ updateBoardComment ] = useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(DELETE_BOARD_COMMENT)
  const { data } = useQuery<
>>>>>>> laptop-work
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.board) },
  });

<<<<<<< HEAD
  const onLoadMore = () => {
    if (data === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return <CommentListUI data={data} onLoadMore={onLoadMore} />;
=======
  const handleModal = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedCommentId(event.currentTarget.id); //기존 버튼 아이디를 가져와서 스테이트로 상태관리
    setIsOpen((prev) => !prev);
  };

  const onCommentPasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: selectedCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.board) },
          },
        ],
      });
      Modal.success({ content: "댓글이 성공적으로 삭제되었습니다." });
      setIsOpen((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: "비밀번호가 일치하지 않습니다." });
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  return (
    <CommentListUI
      isOpen={isOpen}
      data={data}
      handleModal={handleModal}
      onCommentPasswordCheck={onCommentPasswordCheck}
      onClickDeleteComment={onClickDeleteComment}
    />
  );
>>>>>>> laptop-work
}
