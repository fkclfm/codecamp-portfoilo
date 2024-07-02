import * as C from "./commentWrite.styles";
import { IBoardCommentProps } from "./commentWrite.types";
import { Rate } from "antd";

export default function CommentWriteUI(props: IBoardCommentProps) {
  return (
    <C.Entire>
      <C.CommentWrapper>
        <C.Comment>댓글</C.Comment>
        <Rate allowHalf onChange={props.handleChange} value={props.rating} />
        <C.CommentHeader>
          <C.CommentWriter
            type="text"
            placeholder="작성자"
            onChange={props.onWriterCheck}
            value={props.writer}
          />
          <C.CommentPassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onPwCheck}
            value={props.password}
          />
        </C.CommentHeader>
        <C.CommentInput
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 
          불법 정보 유포시 모니터링 후 삭제될 수 있으며, 
          이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onContentCheck}
          value={props.contents}
        />
        <C.CommentBtnBox>
          <C.CommentBtn onClick={props.onClickNewComment}>
            등록하기
          </C.CommentBtn>
        </C.CommentBtnBox>
      </C.CommentWrapper>
    </C.Entire>
  );
}
