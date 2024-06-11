
export default function BoardFetchUI(props) {

  return (
    <div>
      <div>
        <span style={{margin : "10px"}}>작성자</span>
        <span style={{margin : "10px"}}>제목</span>
        <span style={{margin : "10px"}}>내용</span>
      </div>
      {props.data?.fetchBoards.map(el => (
        <div key={el._id}>
          <span style={{margin : "10px"}}>{el.writer}</span>
          <span style={{margin : "10px"}}>{el.title}</span>
          <span style={{margin : "10px"}}>{el.contents}</span>
          <button id={el._id} onClick={props.onClickDelete}>삭제</button>
          //id 값은 fetchBoards 객체 안에 있는 id(글 아이디)
        </div>
      ))}
    </div>
  )
}