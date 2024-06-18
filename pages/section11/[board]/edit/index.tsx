import { useQuery, gql } from "@apollo/client";
import BoardWrite from "../../../../src/units/boards/11-write/BoardWrite.container";
import { useRouter } from "next/router";

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
`;
export default function BoardEdit() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.board,
    },
  });
  return <BoardWrite isEdit={true} data={data} />;
}
