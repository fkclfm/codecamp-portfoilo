<<<<<<< HEAD
import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
=======
import { gql } from "@apollo/client"

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
>>>>>>> laptop-work
      _id
      writer
      title
      createdAt
<<<<<<< HEAD
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;
=======
    } 
  }
`
>>>>>>> laptop-work
