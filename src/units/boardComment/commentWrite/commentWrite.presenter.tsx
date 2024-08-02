import * as C from "./commentWrite.styles";
import { ICommentWriteUIProps } from "./commentWrite.types";
import { Rate } from "antd";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <C.Entire>
      <C.CommentWrapper>
        <C.Comment>댓글</C.Comment>
        <Rate
          allowHalf
          onChange={props.handleChange}
          value={
            props.inputs.rating !== 0
              ? props.inputs.rating
              : props.el?.rating ?? 0
          }
        />
        <C.CommentHeader>
          <C.CommentWriter
            type="text"
            placeholder="작성자"
            onChange={props.onChangeInput}
            value={
              props.inputs.writer !== ""
                ? props.inputs.writer
                : props.el?.writer ?? ""
            }
            readOnly={props.isEdit}
            id="writer"
          />
          <C.CommentPassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeInput}
            value={props.inputs.password}
            id="password"
          />
        </C.CommentHeader>
        <C.CommentInput
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 
          불법 정보 유포시 모니터링 후 삭제될 수 있으며, 
          이에 대한 민형사상 책임은 게시자에게 있습니다."
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
          </C.CommentBtn>
        </C.CommentBtnBox>
      </C.CommentWrapper>
    </C.Entire>
  );
}
