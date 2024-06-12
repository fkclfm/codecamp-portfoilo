import { gql } from "@apollo/client";

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $boardId: ID!
    $password: String
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      boardId: $boardId
      password: $password
    ) {
      _id
      writer
      title
      contents
    }
  }
`;
