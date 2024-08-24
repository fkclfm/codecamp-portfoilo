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
      <I.ItemMarketBox>
        <I.ItemImage
          src={`https://storage.googleapis.com/${props.el.images[0]}`}
        />
        <I.ItemContainer>
          <I.ItemCard>
            <I.ItemName>{props.el.name}</I.ItemName>
            <I.ItemRemark>{props.el.remarks}</I.ItemRemark>
            <I.ItemHashTagBox>
              {props.el.tags.map((tags, index: number) => (
                <I.ItemHashTag key={index}>{tags}</I.ItemHashTag>
              ))}
            </I.ItemHashTagBox>
          </I.ItemCard>
          <I.ItemSellerWrapper>
            <I.ItemSellerImg src="/images/ic_profile.png" />
            <I.ItemSeller>
              {props.el.seller.name ? props.el.seller.name : "판매자"}
            </I.ItemSeller>
          </I.ItemSellerWrapper>
        </I.ItemContainer>
      </I.ItemMarketBox>
      <I.ItemPrice>{props.el.price}원</I.ItemPrice>
    </I.ItemWrapper>
  );
}
