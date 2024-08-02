import { useMutation } from "@apollo/client";
import CommentWriteUI from "./commentWrite.presenter";
<<<<<<< HEAD
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";
=======
import { CREATE_BOARDCOMMENT } from "./commentWrite.queries";
>>>>>>> laptop-work
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";
import { useRouter } from "next/router";
import { MouseEvent, ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
<<<<<<< HEAD
  IMutationUpdateBoardCommentArgs,
} from "../../../commons/type/generated/types";
import { Modal } from "antd";
import { ICommentWriteProps } from "./commentWrite.types";

export default function CommentWrite(props: ICommentWriteProps) {
=======
} from "../../../commons/type/generated/types";
import { Modal } from "antd";

export default function CommentWrite() {
>>>>>>> laptop-work
  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
<<<<<<< HEAD
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    contents: "",
    rating: 0,
  });

  function handleChange(value: number) {
    setInputs((prev) => ({
      ...prev,
      rating: value,
    }));
  }

  interface IUpdateBoardCommentInput {
    contents: string;
    rating: number;
  }

  const onClickUpdateComment = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (inputs.contents !== "")
        updateBoardCommentInput.contents = inputs.contents;
      if (inputs.rating !== props.el.rating)
        updateBoardCommentInput.rating = inputs.rating;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: inputs.password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.board) },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickNewComment = async (event: MouseEvent<HTMLButtonElement>) => {
    if (!inputs.contents && !inputs.writer && !inputs.password) {
=======
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
>>>>>>> laptop-work
      Modal.error({
        content:
          "글 작성자, 패스워드, 내용 중 하나가 입력되지 않았습니다. 다시 입력해주세요.",
      });
      return;
    }

<<<<<<< HEAD
    if (!inputs.writer) {
=======
    if (!writer) {
>>>>>>> laptop-work
      Modal.error({ content: "작성자를 입력해주세요." });
      return;
    }

<<<<<<< HEAD
    if (!inputs.password) {
=======
    if (!password) {
>>>>>>> laptop-work
      Modal.error({ content: "비밀번호를 입력해주세요." });
      return;
    }

<<<<<<< HEAD
    if (!inputs.contents) {
=======
    if (!contents) {
>>>>>>> laptop-work
      Modal.error({ content: "내용을 입력해주세요." });
      return;
    }

    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.board),
          createBoardCommentInput: {
<<<<<<< HEAD
            ...inputs,
=======
            writer,
            password,
            contents,
            rating,
>>>>>>> laptop-work
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
<<<<<<< HEAD
      setInputs({
        writer: "",
        password: "",
        contents: "",
        rating: 0,
      });
=======
      setWriter("");
      setPassword("");
      setContents("");
      setRating(0);
>>>>>>> laptop-work
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

<<<<<<< HEAD
  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  }
  return (
    <CommentWriteUI
      isEdit={props.isEdit}
      el={props.el}
      inputs={inputs}
      onChangeInput={onChangeInput}
      onClickUpdateComment={onClickUpdateComment}
      onClickNewComment={onClickNewComment}
=======
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
>>>>>>> laptop-work
      handleChange={handleChange}
    />
  );
}
