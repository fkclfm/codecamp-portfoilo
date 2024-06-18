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
  UploadBox,
  Upload,
  RegisterBtn,
} from "./BoardWrite.styled";
import { IBoardWriteEditProps } from "./BoardWrite.types"


export default function BoardWriteEditUI(props: IBoardWriteEditProps) {
  return (
    <Wrapper>
      <TitleText>게시물 {props.isEdit ? "수정" : "등록"}</TitleText>
      <HeaderTitle>
        <Title>
          <label htmlFor="writer">작성자</label>
          <div className="Error">{props.writerError}</div>
          <ContentTitle
            type="text"
            onChange={props.WriterCheck}
            placeholder="이름을 적어주세요."
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            readOnly={!!props.data?.fetchBoard.writer} //!! 두개는 true임 ! 한개는 false 명시적으로 true로 바꾸고싶을때 사용
          />
        </Title>
        <Title>
          <label>비밀번호</label>
          <div className="Error">{props.pwError}</div>
          <ContentTitle
            type="password"
            onChange={props.PwCheck}
            placeholder="비밀번호를 입력해주세요."
          />
        </Title>
      </HeaderTitle>
      <label htmlFor="title">제목</label>
      <div className="Error">{props.titleError}</div>
      <Content
        type="text"
        onChange={props.TitleCheck}
        placeholder="제목을 작성해주세요."
        defaultValue={props.data?.fetchBoard.title}
      />
      <label htmlFor="content">내용</label>
      <div className="Error">{props.contentsError}</div>
      <ContentArea
        cols={50}
        rows={10}
        onChange={props.ContentCheck}
        placeholder="내용을 작성해주세요."
        defaultValue={props.data?.fetchBoard.contents}
      ></ContentArea>
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
        <input type="radio" name="youtube" /> 유튜브
        <input type="radio" name="youtube" /> 사진
      </ContentBox>
      <RegisterBtn
        onClick={props.isEdit ? props.onClickEdit : props.onClickNew}
        disabled={props.isEdit ? false : props.isTrue}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </RegisterBtn>
    </Wrapper>
  );
}
