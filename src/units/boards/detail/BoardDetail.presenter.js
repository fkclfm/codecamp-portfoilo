import { getDate } from "../../../common/year";
import {
  Entire,
  Wrapper,
  TitleText,
  HorizonLine,
  Header,
  ProfileBox,
  Writer,
  Date,
  BoardBtn,
  BtnBox,
  CommentInput,
  CommentWrapper,
} from "./BoardDetail.styled";

export default function BoardDetailUI(props) {
  return (
    <>
      <Entire>
        <Wrapper>
          <Header>
            <ProfileBox>
              <Writer>작성자 : {props.data?.fetchBoard.writer}</Writer>
              <Date>Date:{getDate(props.data?.fetchBoard.createdAt)}</Date>
            </ProfileBox>
          </Header>
          <HorizonLine />
          {/* 글 제목 */}
          <TitleText>{props.data?.fetchBoard.title}</TitleText>
          {/* 글 내용 */}
          {props.data?.fetchBoard.contents}
        </Wrapper>
        <BtnBox>
          <BoardBtn onClick={props.onClickList}>목록으로</BoardBtn>
          <BoardBtn onClick={props.onClickEdit}>수정하기</BoardBtn>
          <BoardBtn
            id={props.data?.fetchBoard._id}
            onClick={props.onClickDelete}
          >
            삭제하기
          </BoardBtn>
        </BtnBox>
        <HorizonLine />

        <CommentWrapper>
          <Writer>댓글</Writer>
          <CommentInput
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 
          불법 정보 유포시 모니터링 후 삭제될 수 있으며, 
          이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
        </CommentWrapper>
      </Entire>
    </>
  );
}
