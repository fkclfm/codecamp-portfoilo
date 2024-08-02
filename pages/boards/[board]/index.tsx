import CommentList from "../../../src/units/boardComment/commentList/commentList.container";
import CommentWrite from "../../../src/units/boardComment/commentWrite/commentWrite.container";
import BoardDetail from "../../../src/units/boards/detail/BoardDetail.container";
export default function Board() {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
