import {
  Wrapper,
  HeaderTitle,
  Title,
  TitleText,
  Content,
  ContentTitle,
  ContentArea,
  Address,
  ContentBox,
  Btn,
  RegisterBtn,
} from "./CreateItem.styled";

export default function CreateItemPageUI() {
  return (
    <Wrapper>
      <TitleText>음반 등록하기</TitleText>
      <HeaderTitle>
        <Title>
          <label>음반명</label>
          <ContentTitle type="password" placeholder="음반 이름을 적어주세요" />
        </Title>
      </HeaderTitle>
      <label htmlFor="title">한줄요약</label>
      <Content
        type="text"
        placeholder="상품에 대한 특징을 한줄로 적어주세요."
      />
      <label htmlFor="content">상품설명</label>
      <ContentArea
        cols={30}
        rows={10}
        placeholder="내용을 작성해주세요."
      ></ContentArea>
      <label htmlFor="area">가격</label>
      <Content type="text" placeholder="상세 주소를 기입해주세요." />
      <label htmlFor="youtube">해시태그 입력</label>
      <Content
        type="text"
        placeholder="해시태그를 적어주세요!!  #인기, #힙합, #클래식 "
      />
      <label htmlFor="area">거래 위치</label>
      <Content type="text" placeholder="상세 주소를 기입해주세요." />
      <label htmlFor="area">상품 사진</label>
      <label htmlFor="main-setting">매인 사진설정</label>
      <ContentBox>
        <input type="radio" name="youtube" /> 사진 1
        <input type="radio" name="youtube" /> 사진 2
      </ContentBox>
      <RegisterBtn>하기</RegisterBtn>
    </Wrapper>
  );
}
