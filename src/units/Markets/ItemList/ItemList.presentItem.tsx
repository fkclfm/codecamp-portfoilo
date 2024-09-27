import { useMoveToPage } from "../../../components/commons/hooks/customs/useMoveToPage";
import * as I from "./ItemList.styled";
import { IListItemProps } from "./ItemList.types";

export default function Listitem(props: IListItemProps) {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <I.ItemWrapper
      id={props.el._id}
      onClick={onClickMoveToPage(`/market/${props.el._id}`)}
    >
      <I.ItemImage
        src={`https://storage.googleapis.com/${props.el.images[0]}`}
      />
      <I.ItemTitle>{props.el.name}</I.ItemTitle>
      <I.ItemPrice>{props.el.price}원</I.ItemPrice>
      <I.ItemHashTagBox>
        {props.el.tags.map((tags: any, index: number) => (
          <I.ItemHashTag key={index}>{tags}</I.ItemHashTag>
        ))}
      </I.ItemHashTagBox>
    </I.ItemWrapper>
  );
}
