import { useMutation, useQuery } from "@apollo/client";
import CommentListUI from "./commentList.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react"
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./commentList.queries";
import { IMutation, IMutationDeleteBoardCommentArgs, IMutationUpdateBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../commons/type/generated/types";


export default function CommentList() {
  const router = useRouter()
  const [ deleteBoardComment ] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)
  const [ updateBoardComment ] = useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(DELETE_BOARD_COMMENT)
  const { data } = useQuery<Pick<IQuery,"fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
    variables : { boardId: String(router.query.board) }
  })

  const onClickDeleteComment = async (event : MouseEvent<HTMLButtonElement>) => {
    
    const Commentpassword = prompt('비밀번호를 입력해주세요')
    try {
      await deleteBoardComment({
        variables: {
          password: Commentpassword,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables : { boardId: String(router.query.board) } 
          }
        ]
      })
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message); // 안전하게 `error.message`에 접근
    } else {
        alert("An unknown error occurred");
      }
    }
  }



  return (
    <CommentListUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
    />
  )
}