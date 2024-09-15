import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/type/generated/types";

// variables가 없으면 이런식으로 작성
export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

export const useFetchUserLoggedIn = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return {
    data,
  };
};
