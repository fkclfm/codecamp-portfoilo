import { DocumentData } from "firebase/firestore";
import { MouseEvent } from "react";

export interface IFirebaseProps {
  datas?: DocumentData[];
  onClickMoveToFireBaseDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToFireBaseNew: () => void;
}
