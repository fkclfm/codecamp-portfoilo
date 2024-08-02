import { IFirebaseProps } from "./firebaseList.types";
import * as S from "../../boards/list/BoardList.styled";

export default function FireBaseListUI(props: IFirebaseProps) {
  return (
    <S.Wrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>글 번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
      </S.Row>
      {props.datas?.map((el, index) => (
        <S.Row key={el.id}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnTitle id={el.id} onClick={props.onClickMoveToFireBaseDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <S.Button onClick={props.onClickMoveToFireBaseNew}>
          <S.PencilIcon src="/images/ic_create.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
