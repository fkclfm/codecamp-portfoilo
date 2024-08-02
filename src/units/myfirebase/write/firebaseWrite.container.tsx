import { ChangeEvent, useState, MouseEvent } from "react";
import FireBaseWriteUI from "./firebaseWrite.presenter";
import { FirebaseApp } from "../../../commons/libraries/firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useRouter } from "next/router";

export default function FireBaseWrite() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
    console.log(event.target.id);
    console.log(event.target.value);
  };

  const onClickWriteSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      // Firebase Firestore의 'boards' 컬렉션을 참조
      const boards = collection(getFirestore(FirebaseApp), "boards");
      // Firestore에 새 문서 추가
      await addDoc(boards, {
        ...inputs, // 상태의 현재 값을 문서로 추가
      });

      alert("게시물 등록에 성공하였습니다.");
      router.push("/firebase");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error writing document: ", error.message);
        alert("문서를 작성하는 데 실패했습니다. 다시 시도해 주세요.");
      } else {
        console.error("Unknown error: ", error);
        alert("알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <FireBaseWriteUI
      inputs={inputs}
      onChangeInput={onChangeInput}
      onClickWriteSubmit={onClickWriteSubmit}
    />
  );
}
