import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { CREATE_BOARD } from "./BoardWrite.queries"
import BoardWriteUI from "./BoardWrite.presenter"



export default function BoardWrite() {
  const router = useRouter()
  const [ createBoard ] = useMutation(CREATE_BOARD)

  const [isTrue, setIsTrue] = useState(true)
  const [writer, setWriter] = useState("")
  const [pw, setPw] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [writerError, setWriterError] = useState("")
  const [pwError, setPwError] = useState("")
  const [titleError, setTitleError] = useState("")
  const [contentsError, setContentsError] = useState("")

  const BoardCheck = () => {
    if(writer && pw && title && contents) {
      setIsTrue(false) 
    } else {
      setIsTrue(true)
    }
  }
 

  function onWriterCheck(event) {
    setWriter(event.target.value)
    if(event.target.value != "") {
      setWriterError("")
    }

    if(event.target.value && pw && title && contents) {
      setIsTrue(false) 
    } else {
      setIsTrue(true)
    }
    
  }

  function onPwCheck(event) {
    setPw(event.target.value)
    if(event.target.value != "") {
      setPwError("")
    }

    if(writer && event.target.value && title && contents) {
      setIsTrue(false) 
    } else {
      setIsTrue(true)
    }
  }

  function onTitleCheck(event) {
    setTitle(event.target.value)
    if(event.target.value != "") {
      setTitleError("")
    }
    if(writer && pw && event.target.value && contents) {
      setIsTrue(false) 
    } else {
      setIsTrue(true)
    }
  }

  function onContentCheck(event) {
    setContents(event.target.value)
    if(event.target.value != "") {
      setContentsError("")
      BoardCheck()
    }
    if(writer && pw && title && event.target.value) {
      setIsTrue(false) 
    } else {
      setIsTrue(true)
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
        router.push(`/section11/${result.data.createBoard._id}`)
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
      isTrue={isTrue}
    />
  )
}