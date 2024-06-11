import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARDS } from "./BoardList.queries"
import BoardWriteUI from "./BoardList.presenter"


export default function BoardWrite() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS) 

    
  return (
    <BoardWriteUI 
      data={data}
    />
  )
}