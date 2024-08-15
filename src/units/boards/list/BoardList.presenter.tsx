import Pagination from "../../../components/commons/pagination/Pagination.container";
import { getDate } from "../../../commons/year";
import * as S from "./BoardList.styled";
import { IBoardListProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import SearchItem from "../../../components/commons/search/Search.container";
export default function BoardListUI(props: IBoardListProps) {
  return (
    <S.Wrapper>
      <SearchItem
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
        //검색 했을때 화면이 변경되어야 해서 넣음
        refetchBoardsCount={props.refetchBoardsCount}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `$%^${props.keyword}$%^`)
              .split("$%^")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: props.keyword === el ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <Pagination refetch={props.refetch} count={props.count} />
      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/ic_create.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
