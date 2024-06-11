import BoardFetchUI from "./BoardFetch.presenter"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { FETCH_BOARD } from "./BoardFetch.queries"

export default function BoardFetch() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables : {
      boardId: router.query.board
    }
  }) 
  console.log(data)

  return (
    <BoardFetchUI data={data} />
  )
}