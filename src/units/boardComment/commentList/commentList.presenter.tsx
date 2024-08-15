import { IFetchBoardCommentsProps } from "./commentList.types";
import InfiniteScroll from "react-infinite-scroller";
import CommentListUIItem from "./commentList.presenterItem";

export default function CommentListUI(props: IFetchBoardCommentsProps) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.onLoadMore}
      hasMore={true || false}
    >
      {props.data?.fetchBoardComments.map((el) => (
        <CommentListUIItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
