import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useMutation, useQuery } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries"

export default function BoardDetail() {
  const router = useRouter()
  const [ deleteBoard ] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARD, {
    variables : {
      boardId: router.query.board
    }
  })
  const onClickDelete = (event) => {
    try {
      deleteBoard({
        variables: { boardId: event.target.id },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId : router.query.board }
          }
        ]
      })
      alert("게시물이 성공적으로 삭제되었습니다.")
      router.push('/section11')
    } catch(error) {
      alert(error.message)
    }
    
    console.log(event.target)
  }

  const onClickList = () => {
    router.push("/section11")
  }

  return (
    <BoardDetailUI 
      data={data}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
    />
  )
}