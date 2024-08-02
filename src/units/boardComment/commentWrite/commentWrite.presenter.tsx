import * as C from "./commentWrite.styles";
<<<<<<< HEAD
import { ICommentWriteUIProps } from "./commentWrite.types";
import { Rate } from "antd";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
=======
import { IBoardCommentProps } from "./commentWrite.types";
import { Rate } from "antd";

export default function CommentWriteUI(props: IBoardCommentProps) {
>>>>>>> laptop-work
  return (
    <C.Entire>
      <C.CommentWrapper>
        <C.Comment>댓글</C.Comment>
<<<<<<< HEAD
        <Rate
          allowHalf
          onChange={props.handleChange}
          value={
            props.inputs.rating !== 0
              ? props.inputs.rating
              : props.el?.rating ?? 0
          }
        />
=======
        <Rate allowHalf onChange={props.handleChange} value={props.rating} />
>>>>>>> laptop-work
        <C.CommentHeader>
          <C.CommentWriter
            type="text"
            placeholder="작성자"
<<<<<<< HEAD
            onChange={props.onChangeInput}
            value={
              props.inputs.writer !== ""
                ? props.inputs.writer
                : props.el?.writer ?? ""
            }
            readOnly={props.isEdit}
            id="writer"
=======
            onChange={props.onWriterCheck}
            value={props.writer}
>>>>>>> laptop-work
          />
          <C.CommentPassword
            type="password"
            placeholder="비밀번호"
<<<<<<< HEAD
            onChange={props.onChangeInput}
            value={props.inputs.password}
            id="password"
=======
            onChange={props.onPwCheck}
            value={props.password}
>>>>>>> laptop-work
          />
        </C.CommentHeader>
        <C.CommentInput
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 
          불법 정보 유포시 모니터링 후 삭제될 수 있으며, 
          이에 대한 민형사상 책임은 게시자에게 있습니다."
<<<<<<< HEAD
          onChange={props.onChangeInput}
          value={
            props.inputs.contents !== ""
              ? props.inputs.contents
              : props.el?.contents ?? ""
          }
          id="contents"
        />
        <C.CommentBtnBox>
          <C.CommentBtn
            onClick={
              props.isEdit
                ? props.onClickUpdateComment
                : props.onClickNewComment
            }
          >
            {props.isEdit ? "수정" : "등록"}하기
=======
          onChange={props.onContentCheck}
          value={props.contents}
        />
        <C.CommentBtnBox>
          <C.CommentBtn onClick={props.onClickNewComment}>
            등록하기
>>>>>>> laptop-work
          </C.CommentBtn>
        </C.CommentBtnBox>
      </C.CommentWrapper>
    </C.Entire>
  );
}
