import { useState, ChangeEvent, MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteEditUI from "./BoardWriteEdit.presenter";
import { IupdateBoardInput, IBoardWriteProps } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../commons/type/generated/types";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const [isOpen, setIsOpen] = useState(false);
  const [isTrue, setIsTrue] = useState(true);
  const [zonecode, setZoneCode] = useState("");
  const [selectAddress, setSelectAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [writer, setWriter] = useState("");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [writerError, setWriterError] = useState("");
  const [pwError, setPwError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  console.log(props.data);
  const handleModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    if (data.jibunAddress) {
      setSelectAddress(data.jibunAddress);
    } else {
      setSelectAddress(data.address);
    }
    setZoneCode(data.zonecode);
    console.log(data);
  };

  const onAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  function onWriterCheck(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }

    if (event.target.value && pw && title && contents) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  }

  function onPwCheck(event: ChangeEvent<HTMLInputElement>) {
    setPw(event.target.value);
    if (event.target.value !== "") {
      setPwError("");
    }

    if (writer && event.target.value && title && contents) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  }

  function onTitleCheck(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (writer && pw && event.target.value && contents) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  }

  function onContentCheck(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (writer && pw && title && event.target.value) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  }
  function onYoutubeUrlCheck(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
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

    if (
      writer &&
      pw &&
      title &&
      contents &&
      youtubeUrl &&
      zonecode &&
      selectAddress
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password: pw,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode: zonecode,
                address: selectAddress,
                addressDetail,
              },
            },
          },
        });
        Modal.success({ content: "게시글 등록에 성공하였습니다." });
        router.push(`/section11/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({ content: "게시글 등록에 실패하였습니다." });
        } else {
          alert("An unknown error occurred");
        }
      }
    }
  };

  const onClickEdit = async () => {
    if (!title && !contents && !youtubeUrl) {
      //if쓸 때 긍정문으로 쓰지말고 부정문으로 쓰는게 실무에서 효과적!
      Modal.error({ content: "제목, 내용, 링크 중 하나를 입력해주세요." });
      return;
    }

    if (!pw) {
      Modal.error({ content: "비밀번호가 입력되지 않았습니다." });
      return;
    }

    const updateBoardInput: IupdateBoardInput = {}; // 어차피 쿼리에서도 단독 객체에서 넣어야하니까 객체를 생성해서 만든다.
    // title, contents가 필요하니까 키랑 값을 만들어줌.(엄청 어려웠따... ㄹㅇ)
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zonecode !== "" && selectAddress !== "" && addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zonecode) updateBoardInput.boardAddress.zipcode = zonecode;
      if (selectAddress) updateBoardInput.boardAddress.address = selectAddress;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      await updateBoard({
        variables: {
          updateBoardInput,
          password: pw,
          boardId: String(router.query.board),
        },
      });
      Modal.success({ content: "게시글 수정에 성공하였습니다." });
      router.push(`/section11/${router.query.board}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: "비밀번호가 잘못 입력되었습니다." });
      } else {
        alert("An unknown error occurred");
      }
    }
  };
  return (
    <BoardWriteEditUI
      handleModal={handleModal}
      handleComplete={handleComplete}
      onClickNew={onClickNew}
      onClickEdit={onClickEdit}
      WriterCheck={onWriterCheck}
      PwCheck={onPwCheck}
      TitleCheck={onTitleCheck}
      ContentCheck={onContentCheck}
      onYoutubeUrlCheck={onYoutubeUrlCheck}
      onAddressDetail={onAddressDetail}
      writerError={writerError}
      pwError={pwError}
      titleError={titleError}
      contentsError={contentsError}
      selectAddress={selectAddress}
      zonecode={zonecode}
      isOpen={isOpen}
      isTrue={isTrue}
      data={props.data}
      isEdit={props.isEdit}
    />
  );
}
