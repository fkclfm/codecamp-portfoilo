import { IPaginationUIProps } from "./Pagination.types";
import * as P from "./Pagination.styled";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <P.Wrapper>
      <img src="/images/prev.png" onClick={props.onClickPrev}></img>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.currentPage && (
            <span
              key={index + Number(props.startPage)}
              id={String(index + Number(props.startPage))}
              onClick={props.onClickPage}
            >
              {` ${index + Number(props.startPage)} `}
            </span>
          ),
      )}
      <img src="/images/next.png" onClick={props.onClickNext}></img>
    </P.Wrapper>
  );
}
