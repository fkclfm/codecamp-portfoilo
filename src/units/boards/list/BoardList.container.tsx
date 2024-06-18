import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARDS } from "./BoardList.queries"
import BoardWriteUI from "./BoardList.presenter"
import { MouseEvent } from "react";

export default function BoardWrite() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS) 

  console.log(data) 

  const onClickMoveToBoardDetail = (event : MouseEvent<HTMLDivElement>) => {
    router.push(`/section11/${ event.currentTarget.id }`)
  }

  const onClickMoveToBoardNew = () => {
    router.push("/section11/new")
  }
  return (
    <BoardWriteUI 
      data={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  )
}