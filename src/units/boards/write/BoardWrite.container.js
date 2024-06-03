import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { CREATE_BOARD } from "./BoardWrite.queries"
import BoardWriteUI from "./BoardWrite.presenter"


export default function BoardWrite() {
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
        router.push(`/section09/${result.data.createBoard._id}`)
      } catch(error) {
        alert(error.message)
      }
    }
  }
  return (
    <BoardWriteUI 
      RegisterCheck={registerCheck}
      WriterCheck={onWriterCheck}
      PwCheck={onPwCheck}
      TitleCheck={onTitleCheck}
      ContentCheck={onContentCheck}
      writerError={writerError}
      pwError={pwError}
      titleError={titleError}
      contentsError={contentsError}
    />
  )
}