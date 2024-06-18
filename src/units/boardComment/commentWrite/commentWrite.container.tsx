import { useMutation } from "@apollo/client";
import CommentWriteUI from "./commentWrite.presenter";
import { CREATE_BOARDCOMMENT } from "./commentWrite.queries";
import {  FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";
import { useRouter } from "next/router";
import { MouseEvent, ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../commons/type/generated/types";

export default function CommentWrite() {
  const router = useRouter()
  const [ createBoardComment ] = useMutation<Pick<IMutation, "createBoardComment">,IMutationCreateBoardCommentArgs>(CREATE_BOARDCOMMENT)
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const onClickNewComment = async (event : MouseEvent<HTMLButtonElement>) => {
    
    if(!contents && !writer && !password) {
      alert("전부 다 입력해주세요!!")
      return;
    }

    if(!writer) {
      alert("작성자를 입력해주세요!!")
      return;
    }

    if(!password) {
      alert("비밀번호를 입력해주세요!!")
      return;
    }

    if(!contents) {
      alert("내용을 입력해주세요!!")
      return;
    }

    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.board),
          createBoardCommentInput : {
            writer,
            password,
            contents,
            rating: 2.5,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables : { boardId: String(router.query.board) } 
          }
        ]
      })
      alert("댓글이 작성되었습니다.")
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message); // 안전하게 `error.message`에 접근
    } else {
        alert("An unknown error occurred");
    }
    }
  } 

  function onWriterCheck(event : ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onPwCheck(event : ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    console.log(password)
  }

  function onContentCheck(event : ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }
  return (
    <CommentWriteUI
      onClickNewComment={onClickNewComment}
      onWriterCheck={onWriterCheck}
      onPwCheck={onPwCheck}
      onContentCheck={onContentCheck}
    />
  )
}