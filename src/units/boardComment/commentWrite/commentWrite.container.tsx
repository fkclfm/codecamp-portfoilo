import { useMutation } from "@apollo/client";
import CommentWriteUI from "./commentWrite.presenter";
import { CREATE_BOARDCOMMENT } from "./commentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";
import { useRouter } from "next/router";
import { MouseEvent, ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../commons/type/generated/types";
import { Modal } from "antd";

export default function CommentWrite() {
  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARDCOMMENT);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  function handleChange(value: number) {
    setRating(value);
  }

  const onClickNewComment = async (event: MouseEvent<HTMLButtonElement>) => {
    if (!contents && !writer && !password) {
      Modal.error({
        content:
          "글 작성자, 패스워드, 내용 중 하나가 입력되지 않았습니다. 다시 입력해주세요.",
      });
      return;
    }

    if (!writer) {
      Modal.error({ content: "작성자를 입력해주세요." });
      return;
    }

    if (!password) {
      Modal.error({ content: "비밀번호를 입력해주세요." });
      return;
    }

    if (!contents) {
      Modal.error({ content: "내용을 입력해주세요." });
      return;
    }

    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.board),
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.board) },
          },
        ],
      });
      Modal.success({ content: "댓글이 작성되었습니다." });
      setWriter("");
      setPassword("");
      setContents("");
      setRating(0);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: "댓글 작성에 실패하였습니다. 다시 시도해주세요.",
        });
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  function onWriterCheck(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onPwCheck(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onContentCheck(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }
  return (
    <CommentWriteUI
      rating={rating}
      writer={writer}
      password={password}
      contents={contents}
      onClickNewComment={onClickNewComment}
      onWriterCheck={onWriterCheck}
      onPwCheck={onPwCheck}
      onContentCheck={onContentCheck}
      handleChange={handleChange}
    />
  );
}
