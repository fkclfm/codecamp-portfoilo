import { useMutation, gql } from "@apollo/client"
import { useState } from "react"
import { useRouter } from "next/router"
import {
  Wrapper, HeaderTitle, Title, TitleText, Content,
  ContentTitle, ContentArea, Address,
  ContentBox, Btn, UploadBox, Upload, RegisterBtn, Error
} from "../../../styles/emotion"


const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
 
`


export default function Board() {
  const router = useRouter()
  const [ data ] = useMutation(CREATE_BOARD)

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if(event.target.value !== ""){
      setWriterError("")
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("")
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if(event.target.value !== ""){
      setTitleError("")
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if(event.target.value !== ""){
      setContentsError("")
    }
  };

  const onClickSubmit = async () => {
      
     

    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      const result = await createBoard({ 
        variables : {
          createBoardInput : {
            writer,
            password,
            title,
            contents,
          }
        }
       })
        alert("게시글이 등록되었습니다.");
        console.log(result)
    }
  };

  return (
    <Wrapper>
      <TitleText>게시물 등록</TitleText>
      <HeaderTitle>
        <Title>
          <Error>{writerError}</Error>
          <label htmlFor="writter">작성자</label>
          <ContentTitle type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter}/>
        </Title>
        <Title>
        <Error>{passwordError}</Error>
          <label for="password">비밀번호</label>
          <ContentTitle type="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword}/>
        </Title>
      </HeaderTitle>
      <Error>{titleError}</Error>
      <label for="title">제목</label>
      <Content type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle}/>
      <Error>{contentsError}</Error>
      <label for="content">내용</label>
      <ContentArea cols="50" rows="10" placeholder="내용을 작성해주세요." onChange={onChangeContents}></ContentArea>
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