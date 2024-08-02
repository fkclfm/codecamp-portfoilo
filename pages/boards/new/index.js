import { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import {
  Wrapper, HeaderTitle, Title, TitleText, Content,
  ContentTitle, ContentArea, Address,
  ContentBox, Btn, UploadBox, Upload, RegisterBtn
} from "../../../styles/emotion"
import { useRouter } from "next/router"

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
  const [ createBoard ] = useMutation(CREATE_BOARD)

  const [writer, setWriter] = useState("")
  const [pw, setPw] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [writerError, setWriterError] = useState("")
  const [pwError, setPwError] = useState("")
  const [titleError, setTitleError] = useState("")
  const [contentsError, setContentsError] = useState("")


  function onWriterCheck(event) {
    setWriter(event.target.value)
    if(event.target.value != "") {
      setWriterError("")
    }
    
  }

  function onPwCheck(event) {
    setPw(event.target.value)
    if(event.target.value != "") {
      setPwError("")
    }
  }

  function onTitleCheck(event) {
    setTitle(event.target.value)
    if(event.target.value != "") {
      setTitleError("")
    }
  }

  function onContentCheck(event) {
    setContents(event.target.value)
    if(event.target.value != "") {
      setContentsError("")
    }
  }
  
  const registerCheck = async () => {
    if (writer === "") {
      setWriterError("작성자를 작성해주세요.")
    }
    if (pw === "") {
      setPwError("비밀번호를 작성해주세요.")
    }
    if (title === "") {
      setTitleError("제목을 작성해주세요.")
    }
    if (contents === "") {
      setContentsError("내용을 작성해주세요.")
    }
    
    if(writer && pw && title && contents) {
      try {
        const result = await createBoard({
          variables : {
            createBoardInput: {
              writer: writer,
              password : pw,
              title: title,
              contents: contents
            }
          }
        })
        alert("게시글 등록이 완료되었습니다.")
        console.log(result.data.createBoard._id)
        router.push(`/section08/${result.data.createBoard._id}`)
      } catch(error) {
        alert(error.message)
      }
    }
  }
  return (
    <Wrapper>
      <TitleText>게시물 등록</TitleText>
      <HeaderTitle>
        <Title>
          <label htmlFor="writter">작성자</label>
          <div className="Error">{writerError}</div>
          <ContentTitle type="text" onChange={onWriterCheck} placeholder="이름을 적어주세요." />
        </Title>
        <Title>
          <label for="password">비밀번호</label>
          <div className="Error">{pwError}</div>
          <ContentTitle type="password" onChange={onPwCheck} placeholder="비밀번호를 입력해주세요." />
        </Title>
      </HeaderTitle>
      <label htmlFor="title">제목</label>
      <div className="Error">{titleError}</div>
      <Content type="text" onChange={onTitleCheck} placeholder="제목을 작성해주세요." />
      <label htmlFor="content">내용</label>
      <div className="Error">{contentsError}</div>
      <ContentArea cols="50" rows="10" onChange={onContentCheck} placeholder="내용을 작성해주세요."></ContentArea>
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
      <RegisterBtn onClick={registerCheck}>등록하기</RegisterBtn>
    </Wrapper>
  )

}