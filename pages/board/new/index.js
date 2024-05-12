import {
  Wrapper, HeaderTitle, Title, TitleText, Content,
  ContentTitle, ContentArea, Address,
  ContentBox, Btn, UploadBox, Upload, RegisterBtn
} from "../../../styles/emotion"

export default function Board() {


  return (
    <Wrapper>
      <TitleText>게시물 등록</TitleText>
      <HeaderTitle>
        <Title>
          <label htmlFor="writter">작성자</label>
          <ContentTitle type="text" placeholder="이름을 적어주세요." />
        </Title>
        <Title>
          <label for="password">비밀번호</label>
          <ContentTitle type="password" placeholder="비밀번호를 입력해주세요." />
        </Title>
      </HeaderTitle>
      <label for="title">제목</label>
      <Content type="text" placeholder="제목을 작성해주세요." />
      <label for="content">내용</label>
      <ContentArea cols="50" rows="10" placeholder="내용을 작성해주세요."></ContentArea>
      <label htmlFor="area">주소</label>
      <ContentBox>
        <Address type="text" placeholder="07250" />
        <Btn>우편번호 검색</Btn>
      </ContentBox>
      <Content type="text" />
      <Content type="text" />
      <label htmlFor="youtube">유튜브</label>
      <Content type="text" placeholder="링크를 복사해주세요." />
      <label htmlFor="picture">사진 첨부</label>
      <UploadBox>
        <Upload></Upload>
        <Upload></Upload>
        <Upload></Upload>
      </UploadBox>
      <label htmlFor="main-setting">매인 설정</label>
      <ContentBox>
        <input type="radio" name="youtube" id="" /> 유튜브
        <input type="radio" name="youtube" id="" /> 사진
      </ContentBox>
      <RegisterBtn>등록하기</RegisterBtn>
    </Wrapper>
  )

}