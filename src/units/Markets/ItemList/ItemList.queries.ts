import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $search: String, $isSoldout: Boolean) {
    fetchUseditems(page: $page, search: $search, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      tags
      seller {
        name
      }
      images
    }
  }
`;
