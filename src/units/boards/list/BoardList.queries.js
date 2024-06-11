import { gql } from "@apollo/client"

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoard {
      _id
      writer
      title
      createdAt
    } 
  }
`