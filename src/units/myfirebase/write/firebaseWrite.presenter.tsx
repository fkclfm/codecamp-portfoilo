import * as F from "./firebaseWrite.styled";
import { IFirebaseWriteProps } from "./firebaseWrite.types";

export default function FireBaseWriteUI(props: IFirebaseWriteProps) {
  return (
    <F.Container>
      <F.Wrapper>
        <F.InputBox>
          글 작성자:
          <input
            type="text"
            id="writer"
            value={props.inputs.writer}
            onChange={props.onChangeInput}
          />
          글 제목:
          <input
            type="text"
            id="title"
            value={props.inputs.title}
            onChange={props.onChangeInput}
          />
          글 내용:
          <input
            type="text"
            id="contents"
            value={props.inputs.contents}
            onChange={props.onChangeInput}
          />
          <button onClick={props.onClickWriteSubmit}>등록하기</button>
        </F.InputBox>
      </F.Wrapper>
    </F.Container>
  );
}
