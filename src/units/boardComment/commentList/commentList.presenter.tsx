import * as C from "./commentList.styles"
import { IFetchBoardCommentsProps } from "./commentList.types";
import { getDate } from "../../../commons/year"

export default function CommentListUI(props : IFetchBoardCommentsProps) {

  return (
    <C.Entire>
      <C.CommentWrapper>
        {props.data?.fetchBoardComments.map((el) =>
        <div key={el._id}>
          <C.CommentBox>
            <C.CommentTextBox>
              <C.CommentProfile />
              <C.CommentContentBox> 
                <C.CommentWriter>{el.writer}</C.CommentWriter>
                <C.CommentContent>{el.contents}</C.CommentContent>
                <C.CommentDate>{getDate(el.createdAt)}</C.CommentDate>
              </C.CommentContentBox>
            </C.CommentTextBox>
            <C.CommentBtnBox>
              <C.CommentEditBtn>수정</C.CommentEditBtn>
              <C.CommentDeleteBtn id={el._id} onClick={props.onClickDeleteComment}>삭제</C.CommentDeleteBtn>
            </C.CommentBtnBox>
          </C.CommentBox>
          <C.HorizonLine />
        </div> 
        )}
      </C.CommentWrapper>
    </C.Entire>
  )
}