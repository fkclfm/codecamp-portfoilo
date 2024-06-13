import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteEditUI from "./BoardWriteEdit.presenter";

export default function BoardWrite(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isTrue, setIsTrue] = useState(true);
  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [pwError, setPwError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  function onWriterCheck(event) {
    setWriter(event.target.value);
    if (event.target.value != "") {
      setWriterError("");
    }

    if (event.target.value && pw && title && contents) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  }

  function onPwCheck(event) {
    setPw(event.target.value);
    if (event.target.value != "") {
      setPwError("");
    }

    if (writer && event.target.value && title && contents) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  }

  function onTitleCheck(event) {
    setTitle(event.target.value);
    if (event.target.value != "") {
      setTitleError("");
    }
    if (writer && pw && event.target.value && contents) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  }

  function onContentCheck(event) {
    setContents(event.target.value);
    if (event.target.value != "") {
      setContentsError("");
    }
    if (writer && pw && title && event.target.value) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  }

  const onClickNew = async () => {
    if (writer === "") {
      setWriterError("작성자를 작성해주세요.");
    }
    if (pw === "") {
      setPwError("비밀번호를 작성해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 작성해주세요.");
    }
    if (contents === "") {
      setContentsError("내용을 작성해주세요.");
    }

    if (writer && pw && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: pw,
              title: title,
              contents: contents,
            },
          },
        });
        alert("게시글 등록이 완료되었습니다.");
        console.log(result.data.createBoard._id);
        router.push(`/section11/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    if (!title && !contents) {
      //if쓸 때 긍정문으로 쓰지말고 부정문으로 쓰는게 실무에서 효과적!
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!pw) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput = {}; // 어차피 쿼리에서도 단독 객체에서 넣어야하니까 객체를 생성해서 만든다.
    // title, contents가 필요하니까 키랑 값을 만들어줌.(엄청 어려웠따... ㄹㅇ)
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      await updateBoard({
        variables: {
          updateBoardInput,
          password: pw,
          boardId: router.query.board,
        },
      });
      alert("작성된 글이 수정되었습니다.");
      router.push(`/section11/${router.query.board}`);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <BoardWriteEditUI
      onClickNew={onClickNew}
      onClickEdit={onClickEdit}
      WriterCheck={onWriterCheck}
      PwCheck={onPwCheck}
      TitleCheck={onTitleCheck}
      ContentCheck={onContentCheck}
      writerError={writerError}
      pwError={pwError}
      titleError={titleError}
      contentsError={contentsError}
      isTrue={isTrue}
      data={props.data}
      isEdit={props.isEdit}
    />
  );
}
