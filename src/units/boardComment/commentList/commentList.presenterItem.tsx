import * as C from "./commentList.styles";
import { Modal, Rate } from "antd";
import CommentWrite from "../commentWrite/commentWrite.container";
import { ChangeEvent, MouseEvent, useState } from "react";
import { ICommentItemProps } from "./commentList.types";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./commentList.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../commons/type/generated/types";
import { useRouter } from "next/router";
import { getDate } from "../../../commons/year";

export default function CommentListUIItem(props: ICommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

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

  const handleModal = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedCommentId(event.currentTarget.id); //기존 버튼 아이디를 가져와서 스테이트로 상태관리
    setIsOpen((prev) => !prev);
  };

  const onCommentPasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit ? (
        <C.CommentWrapper>
          <C.CommentBox>
            <C.CommentTextBox>
              <C.CommentProfile />
              <C.CommentContentBox>
                <C.ContentHeader>
                  <C.CommentWriter>{props.el.writer}</C.CommentWriter>
                  <Rate allowHalf disabled value={props.el.rating} />
                </C.ContentHeader>
                <C.CommentContent>{props.el.contents}</C.CommentContent>
                <C.CommentDate>{getDate(props.el.createdAt)}</C.CommentDate>
              </C.CommentContentBox>
            </C.CommentTextBox>
            <C.CommentBtnBox>
              <C.CommentEditBtn id={props.el._id} onClick={onEdit}>
                수정
              </C.CommentEditBtn>
              <C.CommentDeleteBtn id={props.el._id} onClick={handleModal}>
                삭제
              </C.CommentDeleteBtn>
              {isOpen && (
                <Modal
                  title="비밀번호 입력"
                  open={true}
                  onOk={onClickDeleteComment}
                  onCancel={handleModal}
                >
                  <input
                    type="password"
                    maxLength={100}
                    onChange={onCommentPasswordCheck}
                  />
                </Modal>
              )}
            </C.CommentBtnBox>
          </C.CommentBox>
          <C.HorizonLine />
        </C.CommentWrapper>
      ) : (
        <CommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
