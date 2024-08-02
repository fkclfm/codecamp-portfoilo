import * as C from "./commentList.styles";
import { IFetchBoardCommentsProps } from "./commentList.types";
<<<<<<< HEAD
import InfiniteScroll from "react-infinite-scroller";
import CommentListUIItem from "./commentList.presenterItem";

export default function CommentListUI(props: IFetchBoardCommentsProps) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <CommentListUIItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
=======
import { getDate } from "../../../commons/year";
import { Modal, Rate } from "antd";

export default function CommentListUI(props: IFetchBoardCommentsProps) {
  return (
    <C.Entire>
      <C.CommentWrapper>
        {props.data?.fetchBoardComments.map((el) => (
          <div key={el._id}>
            <C.CommentBox>
              <C.CommentTextBox>
                <C.CommentProfile />
                <C.CommentContentBox>
                  <C.ContentHeader>
                    <C.CommentWriter>{el.writer}</C.CommentWriter>
                    <Rate allowHalf disabled value={el.rating} />
                  </C.ContentHeader>
                  <C.CommentContent>{el.contents}</C.CommentContent>
                  <C.CommentDate>{getDate(el.createdAt)}</C.CommentDate>
                </C.CommentContentBox>
              </C.CommentTextBox>
              <C.CommentBtnBox>
                <C.CommentEditBtn>수정</C.CommentEditBtn>
                <C.CommentDeleteBtn id={el._id} onClick={props.handleModal}>
                  삭제
                </C.CommentDeleteBtn>
                {props.isOpen && (
                  <Modal
                    title="비밀번호 입력"
                    open={true}
                    onOk={props.onClickDeleteComment}
                    onCancel={props.handleModal}
                  >
                    <input
                      type="password"
                      maxLength={100}
                      onChange={props.onCommentPasswordCheck}
                    />
                  </Modal>
                )}
              </C.CommentBtnBox>
            </C.CommentBox>
            <C.HorizonLine />
          </div>
        ))}
      </C.CommentWrapper>
    </C.Entire>
>>>>>>> laptop-work
  );
}
