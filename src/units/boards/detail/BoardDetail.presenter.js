import { getDate } from "../../../common/year";
import {
  Wrapper,
  Img,
  TitleText,
  HorizonLine,
  Header,
  ProfileBox,
  Writer,
  Date,
  BoardBtn,
  BtnBox,
} from "./BoardDetail.styled";

export default function BoardDetailUI(props) {
  return (
    <>
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
        <BoardBtn id={props.data?.fetchBoard._id} onClick={props.onClickDelete}>
          삭제하기
        </BoardBtn>
      </BtnBox>
    </>
  );
}
