import { Modal } from "antd";
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
} from "./BoardWrite.styled";
import { IBoardWriteEditProps } from "./BoardWrite.types";
import DaumPostcodeEmbed from "react-daum-postcode";
import UploadItem from "../../../components/commons/uploads/Uploads.container";

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
            defaultValue={props.data?.fetchBoard.title ?? ""}
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
        <Address
          type="text"
          placeholder="07250"
          readOnly
          value={
            props.zipcode !== ""
              ? props.zipcode
              : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
          }
        />
        <Btn onClick={props.handleModal}>우편번호 검색</Btn>
        {props.isOpen && (
          <Modal
            open={true}
            onOk={props.handleModal}
            onCancel={props.handleModal}
          >
            <DaumPostcodeEmbed onComplete={props.handleComplete} />
            <span>주소 : {props.address}</span>
          </Modal>
        )}
      </ContentBox>
      <Content
        type="text"
        readOnly
        value={
          props.address !== "" //쉽게 말해서 이 값이 있으면? 정상적으로 스테이트에 있는 값 출력 없으면? 이미 fetchBoard에 등록된거 불러오기
            ? props.address
            : props.data?.fetchBoard.boardAddress?.address ?? ""
        }
      />
      <Content
        type="text"
        placeholder="상세 주소를 기입해주세요."
        onChange={props.onAddressDetail}
        defaultValue={props.data?.fetchBoard?.boardAddress?.addressDetail ?? ""}
      />
      <label htmlFor="youtube">유튜브</label>
      <Content
        type="text"
        placeholder="링크를 복사해주세요."
        onChange={props.onYoutubeUrlCheck}
        defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
      />
      <label htmlFor="picture">이미지 첨부</label>
      <UploadItem ImageUrl={props.ImageUrl} setImageUrl={props.setImageUrl} />
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
