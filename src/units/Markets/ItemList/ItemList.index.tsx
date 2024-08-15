import Listitem from "./ItemList.presentItem";
import { v4 as uuidv4 } from "uuid";
import * as I from "./ItemList.styled";
import { useMoveToPage } from "../../../components/commons/hooks/customs/useMoveToPage";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/type/generated/types";
import { FETCH_USED_ITEMS } from "./ItemList.queries";
import InfiniteScroll from "react-infinite-scroller";

export default function ItemLists() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const { onClickMoveToPage } = useMoveToPage();

  const onLoadItemMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery(prev, { fetchMoreResult }) {
        if (!fetchMoreResult.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  console.log(data);
  return (
    <I.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadItemMore}
        useWindow={false}
        hasMore={true || false}
      >
        {data?.fetchUseditems.map((el) => (
          <Listitem key={uuidv4()} el={el} />
        ))}
      </InfiniteScroll>
      <I.CreateItemBtn onClick={onClickMoveToPage("/market/new")}>
        상품 등록하기
      </I.CreateItemBtn>
    </I.Wrapper>
  );
}
