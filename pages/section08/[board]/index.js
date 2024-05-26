import {
  Wrapper, Img, TitleText, 
  HorizonLine, Header, ProfileBox, Writer,
  Date, BoardBtn, BtnBox
} from "../../../styles/page"


export default function Board() {


  return (
    <><Wrapper>
      <Header>
        <ProfileBox>
          <Writer>노원두</Writer>
          <Date>Date:2024.05.27</Date>
        </ProfileBox>
      </Header>
      <HorizonLine />
      <TitleText>게시글 제목입니다.</TitleText>
      게시판 내용입니다.
    </Wrapper>
    <BtnBox>
        <BoardBtn>목록으로</BoardBtn>
        <BoardBtn>수정하기</BoardBtn>
        <BoardBtn>삭제하기</BoardBtn>
    </BtnBox></>
    
  )

}