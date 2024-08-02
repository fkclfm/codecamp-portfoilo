import { useRouter } from "next/router"
import { ApolloClient, gql, useQuery } from "@apollo/client"
import {
  Wrapper, Img, TitleText, 
  HorizonLine, Header, ProfileBox, Writer,
  Date, BoardBtn, BtnBox
} from "../../../styles/page"

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    } 
  }
`

export default function Board() {
  const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
      variables : {
        boardId: router.query.board
      }
    }) 
    console.log(data)

  return (
    <><Wrapper>
      <Header>
        <ProfileBox>
          <Writer>작성자 : {data?.fetchBoard.writer}</Writer>
          <Date>Date:{data?.fetchBoard.createdAt.substr(0, 10)}</Date>
        </ProfileBox>
      </Header>
      <HorizonLine />
      {/* 글 제목 */}
      <TitleText>{data?.fetchBoard.title}</TitleText>  
      {/* 글 내용 */}
      {data?.fetchBoard.contents}
    </Wrapper>
    <BtnBox>
        <BoardBtn>목록으로</BoardBtn>
        <BoardBtn>수정하기</BoardBtn>
        <BoardBtn>삭제하기</BoardBtn>
    </BtnBox></>
    
  )

}