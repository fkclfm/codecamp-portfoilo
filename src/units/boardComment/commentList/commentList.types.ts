import { IQuery } from "../../../commons/type/generated/types";

export interface IFetchBoardCommentsProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export interface ICommentItemProps {
  el?: any;
}
