import { useState, useEffect, MouseEvent } from "react";
import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { FirebaseApp } from "../../../commons/libraries/firebase";
import FireBaseListUI from "./firebaseList.presenter";
import { useRouter } from "next/router";

export default function FireBaseList() {
  const router = useRouter();
  const [datas, setDatas] = useState<DocumentData[]>([]);
  const boards = collection(getFirestore(FirebaseApp), "boards");

  const fetchData = async () => {
    const result = await getDocs(boards); //객체 가져오기
    const data = result.docs.map((doc) => ({
      id: doc.id, // 문서 ID를 저장
      ...doc.data(),
    }));
    console.log(data);
    setDatas(data);
  };

  const onClickMoveToFireBaseDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/firebase/${event.currentTarget.id}`);
  };

  const onClickMoveToFireBaseNew = () => {
    router.push("/firebase/new");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FireBaseListUI
      datas={datas}
      onClickMoveToFireBaseNew={onClickMoveToFireBaseNew}
      onClickMoveToFireBaseDetail={onClickMoveToFireBaseDetail}
    />
  );
}
