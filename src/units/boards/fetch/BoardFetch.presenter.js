import {
  Wrapper, Img, TitleText, 
  HorizonLine, Header, ProfileBox, Writer,
  Date, BoardBtn, BtnBox
} from "./BoardFetch.styled"

export default function BoardFetchUI(props) {

  return (
    <><Wrapper>
      <Header>
        <ProfileBox>
          <Writer>작성자 : {props.data?.fetchBoard.writer}</Writer>
          <Date>Date:{props.data?.fetchBoard.createdAt.substr(0, 10)}</Date>
        </ProfileBox>
      </Header>
      <HorizonLine />
      {/* 글 제목 */}
      <TitleText>{props.data?.fetchBoard.title}</TitleText>  
      {/* 글 내용 */}
      {props.data?.fetchBoard.contents}
    </Wrapper>
    <BtnBox>
        <BoardBtn>목록으로</BoardBtn>
        <BoardBtn>수정하기</BoardBtn>
        <BoardBtn>삭제하기</BoardBtn>
    </BtnBox></>
  )
}